import { useMemo, useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import Autocomplete from "@mui/material/Autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
//  TS(7016): Could not find a declaration file for module 'auto... Remove this comment to see the full error message
import parse from "autosuggest-highlight/parse";

import throttle from "lodash/throttle";

function loadScript(src: any, position: any, id: any) {
  if (!position) return;

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}
const autocompleteService = { current: null };

export default function LocationAutocomplete() {
  const theme = useTheme();
  const loaded = useRef(false);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwRp1e12ec1vOTtGiA4fcCt2sCUS78UYc&libraries=places",
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const handleChange = (event: any) => setInputValue(event.target.value);

  const fetch = useMemo(
    () =>
      throttle((input: any, callback: any) => {
        //  TS(2531): Object is possibly 'null'.
        autocompleteService.current.getPlacePredictions(input, callback);
      }, 200),
    []
  );

  useEffect(() => {
    let active = true;

    //  TS(2339): Property 'google' does not exist on type 'Window &... Remove this comment to see the full error message
    if (!autocompleteService.current && window.google) {
      //  TS(2339): Property 'google' does not exist on type 'Window &... Remove this comment to see the full error message
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }

    if (!autocompleteService.current) return undefined;

    if (inputValue === "") {
      setOptions([]);
      return undefined;
    }

    fetch({ input: inputValue }, (results: any) => {
      if (active) {
        setOptions(results || []);
      }
    });

    return () => {
      active = false;
    };
  }, [inputValue, fetch]);

  return (

    <Autocomplete
      freeSolo
      autoComplete
      includeInputInList
      //  TS(2322): Type '{ freeSolo: true; autoComplete: true; includ... Remove this comment to see the full error message
      disableOpenOnFocus
      id="google-map-demo"
      style={{ width: 300 }}
      options={options}
      filterOptions={(x) => x}
      //  TS(2339): Property 'description' does not exist on type 'nev... Remove this comment to see the full error message
      getOptionLabel={(option) => (typeof option === "string" ? option : option.description)}
      renderInput={(params) => (

        <TextField
          {...params}
          fullWidth
          variant="outlined"
          label="Add a location"
          onChange={handleChange}
        />
      )}
      renderOption={(option) => {
        //  TS(2339): Property 'structured_formatting' does not exist on... Remove this comment to see the full error message
        const matches = option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          //  TS(2339): Property 'structured_formatting' does not exist on... Remove this comment to see the full error message
          option.structured_formatting.main_text,
          matches.map((match: any) => [match.offset, match.offset + match.length])
        );

        return (

          <Grid container alignItems="center">

            <Grid size={12}>

              <LocationOnIcon sx={{ color: "text.secondary", marginRight: theme.spacing(2) }} />
            </Grid>


            <Grid size={12}>
              {parts.map((part: any, index: any) => (

                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                  {part.text}
                </span>
              ))}


              <Typography variant="body2" color="textSecondary">
                //  TS(2339): Property 'structured_formatting' does not exist on... Remove this comment to see the full error message
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
}

import { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "@mui/material/styles/styled";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const AutoComplete = styled(Autocomplete)({
  width: 300,
  marginBottom: "16px"
});

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia, Plurinational State of" },
  { label: "Bonaire, Sint Eustatius and Saba" },
  { label: "Bosnia and Herzegovina" },
  { label: "Botswana" },
  { label: "Bouvet Island" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" }
];

const filter = createFilterOptions();

export default function AutocompleteCombo() {
  const [value, setValue] = useState(null);

  const handleChange = (_: any, newValue: any) => {
    if (newValue && newValue.inputValue) {
      // @ts-expect-error TS(2345): Argument of type '{ label: any; }' is not assignab... Remove this comment to see the full error message
      setValue({ label: newValue.inputValue });
      return;
    }
    setValue(newValue);
  };

  const filterOptions = (options: any, params: any) => {
    const filtered = filter(options, params);
    if (params.inputValue !== "") {
      filtered.push({ inputValue: params.inputValue, label: `Add "${params.inputValue}"` });
    }
    return filtered;
  };

  return (
    <Fragment>
      <AutoComplete
        options={suggestions}
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" fullWidth />
        )}
      />

      <AutoComplete
        value={value}
        options={suggestions}
        onChange={handleChange}
        filterOptions={filterOptions}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === "string") return option;
          // @ts-expect-error TS(2571): Object is of type 'unknown'.
          if (option.inputValue) return option.inputValue;
          // @ts-expect-error TS(2571): Object is of type 'unknown'.
          return option.label;
        }}
        // @ts-expect-error TS(2339): Property 'label' does not exist on type 'HTMLAttri... Remove this comment to see the full error message
        renderOption={(option) => option.label}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Free solo with text demo" variant="outlined" fullWidth />
        )}
      />

      <AutoComplete
        options={suggestions}
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        getOptionLabel={(option) => option.label}
        getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
        renderInput={(params) => (
          <TextField {...params} label="Disabled option" variant="outlined" fullWidth />
        )}
      />
    </Fragment>
  );
}

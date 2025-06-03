import { useState } from "react";
import { Box, Input, Slider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function InputSlider() {

  const [value, setValue] = useState<number | "">(30);

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setValue(typeof newValue === "number" ? newValue : newValue[0]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue === "" ? "" : Number(inputValue));
  };

  const handleBlur = () => {
    if (value === "") return;
    if (value < 0) setValue(0);
    else if (value > 100) setValue(100);
  };

  return (
    <Box width={250}>
      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid size={12}>
          <VolumeUp />
        </Grid>

        <Grid size={12}>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>

        <Grid size={12}>
          <Input
            value={value}
            margin="dense"
            sx={{ width: 42 }}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

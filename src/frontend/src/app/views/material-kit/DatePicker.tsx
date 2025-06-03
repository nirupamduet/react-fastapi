import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";

export default function MaterialUIDatePickers() {
  const [selectedDate, setSelectedDate] = useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = (date: any) => setSelectedDate(date);

  return (

    <LocalizationProvider dateAdapter={AdapterDateFns}>
      //  TS(2769): No overload matches this call.
      <Grid container justify="space-around" sx={{ width: "60%" }}>

        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          //  TS(2322): Type '{ value: Date; onChange: (date: any) => void... Remove this comment to see the full error message
          renderInput={(props: any) => <TextField {...props} variant="standard" id="mui-pickers-date" label="Date picker" />}
        />


        <TimePicker
          value={selectedDate}
          onChange={handleDateChange}
          //  TS(2322): Type '{ value: Date; onChange: (date: any) => void... Remove this comment to see the full error message
          renderInput={(props: any) => <TextField {...props} variant="standard" id="mui-pickers-date" label="Time picker" />}
        />
      </Grid>
    </LocalizationProvider>
  );
}

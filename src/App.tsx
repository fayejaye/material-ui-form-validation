import React from "react";
import "./App.css";
import { Button, TextField, Collapse } from "@material-ui/core";

function App() {
  const [phone, setPhone] = React.useState<string>();
  const [errors, setErrors] = React.useState<{ phone: string }>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setErrors({ phone: "" });
    setPhone(value);
    let reg = new RegExp(/^\d*$/).test(value);
    if (!reg) {
      setErrors({ phone: "Only numbers are permitted" });
    }
  };

  return (
    <div className="App">
      <TextField
        id="outlined-basic"
        autoComplete="off"
        value={phone}
        label="Phone number"
        inputProps={{ maxLength: 255 }}
        onChange={handleChange}
        required
        type="number"
        error={Boolean(errors?.phone)}
        helperText={errors?.phone}
        variant="outlined"
      />
      <Collapse in={phone?.length! > 0 && errors?.phone === ""}>
        <div style={{ width: "100%", marginTop: "10px" }}>
          <Button variant="contained" color="primary">
            SAVE
          </Button>
        </div>
      </Collapse>
    </div>
  );
}

export default App;

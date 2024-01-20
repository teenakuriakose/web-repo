import { TextField } from "@mui/material";
import React from "react";

const TextInput = (props: any) => {
  const { label, type, error = false, errorMessage, ...rest } = props;
  return (
    <TextField
      label={label}
      type={type}
      error={error}
      helperText={errorMessage}
      {...rest}
    />
  );
};

export default TextInput;

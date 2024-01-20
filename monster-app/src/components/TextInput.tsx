import { TextField } from "@mui/material";
import React from "react";

const TextInput = (props: any) => {
  const { label, type, ...rest } = props;
  return <TextField label={label} type={type} />;
};

export default TextInput;

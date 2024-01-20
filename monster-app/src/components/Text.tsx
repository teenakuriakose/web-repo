import { Typography } from "@mui/material";
import React from "react";

const Text = (props: any) => {
  const { children, variant, color, ...rest } = props;
  return (
    <Typography variant={variant} color={color}>
      {children}{" "}
    </Typography>
  );
};

export default Text;

import React from "react";
import {
  Box,
  Button,
  AppBar as CoreAppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Text from "./Text";

type AppBarType = {
  textContent: string;
  rightContent?: React.ReactElement;
};

const AppBar = (props: AppBarType) => {
  const { textContent = "", rightContent } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CoreAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Text component="div" sx={{ flexGrow: 1 }}>
            {textContent}
          </Text>
          {rightContent}
        </Toolbar>
      </CoreAppBar>
    </Box>
  );
};

export default AppBar;

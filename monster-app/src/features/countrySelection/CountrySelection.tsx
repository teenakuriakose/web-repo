import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React, { useContext, useState } from "react";
import useTheme from "@mui/material/styles/useTheme";
import { useTranslation } from "react-i18next";
import { DispatchContext, StateContext } from "../../context/context";
import Text from "../../components/Text";
import { COUNTRIES } from "../../constants";
import { SELECT_COUNTRY } from "../../context/actions/appContextActions";

const CountrySelection = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const [anchorCountry, setAnchorCountry] = useState<null | HTMLElement>(null);

  const countries = [
    { label: t(`countries.${COUNTRIES.AE}`), value: COUNTRIES.AE },
    { label: t(`countries.${COUNTRIES.IN}`), value: COUNTRIES.IN },
    { label: t(`countries.${COUNTRIES.PK}`), value: COUNTRIES.PK },
    { label: t(`countries.${COUNTRIES.EG}`), value: COUNTRIES.EG },
  ];

  const handleOpenCountryMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorCountry(event.currentTarget);
  };

  const handleCloseCountryMenu = () => {
    setAnchorCountry(null);
  };

  const handleCountrySelection = (country: any) => {
    dispatch({ type: SELECT_COUNTRY, payload: country.value });
    handleCloseCountryMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={t("changeCountry")}>
        <IconButton onClick={handleOpenCountryMenu} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: theme.palette.primary.light }}>
            <Text> {state.country}</Text>
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorCountry}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorCountry)}
        onClose={handleCloseCountryMenu}
      >
        {countries.map((country) => (
          <MenuItem
            key={country.value}
            onClick={() => handleCountrySelection(country)}
          >
            <Text textAlign="center">{country.label}</Text>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default CountrySelection;

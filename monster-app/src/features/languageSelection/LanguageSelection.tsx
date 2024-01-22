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
import { DIRECTION, LANGUAGES } from "../../constants";
import { selectLanguage } from "../../context/actions/appContextActions";
import i18n from "../../i18n";
import { isRTLLanguage } from "../../utils/IsRTL";

const LanguageSelection = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const [anchorLanguage, setAnchorLanguage] = useState<null | HTMLElement>(
    null
  );

  const languages = [
    { label: t(`languages.${LANGUAGES.EN}`), value: LANGUAGES.EN },
    { label: t(`languages.${LANGUAGES.AR}`), value: LANGUAGES.AR },
    { label: t(`languages.${LANGUAGES.HI}`), value: LANGUAGES.HI },
  ];

  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorLanguage(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorLanguage(null);
  };

  const handleLanguageSelection = (language: any) => {
    dispatch(selectLanguage(language.value));
    i18n.changeLanguage(language.value);
    document.body.setAttribute(
      "dir",
      isRTLLanguage(language.value) ? DIRECTION.RTL : DIRECTION.LTR
    );
    handleCloseLanguageMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={t("changeLanguage")}>
        <IconButton onClick={handleOpenLanguageMenu} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: theme.palette.primary.light }}>
            <Text> {state.lang}</Text>
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorLanguage}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorLanguage)}
        onClose={handleCloseLanguageMenu}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.value}
            onClick={() => handleLanguageSelection(language)}
          >
            <Text textAlign="center">{language.label}</Text>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSelection;

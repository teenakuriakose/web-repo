import React, { useContext } from "react";
import DividedLayout from "../../layout/DividedLayout";
import { Avatar, Box, Grid, IconButton, useTheme } from "@mui/material";
import Text from "../../components/Text";
import { useTranslation } from "react-i18next";
import ContainerLayout from "../../layout/ContainerLayout";
import { DispatchContext, StateContext } from "../../context/context";
import { LOGIN } from "../../router/config";
import { useNavigate } from "react-router-dom";
import useCheckAuthentication from "../../hooks/useCheckAuthentication";
import SvgLogout from "../../icons/SvgLogout";

const Dashboard = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const state = useContext(StateContext);
  const navigate = useNavigate();
  useCheckAuthentication();
  const content = () => {
    return (
      <>
        <Grid>
          <Box mb={4}>
            <Text variant={"h3"} color={theme.palette.primary.main}>
              {`${t("welcomeUser", { username: state.user.username })} `}
            </Text>
          </Box>
          <Box mb={4}>
            <Text variant={"subtitle1"} color={theme.palette.grey}>
              {t("selectedCountry")}
            </Text>
            <Text variant={"caption1"} color={theme.palette.primary.main}>
              {t(`countries.${state.country}`)}
            </Text>
          </Box>
          <Box mb={4}>
            <Text variant={"subtitle1"} color={theme.palette.grey}>
              {t("selectedLanguage")}
            </Text>
            <Text variant={"caption1"} color={theme.palette.primary.main}>
              {t(`languages.${state.lang}`)}
            </Text>
          </Box>
        </Grid>
      </>
    );
  };

  return (
    <ContainerLayout
      content={content()}
      appBarText=""
      appBarRightContent={
        <>
          <IconButton
            onClick={() => {
              navigate(LOGIN, { replace: true });
            }}
            sx={{ p: 0 }}
          >
            <Avatar sx={{ bgcolor: theme.palette.primary.light }}>
              <SvgLogout fill="#fff" />
            </Avatar>
          </IconButton>
        </>
      }
    />
  );
};

export default Dashboard;

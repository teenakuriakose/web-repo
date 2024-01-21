
import React, { useContext, useEffect } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../../router/config";
import { useTranslation } from "react-i18next";
import { DispatchContext, StateContext } from "../../context/context";
import {
  SELECT_COUNTRY,
  SELECT_LANGUAGE,
  clearUserAuthentication,
} from "../../context/actions/appContextActions";
import DividedLayout from "../../layout/DividedLayout";
import SvgMonster from "../../icons/SvgMonster";
import LoginForm from "./LoginForm";
import useTheme from "@mui/material/styles/useTheme";
import CountrySelection from "../countrySelection/CountrySelection";
import LanguageSelection from "../languageSelection/LanguageSelection";
import { Box } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const theme = useTheme();

  useEffect(() => {
    dispatch(clearUserAuthentication());
  }, []);

  return (
    <>
      <DividedLayout
        leftContent={
          <SvgMonster height={"100%"} color={theme.palette.primary.main} />
        }
        rightContent={<LoginForm />}
        appBarText={" "}
        appBarRightContent={
          <>
            <Box mr={2}>
              <CountrySelection />
            </Box>

            <LanguageSelection />
          </>
        }
      />
    </>
  );
};
export default Login;
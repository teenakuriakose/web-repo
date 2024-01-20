
import React, { useContext } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../../router/config";
import { useTranslation } from "react-i18next";
import { DispatchContext, StateContext } from "../../context/context";
import {
  SELECT_COUNTRY,
  SELECT_LANGUAGE,
} from "../../context/actions/appContextActions";
import DividedLayout from "../../layout/DividedLayout";
import SvgMonster from "../../icons/SvgMonster";
import LoginForm from "./LoginForm";
import useTheme from "@mui/material/styles/useTheme";
import CountrySelection from "../countrySelection/CountrySelection";
import LanguageSelection from "../languageSelection/LanguageSelection";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const theme = useTheme();

  console.log("state", state);
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
            <CountrySelection />
            <LanguageSelection />
          </>
        }
      />
      <div>
        This is login
        <Button onClick={() => navigate(DASHBOARD)}>{t("login")}</Button>
      </div>
      <Button
        onClick={() => {
          dispatch({ type: SELECT_LANGUAGE, payload: "ar" });
        }}
      >
        {t("language.choose")}
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: SELECT_COUNTRY, payload: "IN" });
        }}
      >
        {t("language.choose")}
      </Button>
    </>
  );
};
export default Login;
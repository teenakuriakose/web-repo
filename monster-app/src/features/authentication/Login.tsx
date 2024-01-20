
import React, { useContext } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../../router/config";
import { useTranslation } from "react-i18next";
import { DispatchContext, StateContext } from "../../context/context";
import { SELECT_LANGUAGE } from "../../context/actions/appContextActions";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  console.log("state", state);
  return (
    <>
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
    </>
  );
};
export default Login;

import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../../router/config";
import { useTranslation } from "react-i18next";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div>
        This is login
        <Button onClick={() => navigate(DASHBOARD)}>{t("login")}</Button>
      </div>
      <Button onClick={() => {}}>{t("language.choose")}</Button>
    </>
  );
};
export default Login;
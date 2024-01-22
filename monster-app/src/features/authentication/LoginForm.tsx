import { Box, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Text from "../../components/Text";
import { useTranslation } from "react-i18next";
import useTheme from "@mui/material/styles/useTheme";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { useCredentialsValidation } from "../../hooks/useCredentialsValidation";
import { DispatchContext, StateContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "../../router/config";
import { setUserAuthentication } from "../../context/actions/appContextActions";
import useFetch from "../../network/hooks/useFetch";
import * as Endpoints from "../../network/Endpoints";

const LoginForm = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  const {
    username,
    setUsername,
    usernameError,
    isUsernameValid,
    password,
    setPassword,
    passwordError,
    isPasswordValid,
    handleUsernameFocus,
    handlePasswordFocus,
  } = useCredentialsValidation(state.country, t);

  const { execute, response, error: apiError, loading } = useFetch();

  useEffect(() => {
    if (response) {
      dispatch(setUserAuthentication({ authenticated: true, username }));
      navigate(DASHBOARD, { replace: true });
    }
  }, [response]);

  return (
    <Box>
      <Text variant={"h3"} color={theme.palette.primary.main}>
        {t("welcome")}
      </Text>
      <Box mt={4} minWidth={300}>
        <TextInput
          fullWidth
          label={t("username")}
          value={username}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(event.target.value)
          }
          error={!!usernameError}
          errorMessage={usernameError || ""}
          onFocus={handleUsernameFocus}
        />
      </Box>
      <Box mt={2} minWidth={400}>
        <TextInput
          fullWidth
          label={t("password")}
          value={password}
          type={"password"}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
          error={!!passwordError}
          errorMessage={passwordError || ""}
          onFocus={handlePasswordFocus}
        />
      </Box>
      <Box>
        {apiError && (
          <Text variant={"caption"} color={theme.palette.error.main}>
            {t("errorMessage.invalidCredentials")}
          </Text>
        )}
      </Box>
      <Box mt={2}>
        <Button
          disabled={
            !(isUsernameValid && isPasswordValid && username && password)
          }
          onClick={() => {
            execute(Endpoints.FETCH_USER, {
              method: "GET",
              data: { username, password, country: state.country },
            });
          }}
        >
          {t("login")}
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;

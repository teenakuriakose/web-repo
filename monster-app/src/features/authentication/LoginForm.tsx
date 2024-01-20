import { Grid } from "@mui/material";
import React from "react";
import Text from "../../components/Text";
import { useTranslation } from "react-i18next";
import useTheme from "@mui/material/styles/useTheme";

const LoginForm = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid>
      <Text variant={"h2"} color={theme.palette.primary.main}>
        {t("welcome")}
      </Text>
    </Grid>
  );
};

export default LoginForm;

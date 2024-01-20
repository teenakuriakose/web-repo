import { Box, Grid } from "@mui/material";
import React from "react";
import Text from "../../components/Text";
import { useTranslation } from "react-i18next";
import useTheme from "@mui/material/styles/useTheme";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

const LoginForm = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box>
      <Text variant={"h3"} color={theme.palette.primary.main}>
        {t("welcome")}
      </Text>
      <Box mt={8} width={"100%"}>
        <TextInput label={t("username")} />
      </Box>
      <Box mt={4}>
        <TextInput label={t("password")} type={"password"} />
      </Box>
      <Button></Button>
    </Box>
  );
};

export default LoginForm;

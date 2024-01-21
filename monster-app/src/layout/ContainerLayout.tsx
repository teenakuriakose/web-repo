import { Container, Grid, Hidden } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import React from "react";
import AppBar from "../components/AppBar";

type LayoutType = {
  content: React.ReactElement;
  appBarText: string;
  appBarRightContent?: React.ReactElement;
};

const ContainerLayout = (props: LayoutType) => {
  const { content, appBarText, appBarRightContent } = props;

  return (
    <>
      <AppBar textContent={appBarText} rightContent={appBarRightContent} />
      <Container maxWidth="lg">
        <Grid
          item
          container
          spacing={1}
          justifyContent={"center"}
          marginTop={"50px"}
        >
          <Grid
            item
            container
            xs={12}
            sm={12}
            md={12}
            lg={12}
            justifyContent={"center"}
          >
            {content}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContainerLayout;

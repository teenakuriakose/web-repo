import { Container, Grid, Hidden } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import React from "react";
import AppBar from "../components/AppBar";

type LayoutType = {
  leftContent: React.ReactElement;
  rightContent: React.ReactElement;
  appBarText: string;
  appBarRightContent?: React.ReactElement;
};

const DividedLayout = (props: LayoutType) => {
  const { leftContent, rightContent, appBarText, appBarRightContent } = props;

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
            lg={3}
            md={4}
            sx={{
              display: { xs: "none", sm: "none", lg: "block", md: "block" },
            }}
            justifyContent={"center"}
          >
            {leftContent}
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={12}
            md={8}
            lg={9}
            justifyContent={"center"}
          >
            {rightContent}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DividedLayout;

import { Container, Grid, Hidden } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import React from "react";

type LayoutType = {
  LeftContent: React.ReactElement;
  RightContent: React.ReactElement;
};

const DividedLayout = (props: LayoutType) => {
  const { LeftContent, RightContent } = props;

  return (
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
          sx={{ display: { xs: "none", sm: "none", lg: "block", md: "block" } }}
          justifyContent={"center"}
        >
          {LeftContent}
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
          {RightContent}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DividedLayout;

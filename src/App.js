import React from "react";
import { Container, Grid } from "@material-ui/core";
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <Grid container>
      <UserForm />
    </Grid>
  );
};

export default App;

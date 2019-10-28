import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import FruitsAndVegs from './containers/FruitsAndVegs/FruitsAndVegs';
import WhatToDo from './containers/WhatToDo/WhatToDo';
import Layout from './hoc/Layout/Layout';


const theme = createMuiTheme({
  typography: {
    fontFamily: ['Varela Round','sans-serif'].join(','),
    spacing: 8
  }
});

const routes = (
  <Switch>
    <Route path="/what-to-do" component={WhatToDo} />
    <Route path="/" component={FruitsAndVegs} />
    <Redirect to="/" />
  </Switch>
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {routes}
      </Layout>
    </ThemeProvider>
  );
}

export default withRouter(App);

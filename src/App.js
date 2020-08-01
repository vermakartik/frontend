import React from 'react';
import {CssBaseline, ThemeProvider} from '@material-ui/core'
import {createMuiTheme} from '@material-ui/core/styles'
import './App.css';
import './common.css'
import { Switch, Route, Redirect, BrowserRouter as Router, useRouteMatch } from 'react-router-dom';
import { BlogMatch } from './Components/Blog/BlogMatch';
import { Resume } from './Components/Resume/Resume';
import { NotFound } from './Components/NotFound/NotFound';
import { Navigation } from './Components/Navigation/Navigation';
import { amber, teal, yellow, deepOrange, purple, grey, red } from '@material-ui/core/colors';
import { FONT_MAIN } from './CommonConst';
import { Footer } from './Components/Footer/Footer';
import { Project } from 'Components/Projects/Projects';
import { About } from 'Components/About/About';
import { Contact } from 'Components/Contact/Contact';

const MakeTheme = ({
 type,
 primary,
 secondary
}) => { 

  return createMuiTheme({
    palette: {
      type: type,
      primary: primary,
      secondary: secondary
    },
    typography: {fontFamily: FONT_MAIN}
  })
}

const MainRoute = () => {

  const rotues = (
    <Switch>
      <Route exact path="/">
        <Navigation />
      </Route>
      <Route path="/blog">
        <BlogMatch />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
      <Route path="/projects">
        <Project />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )

  return rotues

}

const App = () => {


  const theme = MakeTheme({
    type: "dark",
    primary: yellow,
    secondary: amber 
  })
  console.log(theme)

  return (
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Router>
          <MainRoute />
          <Footer />
        </Router>
      </ThemeProvider>
  )
}

export default App;

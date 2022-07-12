// MUI theming
import { createTheme, ThemeProvider } from '@mui/material';
// MUI colors
import {
  red,
  amber,
  grey,
  green,
  cyan,
  } from '@mui/material/colors';
// Next component
import Head from 'next/head';
// React component
import { Fragment } from 'react';
// components
import NavBar from '../../04-surfaces/user/appbar/NavBar';
import StackSocial from '../stack/StackSocial';
import SpeedDialBtn from '../../05-navigation/speed-dial/SpeedDialBtn';

const userTheme = createTheme( {

  palette: {

    primary: {

      main: red['A700'],
    },

    secondary: {

      main: amber[700],
    },

    surface: {

      primary: grey[900],
      secondary: grey[800],
      tertiary: grey[700],
      quartet: grey[600],
    },

    buttons: {

      primary: {
        main: green[500],
        hover: green[700]
      },

      secondary: {
        main: cyan[500],
        hover: cyan[700]
      },

      link: {
        main: cyan[500]
      }
    },

    components: {

      card: {
        menu: grey[800],
        main: grey[900],
      }
    },
  }
});
const Layout = ( { children, title, description}) => {

  return (

    <ThemeProvider theme={ userTheme}>

      <Fragment>

  {/* Head component ____________________ */}
        <Head>

          <title>Único Reptiles | { title}</title>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
          <meta name='description' content={ description} />
        </Head>


  {/* Navbar component ____________________ */}
        <NavBar />
        <br />
        <br />
        <br />


  {/* Children layout component ____________________ */}
        { children}

  {/* Stack component ____________________ */}
        <StackSocial />

  {/* SpeedDial component ____________________ */}

        <SpeedDialBtn />
      </Fragment>
    </ThemeProvider>
  )
};

export default Layout;

Layout.defaultProps = {

  title: 'Venta legal de especies exóticas en México',
  description: 'Somos una empresa dedicada a la venta legal de especies exóticas en todo México, conócenos y sal de la rutina. Sé diferente, sé original. Séúnico reptiles',
}
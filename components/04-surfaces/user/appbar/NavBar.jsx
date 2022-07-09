// MUI components
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Box,
  Menu,
  MenuItem,
  } from '@mui/material';
// MUI icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// Next component
import Link from 'next/link';
// React component
import { Fragment, useState } from 'react';

const NavBar = () => {

  // MUI useTheme __________ //
  const theme = useTheme()
  // MUI MediaQuery __________ //
  const isMatch = useMediaQuery( theme.breakpoints.down( 'md'))


  const links = [
    {
      name: 'inicio',
      href: '/',
    }, {
      name: 'nosotros',
      href: '/nosotros',
    }, {
      name: 'disponiblees',
      href: '/disponibles',
    }
  ]

  return (

    <AppBar>

      <Toolbar>

        { isMatch ? (

          <Fragment>

            <Typography>is match</Typography>
          </Fragment>
        ) : (

          <Fragment>

            <Typography sx={{ mr: 'auto' }}>no match</Typography>

            { links.map( ( link, idx) => (

              <Link key={ idx} href={ link.href}>

                <Button sx={{ color: 'inherit', fontWeight: 'bold' }}>
                  { link.name}
                </Button>
              </Link>
            ))}
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  )
};

export default NavBar;
// MUI components
import {
  SpeedDial,
  SpeedDialAction,
  IconButton,
  keyframes
  } from '@mui/material'
//MUI Icon
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import PhoneIcon from '@mui/icons-material/Phone'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
// React component
import { Fragment } from 'react'
// Next component
import Link from 'next/link'



const SpeedDialBtn = () => {

  // SpeedDial actions array
  const actions = [
  
    {
      icon: <AddLocationAltIcon />,
      name: 'Maps',
      color: '#DB4437',
      hover: '#b32c20',
      href: 'https://goo.gl/maps/uDjDHmsdb37pa2f26'
    }, {
      icon: <PhoneIcon />,
      name: 'Teléfono',
      color: '#F4B400',
      hover: '#dba202',
      href: 'tel:3319147923'
    }, {
      icon: <FacebookOutlinedIcon />,
      name: 'Facebook',
      color: '#4267B2',
      hover: '#2e5094',
      href: 'https://www.facebook.com/kaled.coyula'
    }, {
      icon: <WhatsAppIcon />,
      name: 'WhatsApp',
      color: '#25D366',
      hover: '#16b551',
      href: 'https://wa.link/yupydt'
    }
  ]

  return (

    <Fragment>

      <SpeedDial
        ariaLabel='speed dial'
        icon={ <SpeedDialIcon />}
        sx={{
          position: 'fixed',
          bottom: '2em',
          right: '2em',
        }}
        FabProps={{
          sx: {
            bgcolor: 'secondary.main',
            '&:hover': {
              bgcolor: 'secondary.dark'
            }
          }
        }}>

        { actions.map( ( action, idx) => (

          <SpeedDialAction
            key={ idx}
            icon={ action.icon}
            tooltipTitle={ action.name}
            href={ action.href}
            target='_blank'
            sx={{
              color: 'white',
              background: action.color,
              '&:hover': {
                background: action.hover
              }}}/>

        )) }
      </SpeedDial>
    </Fragment>

  )
}

export default SpeedDialBtn
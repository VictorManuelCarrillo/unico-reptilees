// MUI components
import {
  Stack,
  Box,
  } from '@mui/material';
// MUI icons
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// Next compponent
import Link from 'next/link';

const StackSocial = () => {

  const socials = [
    {
      href: '/facebook',
      color: '#4267B2',
      icon: <FacebookOutlinedIcon sx={{ fontSize: '2.5em' }}/>,
    }, {
      href: '/whatsapp',
      color: '#25D366',
      icon: <WhatsAppIcon sx={{ fontSize: '2.5em' }}/>,
    }, {
      href: '/whatsapp',
      color: '#C13584',
      icon: <InstagramIcon sx={{ fontSize: '2.5em' }}/>,
    }
  ]

  return (

    <Stack sx={{ position: 'absolute', top: '50%', transform: 'translate(0, -50%)', width: '3em', cursor: 'pointer' }}>

      { socials.map( ( social, idx) => (

        <Link href={ social.href} key={ idx}>
        
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '3em',
            height: '3em',
            color: 'white',
            bgcolor: social.color, 
            '&:first-child': {
              borderRadius: '0 0.3em 0 0'
            },
            '&:last-child': {
              borderRadius: '0 0 0.3em 0'
            }}}>
            {social.icon}
          </Box>
        </Link>
      ))}
    </Stack>
  )
}

export default StackSocial;
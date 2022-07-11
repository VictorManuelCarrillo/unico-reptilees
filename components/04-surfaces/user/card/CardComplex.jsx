// MUI components
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  useTheme
  } from '@mui/material';
// MUI icons
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// React component
import { useState } from 'react';
// Next component
import Link from 'next/link';

const CardComplex = ( props) => {

  // Menu handle function
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // useTheme
  const theme = useTheme();

  return (

    <Card sx={{ bgcolor: 'components.card.main',
      [theme.breakpoints.up('xs')]: {
        maxWidth: '90vw'
      }, [theme.breakpoints.up('sm')]: {
        maxWidth: '50vw'
      }, [theme.breakpoints.up('md')]: {
        maxWidth: '30vw'
      }, [theme.breakpoints.up('lg')]: {
        maxWidth: '20vw'
      },}}>

  {/* Card Header component ____________________ */}
      <CardHeader
        title={ props.title}
        subheader={ props.category + ' ' + '-' + ' ' + props.subcategory }
        titleTypographyProps={{ fontSize: '1em', textTransform: 'uppercase', fontWeight: 'bold' }}
        subheaderTypographyProps={{ color: 'white'}}
        sx={{ p: 1, color: 'white' }}/>

  {/* Card Media component ____________________ */}
      <CardMedia
        component='img'
        image={ props.image}
        alt={ props.alt}
        sx={{ maxHeight: '15em' }}/>

  {/* Card Content component ____________________ */}
      <CardContent sx={{ p: 1, color: 'white' }}>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

          <Typography variant='h4' fontWeight='bold'>${ props.price}</Typography>

          <Box component='div'>

            { props.gender == 'macho' ? <MaleIcon sx={{ fontSize: '3em', color: '#3486eb' }}/> : null}
            { props.gender == 'hembra' ? <FemaleIcon sx={{ fontSize: '3em', color: '#eb348f' }}/> : null}
            { props.gender == 'sin sexar' ? <QuestionMarkIcon sx={{ fontSize: '3em', color: '#9f38d6' }}/> : null}
          </Box>
  
        </Box>
        <Typography variant='body2'>
          <strong>FASE:</strong> { props.morph}
          <br />
          <strong>EDAD:</strong> { props.age}
          <br />
          <strong>DESCRIPCIÓN:</strong> { props.description} ...
        </Typography>
      </CardContent>

  {/* Card Actions component ____________________ */}
      <CardActions sx={{ disply: 'flex', justifyContent: 'space-around' }}>

        <Link href={ props.href}>

          <Button sx={{ color: 'white', fontWeight: 'bold' }}>
            VER MÁS
          </Button>
        </Link>

  {/* Tooltip component __________ */}
        <Tooltip title='compartir' placement='top' arrow>

          <IconButton
            edge='start'
            size='large'
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>

            <ShareIcon sx={{ color: 'white' }}/>
          </IconButton>
        </Tooltip>

  {/* Menu component ____________________ */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transitionDuration={{ enter: 300, exit: 300 }}
          PaperProps={{ elevation: 12}}
          sx={{
            '& .MuiPaper-root': {
              mt: -5,
              ml: 7,
              color: 'white',
              bgcolor: 'components.card.menu'
            }
          }}>

  {/* MenuItem component __________ */}
          <Link href='https://twitter.com/intent/tweet?url=http%3A%2F%2Funicoreptiles.com%2F&text=Único+Reptiles%2C+Sé+diferente%2Csé+original.+Sé+Único+Reptiles.&hashtags=ainalesExoticos,unicoRpetiles'>

            <a target='_blank'>

              <MenuItem onClose={handleClose}>

                <ListItemIcon>

                  <TwitterIcon sx={{ color: 'white' }}/>
                </ListItemIcon>

                <ListItemText>Twitter</ListItemText>
              </MenuItem>
            </a>
          </Link>

  {/* MenuItem component __________ */}
          <Link href='https://www.facebook.com/sharer.php?u=http%3A%2F%2Fuicoreptiles.com%2F'>

            <a target='_blank'>

              <MenuItem onClose={handleClose}>

                <ListItemIcon>

                  <FacebookIcon sx={{ color: 'white' }}/>
                </ListItemIcon>

                <ListItemText>Facebook</ListItemText>
              </MenuItem>
            </a>
          </Link>
        </Menu>
      </CardActions>
    </Card>
  )
};

export default CardComplex;
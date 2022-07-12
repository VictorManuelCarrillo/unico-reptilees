// MUI components
import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
  } from '@mui/material';
// MUI icon
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
// Next component
import Link from 'next/link';
// React component
import { Fragment, useState } from 'react';

const ShareBtn = () => {

  // Menu handle function
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <Fragment>

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
    </Fragment>
  )
}

export default ShareBtn;

// component props values

// Tooltip

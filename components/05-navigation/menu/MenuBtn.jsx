import {
  Button,
  Menu,
  MenuItem
} from '@mui/material';
// React components
import { Fragment, useState } from 'react';

const MenuBtn = () => {

  const [ anchorEl, setAnchorEl ] = useState( null);
  const open = Boolean( anchorEl);
  const handleClick = (e) => {

    setAnchorEl( e.currentTarget);
  };
  const handleClose = () => {

    setAnchorEl( null);
  };

  return (

    <Fragment>

      <Button
        id='button-menu'
        aria-controls={ open ? 'menu' : undefined}
        aria-haspopup='true'
        aria-expanded={ open ? 'true' : undefined}
        onClick={ handleClick}>
        menu
      </Button>

      <Menu
        id='basic-menu'
        anchorEl={ anchorEl}
        open={ open}
        onClose={ handleClose}
        MenuListProps={{
          'aria-labelledby': 'button-menu',
        }}>

        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Fragment>
  )
};

export default MenuBtn;
// export default function BasicMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         Dashboard
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }
// MUI components
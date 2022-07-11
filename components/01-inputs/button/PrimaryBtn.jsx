// MUI component
import { Button } from '@mui/material';
// Next component
import Link from 'next/link';

const PrimaryBtn = ( props) => {

  return (

    <Link href={ props.href}>

      <a>

        <Button
          variant='contained'
          startIcon={ props.startIcon}
          endIcon={ props.endIcon}
          size={ props.size}
          sx={{
          borderRadius: 1,
          bgcolor: 'buttons.primary.main',
          '&:hover': {
            bgcolor: 'buttons.primary.hover'
          }}}>
          { props.text}
        </Button>
      </a>
    </Link>
  )
};

export default PrimaryBtn;

// component props values

// href = 'string'
// text = 'string'
// startIcon = <object>
// endIcon = <object>
// size = 'string'
// MUI component
import { Button } from '@mui/material';
// Next component
import Link from 'next/link';

const SecondaryBtn = ( props) => {

  return (

    <Link href={ props.href}>

      <a>

        <Button
          variant='outlined'
          startIcon={ props.startIcon}
          endIcon={ props.endIcon}
          size={ props.size}
          sx={{
          borderRadius: 5,
          color: 'buttons.secondary.main',
          border: '0.2em solid',
          '&:hover': {
            color: 'white',
            border: '0.2em solid',
            borderColor: 'buttons.secondary.hover',
            bgcolor: 'buttons.secondary.hover'
          }}}>
          { props.text}
        </Button>
      </a>
    </Link>
  )
};

export default SecondaryBtn;

// component props values

// href = 'string'
// text = 'string'
// startIcon = <object>
// endIcon = <object>
// size = 'string'
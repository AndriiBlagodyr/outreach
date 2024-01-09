import { Box, Button, styled } from '@mui/material';

export const NoteInputWrapper = styled(Box)(() => ({
  maxHeight: '200px',
  padding: '15px',
  borderRadius: '5px',
  backgroundColor: '#F6F6F6',
  '& .MuiInputBase-root': {
    paddingLeft: 0,
    paddingRight: 0,
    '& fieldset': {
      borderColor: 'transparent !important',
      paddingLeft: '15px',
    },
  },

  '& .MuiInputBase-input': {
    backgroundColor: '#fff',
    height: '40px !important',
    transition: 'height 0.5s ease',
    border: '1px solid #BEBEBE',
    paddingTop: '10px',
    paddingLeft: '15px',
    '&:hover': {
      border: '1px solid #52C7B4',
    },
    '&:focus': {
      border: '1px solid #52C7B4',
      height: '70px !important',
    },
  },
}));

export const ActionsSection = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '10px',
}));

export const IconActionsSection = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '10px',
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: '#52C7B4',
  '&:hover': {
    backgroundColor: '#2b6e63',
    boxShadow: 'none',
  },
}));

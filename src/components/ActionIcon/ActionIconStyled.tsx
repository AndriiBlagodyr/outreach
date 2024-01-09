import { Box, styled } from '@mui/material';

type IconWrapperProps = {
  active: boolean;
};

export const IconWrapper = styled(Box)(({ active }: IconWrapperProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '30px',
  border: '1px solid #bbb',
  borderRadius: '50%',
  backgroundColor: active ? '#04C6ED' : '#fff',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: active ? '#04C6ED' : '#f9f8f8',
  },
}));

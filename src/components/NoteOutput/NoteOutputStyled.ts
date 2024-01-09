import { Box, styled } from '@mui/material';

export const NoteOutputWrapper = styled(Box)(() => ({
  backgroundColor: '#F6F6F6',
  padding: '15px',
}));

export const TitleWrapper = styled(Box)(() => ({
  fontWeight: 'bold',
  fontSize: '16px',
  marginBottom: '10px',
}));

export const TitleColored = styled('span')(() => ({
  color: '#04C6ED',
}));

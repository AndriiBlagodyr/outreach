import { Box } from '@mui/material';

import {
  TitleWrapper,
  TitleColored,
  NoteOutputWrapper,
} from './NoteOutputStyled';

type NoteOutputProps = {
  title: string;
  subtitle: string;
};

export function NoteOutput({ title, subtitle }: NoteOutputProps) {
  return (
    <NoteOutputWrapper>
      <TitleWrapper>
        <TitleColored>You </TitleColored>
        {title}
        <TitleColored> Milton Romaguera</TitleColored>
      </TitleWrapper>
      <Box>{subtitle}</Box>
    </NoteOutputWrapper>
  );
}

import { useState } from 'react';
import { TextField } from '@mui/material';
import {
  SpeakerNotes,
  Phone,
  FreeBreakfast,
  EmojiFoodBeverage,
  Person,
} from '@material-ui/icons';

import { ActionIcon } from '../ActionIcon';
import {
  NoteInputWrapper,
  ActionsSection,
  IconActionsSection,
  StyledButton,
} from './NoteInputStyled';
import { MEETING_TYPES } from '../../constants';
import { MEETING_IDS_TYPE } from '../../types';

type NoteInputProps = {
  submitHandler: (textField: string, activeId: MEETING_IDS_TYPE) => void;
};

export function NoteInput({ submitHandler }: NoteInputProps) {
  const [textField, setTextField] = useState('');
  const [activeId, setActiveId] = useState<MEETING_IDS_TYPE>(
    MEETING_TYPES.SpeakerNotes.id
  );

  const clickHandler = (id: MEETING_IDS_TYPE) => {
    if (id !== activeId) setActiveId(id);
  };

  const submitClickHandler = () => {
    if (textField.length) {
      submitHandler(textField, activeId);
      setTextField('');
    }
  };
  return (
    <NoteInputWrapper>
      <TextField
        type='text'
        placeholder='Add a note about Milton Romaguera...'
        fullWidth
        className='textField'
        multiline
        value={textField}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTextField(event.target.value);
        }}
      />
      <ActionsSection>
        <IconActionsSection>
          <ActionIcon
            Icon={SpeakerNotes}
            activeId={activeId}
            id={MEETING_TYPES.SpeakerNotes.id}
            clickHandler={clickHandler}
          />
          <ActionIcon
            Icon={Phone}
            activeId={activeId}
            id={MEETING_TYPES.Phone.id}
            clickHandler={clickHandler}
          />
          <ActionIcon
            Icon={FreeBreakfast}
            activeId={activeId}
            id={MEETING_TYPES.FreeBreakfast.id}
            clickHandler={clickHandler}
          />
          <ActionIcon
            Icon={EmojiFoodBeverage}
            activeId={activeId}
            id={MEETING_TYPES.EmojiFoodBeverage.id}
            clickHandler={clickHandler}
          />
          <ActionIcon
            Icon={Person}
            activeId={activeId}
            id={MEETING_TYPES.Person.id}
            clickHandler={clickHandler}
          />
        </IconActionsSection>
        <StyledButton variant='contained' onClick={submitClickHandler}>
          Submit
        </StyledButton>
      </ActionsSection>
    </NoteInputWrapper>
  );
}

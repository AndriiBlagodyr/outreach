import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import {
  SpeakerNotes,
  Phone,
  FreeBreakfast,
  Person,
  ListAlt,
} from '@material-ui/icons';

import { NoteInput } from '../../components/NoteInput';
import { NoteOutput } from '../../components/NoteOutput';
import { MEETING_TYPES } from '../../constants';
import { MEETING_IDS_TYPE } from '../../types';
import {
  HomeLayout,
  HomeHeader,
  StepperIconWrapper,
  LabelWrapper,
} from './HomeStyled';

const initialActivities = [
  {
    title: 'added a note to',
    subtitle: `A test note of mesage type!`,
    date: '01/08/2024',
    StepIcon: SpeakerNotes,
  },
  {
    title: 'had a meeting with',
    subtitle: `And a more formal meeting.`,
    date: '01/06/2024',
    StepIcon: Person,
  },
  {
    title: 'had a call with',
    subtitle: `Then we had a follow-up phone call.`,
    date: '01/04/2024',
    StepIcon: Phone,
  },
  {
    title: 'had a coffe with',
    subtitle: 'We had coffe!',
    date: '01/01/2024',
    StepIcon: FreeBreakfast,
  },
];

export function Home() {
  const [activities, setActivities] = useState(initialActivities);

  const submitHandler = (textField: string, activeId: MEETING_IDS_TYPE) => {
    if (textField.length) {
      setActivities((prev) => {
        const { icon, title } = MEETING_TYPES[activeId];
        return [
          {
            title,
            subtitle: textField,
            date: new Date().toISOString(),
            StepIcon: icon,
          },
          ...prev,
        ];
      });
    }
  };

  return (
    <HomeLayout>
      <HomeHeader />
      <Box>
        <Stepper orientation='vertical'>
          <Step key='input-step' active>
            <StepperIconWrapper>
              <StepLabel StepIconComponent={ListAlt} />
            </StepperIconWrapper>
            <StepContent>
              <NoteInput submitHandler={submitHandler} />
            </StepContent>
          </Step>
          {activities.map((activity) => {
            const { title, subtitle, date, StepIcon } = activity;
            const differenceInTime =
              new Date().getTime() - new Date(date).getTime();
            const differenceInDays = Math.round(
              differenceInTime / (1000 * 3600 * 24)
            );
            return (
              <Step key={subtitle} active>
                <StepperIconWrapper>
                  <StepLabel StepIconComponent={StepIcon}>
                    <LabelWrapper>{differenceInDays}d</LabelWrapper>
                  </StepLabel>
                </StepperIconWrapper>
                <StepContent>
                  <NoteOutput title={title} subtitle={subtitle} />
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </HomeLayout>
  );
}

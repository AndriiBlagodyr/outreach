import {
  SpeakerNotes,
  Phone,
  FreeBreakfast,
  EmojiFoodBeverage,
  Person,
} from '@material-ui/icons';

export const MEETING_TYPES = {
  SpeakerNotes: {
    id: 'SpeakerNotes',
    icon: SpeakerNotes,
    title: 'adde a note to',
  },

  Phone: {
    id: 'Phone',
    icon: Phone,
    title: 'had a call with',
  },

  EmojiFoodBeverage: {
    id: 'EmojiFoodBeverage',
    icon: EmojiFoodBeverage,
    title: 'had a tea with',
  },

  FreeBreakfast: {
    id: 'FreeBreakfast',
    icon: FreeBreakfast,
    title: 'had a coffe with',
  },

  Person: {
    id: 'Person',
    icon: Person,
    title: 'had a meeting with',
  },
} as const;

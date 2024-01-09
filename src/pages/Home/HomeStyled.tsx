import { Box, styled } from '@mui/material';
import Outreach from '../../assets/outreach.svg';

export const HomeLayout = styled(Box)(() => ({
  margin: '20px 20% 0',
}));

export const HomeHeader = styled(Box)(() => ({
  width: '100%',
  height: '60px',
  backgroundSize: '180px 100px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 0,
  backgroundImage: `url(${Outreach})`,
}));

export const StepperIconWrapper = styled(Box)(() => ({
  width: '30px',
  height: '30px',
  border: '1px solid #bbb',
  borderRadius: '50%',
  position: 'relative',
  right: '3px',
  '& span': {
    color: '#bbb',
    position: 'relative',
    top: '-2px',
    left: '1.5px',
  },
}));

export const LabelWrapper = styled(Box)(() => ({
  position: 'relative',
  right: '65px',
}));

import { IconWrapper } from './ActionIconStyled';
import { MEETING_IDS_TYPE } from '../../types';

type ActionIconProps = {
  Icon: React.ElementType;
  activeId: string;
  id?: MEETING_IDS_TYPE;
  clickHandler?: (id: MEETING_IDS_TYPE) => void;
};

export function ActionIcon({
  Icon,
  activeId,
  id,
  clickHandler = () => null,
}: ActionIconProps) {
  const isActive = activeId === id;
  const iconColor = isActive ? '#fff' : '#bbb';

  const clickIconHandler = () => {
    if (id) {
      clickHandler(id);
    }
  };
  return (
    <IconWrapper active={isActive} onClick={clickIconHandler}>
      <Icon style={{ color: iconColor }} />
    </IconWrapper>
  );
}

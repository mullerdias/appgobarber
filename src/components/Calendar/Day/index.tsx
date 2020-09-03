import React, { useCallback, memo } from 'react';

import { Container } from './styles';

interface DayProps {
  date: Date | null;
  selected: boolean;
  disabled: boolean;
  handleDayClick: (day: Date) => void;
}

const Day: React.FC<DayProps> = ({
  date,
  selected,
  disabled,
  handleDayClick,
}) => {
  const handleButtonDayClick = useCallback(() => {
    if (date !== null) {
      handleDayClick(date);
    }
  }, [handleDayClick, date]);

  console.log('renderizou componente Day');

  return (
    <Container
      disabled={date === null}
      available={!disabled}
      selected={selected}
      onPress={handleButtonDayClick}
    >
      {date ? date.getDate() : ''}
    </Container>
  );
};

export default memo(Day);

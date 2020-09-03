import React, { useState, useCallback, useEffect, useMemo, memo } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Day from './Day';

import {
  Container,
  Week,
  WeekDays,
  WeekDay,
  Header,
  MonthTitle,
  ChangeMonthButton,
} from './styles';

interface CalendarProps {
  selectedDate: Date;
  disabledDays?: Date[];
  onDayClick?: (date: Date) => void;
  onMonthChange?: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  disabledDays = [],
  onDayClick,
  onMonthChange,
}) => {
  const [activeDate, setActiveDate] = useState(
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
    ),
  );
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());

  useEffect(() => {
    if (onDayClick) {
      onDayClick(activeDate);
    }
  }, [activeDate, onDayClick]);

  useEffect(() => {
    if (onMonthChange) {
      onMonthChange(new Date(currentYear, currentMonth, 1));
    }
  }, [currentYear, currentMonth, onMonthChange]);

  const handleNextMonth = useCallback(() => {
    if (currentMonth < 11) {
      setCurrentMonth(prevMonth => prevMonth + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear(prevYear => prevYear + 1);
    }
  }, [currentMonth]);

  const handlePrevMonth = useCallback(() => {
    if (currentMonth > 0) {
      setCurrentMonth(prevMonth => prevMonth - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear(prevYear => prevYear - 1);
    }
  }, [currentMonth]);

  const days = useMemo(() => {
    const firstDayColumn = new Date(currentYear, currentMonth, 1).getDay();
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    const maxWeeks = Math.ceil((firstDayColumn + lastDay) / 7);

    const calendar: Array<(Date | null)[]> = [];

    let day = 0;

    for (let row = 0; row < maxWeeks; row += 1) {
      calendar[row] = [];
      for (let col = 0; col < 7; col += 1) {
        if (day > 0 || (row === 0 && firstDayColumn === col)) {
          day += 1;
        }

        calendar[row][col] =
          day > 0 && day <= lastDay
            ? new Date(currentYear, currentMonth, day)
            : null;
      }
    }

    // console.log(`renderizou ${currentMonth}-${currentYear}`);

    return calendar;
  }, [currentYear, currentMonth]);

  const months = useMemo(() => {
    return [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
  }, []);

  const disabledDaysArr = useMemo(() => {
    const newDisabledDays: boolean[] = [];

    disabledDays.forEach(date => {
      newDisabledDays[date.getTime()] = true;
    });

    return newDisabledDays;
  }, [disabledDays]);

  console.log('renderizou compomente Calendar');

  return (
    <Container>
      <Header>
        <ChangeMonthButton activeOpacity={0.5} onPress={handlePrevMonth}>
          <Icon name="arrow-left" size={18} color="#999591" />
        </ChangeMonthButton>

        <MonthTitle>
          {months[currentMonth]} {currentYear}
        </MonthTitle>

        <ChangeMonthButton activeOpacity={0.5} onPress={handleNextMonth}>
          <Icon name="arrow-right" size={18} color="#999591" />
        </ChangeMonthButton>
      </Header>

      <WeekDays>
        <WeekDay>D</WeekDay>
        <WeekDay>S</WeekDay>
        <WeekDay>T</WeekDay>
        <WeekDay>Q</WeekDay>
        <WeekDay>Q</WeekDay>
        <WeekDay>S</WeekDay>
        <WeekDay>S</WeekDay>
      </WeekDays>

      {days.map((week, row) => (
        <Week key={row}>
          {week.map((date, col) => (
            <Day
              key={col}
              date={date}
              selected={
                date !== null && date.getTime() === activeDate.getTime()
              }
              disabled={date !== null ? disabledDaysArr[date.getTime()] : false}
              handleDayClick={setActiveDate}
            />
          ))}
        </Week>
      ))}
    </Container>
  );
};

export default memo(Calendar);

import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Calendar from '../../components/Calendar';

const CalendarPage: React.FC = () => {
  const [text, setText] = useState(0);
  const [date, setDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [disabledDays, setDisabledDays] = useState<Date[]>([]);

  const handleDateChange = useCallback((newDate: Date) => {
    setDate(newDate);
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  const handleDisableDays = useCallback(() => {
    const disabledDaysList = [
      new Date(2020, 5, Math.floor(Math.random() * 28)),
      new Date(2020, 5, Math.floor(Math.random() * 28)),
      new Date(2020, 5, Math.floor(Math.random() * 28)),
      new Date(2020, 5, Math.floor(Math.random() * 28)),
      new Date(2020, 5, Math.floor(Math.random() * 28)),
      new Date(2020, 5, Math.floor(Math.random() * 28)),
      new Date(2020, 6, Math.floor(Math.random() * 28)),
      new Date(2020, 6, Math.floor(Math.random() * 28)),
      new Date(2020, 6, Math.floor(Math.random() * 28)),
      new Date(2020, 6, Math.floor(Math.random() * 28)),
      new Date(2020, 6, Math.floor(Math.random() * 28)),
      new Date(2020, 6, Math.floor(Math.random() * 28)),
      new Date(2020, 6, Math.floor(Math.random() * 28)),
      new Date(2020, 6, Math.floor(Math.random() * 28)),
      new Date(2020, 6, Math.floor(Math.random() * 28)),
    ];

    setDisabledDays(disabledDaysList);
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          marginLeft: 12,
          marginRight: 12,
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        <Calendar
          selectedDate={date}
          onDayClick={handleDateChange}
          onMonthChange={handleMonthChange}
          disabledDays={disabledDays}
        />
      </View>
      <View>
        <Text style={{ color: '#fff', fontSize: 16 }}>{date.toString()}</Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={handleDisableDays}
          style={{ backgroundColor: '#666', padding: 10, margin: 20 }}
        >
          <Text>Disable days</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setText(prevNum => prevNum + 1)}
          style={{ backgroundColor: '#666', padding: 10, margin: 20 }}
        >
          <Text>{text} - clique para aumentar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CalendarPage;

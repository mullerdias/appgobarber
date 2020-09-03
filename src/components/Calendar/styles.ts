import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;

  background: #28262e;
  border-radius: 10px;
`;

export const Header = styled.View`
  padding: 0 12px;
  background: #3e3b47;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const MonthTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: 15px;
  flex: 1;
  text-align: center;
`;

export const ChangeMonthButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const WeekDays = styled.View`
  flex-direction: row;
  margin: 0 8px;
  height: 50px;
  align-items: center;
`;

export const WeekDay = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #666360;
  margin: 4px;
  font-size: 16px;
  flex: 1;
  text-align: center;
`;

export const Week = styled.View`
  flex-direction: row;
  margin: 0 8px;
`;

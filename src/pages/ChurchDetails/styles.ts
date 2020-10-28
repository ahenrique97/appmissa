import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

interface MassDayProps {
  isToday?: boolean;
}

export const Container = styled.View`
  padding: 20px 20px;
`;

export const BackButton = styled.TouchableOpacity`
  padding-left: 1px;
`;

export const ImgContainer = styled.View`
  align-items: center;
`;

export const ChurchImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;

export const InfoContainer = styled.View`
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;

  elevation: 14;
`;

export const ChurchName = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Bold';
  margin-bottom: 8px;
`;

export const ChurchAdress = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Regular';
`;

export const LocalizationButton = styled(RectButton)`
  margin-top: 10px;
  width: 100%;
  height: 28px;
  background-color: #009cff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  elevation: 10;
`;

export const LocalizationButtonText = styled.Text`
  padding: 5px;
  color: #fff;
  font-family: 'Roboto-Bold';
`;

export const ChurchScheduleContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;

  elevation: 10;

  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Bold';
  margin-bottom: 8px;
`;

export const ScheduleContainer = styled.View`
  width: 100%;
`;

export const SundayContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  margin-bottom: 3px;
`;

export const WeekDayText = styled.Text<MassDayProps>`
  font-size: 14px;
  font-family: 'Roboto-Regular';

  ${props =>
    props.isToday &&
    css`
      font-family: 'Roboto-Bold';
    `}
`;

export const HourContainer = styled.View`
  flex-direction: column;
`;

export const HourDivider = styled.View`
  height: 1px;
  width: 100%;
  margin: 4px 0;

  background-color: #d4d4d4;
`;

export const Hour = styled.Text<MassDayProps>`
  font-size: 14px;
  font-family: 'Roboto-Regular';
  flex-direction: column;

  ${props =>
    props.isToday &&
    css`
      font-family: 'Roboto-Bold';
    `}
`;

export const TodayTag = styled.View`
  position: absolute;
  padding: 2px;
  border-radius: 3px;
  background-color: #009cff;

  margin-left: 30px;
`;

export const TodayTagText = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Regular';
  color: #fff;
`;

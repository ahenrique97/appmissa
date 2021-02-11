import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

interface Today {
  isToday?: boolean;
}

interface lastDayElementProps {
  lastDayElement?: number;
}

interface Loading {
  isLoadingProp: boolean;
}

export const Container = styled.View`
  padding: 20px;
`;

export const LoadingContainer = styled.View<Loading>`
  padding: 20px;
  height: 100%;

  ${props =>
    props.isLoadingProp === true &&
    css`
      display: flex;
    `}

  ${props =>
    props.isLoadingProp === false &&
    css`
      display: none;
    `}
`;

export const ContentContainer = styled.View<Loading>`
  padding: 20px 20px;

  ${props =>
    props.isLoadingProp === true &&
    css`
      display: none;
    `}

  ${props =>
    props.isLoadingProp === false &&
    css`
      display: flex;
    `}
`;

export const BackButton = styled.TouchableOpacity``;

export const ImgContainer = styled.View`
  align-items: center;
`;

export const ChurchImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;

  border-width: 4px;
  border-color: #fff;
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
  justify-content: space-between;
  width: 100%;
`;

export const WeekdayContainer = styled.View`
  position: relative;

  margin-bottom: 3px;
`;

export const EachDayContainer = styled.View<lastDayElementProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 5px;
  border-bottom-width: 1px;
  margin-bottom: 5px;
  border-color: #d4d4d4;

  ${props =>
    props.lastDayElement === 6 &&
    css`
      padding-bottom: 0;
      border-bottom-width: 0;
      margin-bottom: 0;
    `}
`;

export const WeekDayText = styled.Text<Today>`
  font-size: 14px;

  ${props =>
    props.isToday &&
    css`
      font-family: 'Roboto-Bold';
    `}
`;

export const HourContainer = styled.View`
  flex-direction: column;
  max-width: 36px;
`;

export const Hour = styled.Text<Today>`
  font-size: 14px;
  font-family: 'Roboto-Regular';
  flex-direction: column;

  ${props =>
    props.isToday &&
    css`
      font-family: 'Roboto-Bold';
    `}
`;

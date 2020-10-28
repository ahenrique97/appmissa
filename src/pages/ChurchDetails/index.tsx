import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Feather';
import ChurchImg from '../../assets/igreja-matriz.jpg';

import {
  Container,
  BackButton,
  ImgContainer,
  ChurchImage,
  InfoContainer,
  ChurchName,
  ChurchAdress,
  LocalizationButton,
  LocalizationButtonText,
  ChurchScheduleContainer,
  Title,
  ScheduleContainer,
  SundayContainer,
  WeekDayText,
  TodayTag,
  TodayTagText,
  HourContainer,
  HourDivider,
  Hour,
} from './styles';

const ChurchDetails: React.FC = () => {
  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <LinearGradient
      colors={['#5db6f5', '#a4dbfc']}
      style={styles.linearGradient}
    >
      <Container>
        <BackButton onPress={navigateBack}>
          <Icon name="arrow-left" size={34} color="#000" />
        </BackButton>

        <ImgContainer>
          <ChurchImage source={ChurchImg} />
        </ImgContainer>

        <InfoContainer>
          <ChurchName>Nossa Senhora de Fátima</ChurchName>
          <ChurchAdress>
            Av. 15 de Novembro - Central, Santana - AP, 68925-141 Em frente a
            Praça Cívica de Santana
          </ChurchAdress>

          <LocalizationButton>
            <LocalizationButtonText>Ver localização</LocalizationButtonText>
          </LocalizationButton>
        </InfoContainer>

        <ChurchScheduleContainer>
          <Title>Missas</Title>

          <ScheduleContainer>
            <SundayContainer>
              <WeekDayText>Domingo</WeekDayText>

              <HourContainer>
                <Hour>07:30</Hour>
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText>Segunda-feira</WeekDayText>
              <HourContainer>
                <Hour>07:30</Hour>
                <Hour>07:30</Hour>
                <Hour>07:30</Hour>
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText>Terça-feira</WeekDayText>
              <HourContainer>
                <Hour>07:30</Hour>
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText>Quarta-feira</WeekDayText>
              <HourContainer>
                <Hour>07:30</Hour>
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText>Quinta-feira</WeekDayText>
              <HourContainer>
                <Hour>07:30</Hour>
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText>Sexta-feira</WeekDayText>
              <HourContainer>
                <Hour>07:30</Hour>
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText isToday={true}>
                Sábado
                <TodayTag>
                  <TodayTagText>Hoje</TodayTagText>
                </TodayTag>
              </WeekDayText>
              <HourContainer>
                <Hour isToday={true}>07:30</Hour>
              </HourContainer>
            </SundayContainer>
          </ScheduleContainer>
        </ChurchScheduleContainer>
      </Container>
    </LinearGradient>
  );
};

// add style to linear background
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default ChurchDetails;

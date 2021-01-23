import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import getDay from 'date-fns/getDay';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

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
  HourContainer,
  HourDivider,
  Hour,
} from './styles';

interface RouteParams {
  churchId: string;
}

export interface Church {
  id: string;
  name: string;
  image_url: string;
  address: string;
  neighborhood: string;
  city: string;
  zipcode: string;
  addressComplement: string;
}

export interface MassHours {
  sunday: [];
  monday: [];
  tuesday: [];
  wednesday: [];
  thursday: [];
  friday: [];
  saturday: [];
}

const ChurchDetails: React.FC = () => {
  const [church, setChurch] = useState<Church>({} as Church);
  const [massHours, setMassHours] = useState<MassHours>();

  const { goBack } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const [selectedChurchId] = useState(routeParams.churchId);

  useEffect(() => {
    api.get(`/churchs/${selectedChurchId}`).then(response => {
      setChurch(response.data);
      setMassHours(response.data.massHours);
    });
  }, []);

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
          <ChurchImage source={{ uri: church.image_url }} />
        </ImgContainer>

        <InfoContainer>
          <ChurchName>{church.name}</ChurchName>
          <ChurchAdress>
            {church.address} - {church.neighborhood}, {church.city},{' '}
            {church.zipcode} {'\n'}
            {church.addressComplement}
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
                {massHours?.sunday.map((hour, index) => (
                  <Hour key={index}>{hour}</Hour>
                ))}
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText>Segunda-feira</WeekDayText>
              <HourContainer>
                {massHours?.monday.map((hour, index) => (
                  <Hour key={index}>{hour}</Hour>
                ))}
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText>Terça-feira</WeekDayText>
              <HourContainer>
                {massHours?.tuesday.map((hour, index) => (
                  <Hour key={index}>{hour}</Hour>
                ))}
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText>Quarta-feira</WeekDayText>
              <HourContainer>
                {massHours?.wednesday.map((hour, index) => (
                  <Hour key={index}>{hour}</Hour>
                ))}
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText>Quinta-feira</WeekDayText>
              <HourContainer>
                {massHours?.thursday.map((hour, index) => (
                  <Hour key={index}>{hour}</Hour>
                ))}
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText>Sexta-feira</WeekDayText>
              <HourContainer>
                {massHours?.friday.map((hour, index) => (
                  <Hour key={index}>{hour}</Hour>
                ))}
              </HourContainer>
            </SundayContainer>

            <HourDivider />

            <SundayContainer>
              <WeekDayText isToday>Sábado</WeekDayText>
              <HourContainer>
                {massHours?.saturday.map((hour, index) => (
                  <Hour isToday key={index}>
                    {hour}
                  </Hour>
                ))}
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

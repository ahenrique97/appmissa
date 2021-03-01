import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { Linking, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import getISODay from 'date-fns/getISODay';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import SkeletonPlaceholder from '../../components/Skeletons/ChurchDetailsSkeleton';

import {
  Container,
  ContentContainer,
  LoadingContainer,
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
  WeekdayContainer,
  EachDayContainer,
  WeekDayText,
  HourContainer,
  Hour,
} from './styles';

import { ScrollView } from 'react-native-gesture-handler';

interface RouteParams {
  churchId: string;
}

export interface Church {
  id: string;
  localization_url: string;
  image_url: string;
  name: string;
  address: string;
  neighborhood: string;
  city: string;
  zipcode: string;
  addressComplement: string;
  masses: [];
}

interface Masses extends Church {
  name: string;
  hours: string;
}

const ChurchDetails: React.FC = () => {
  const [church, setChurch] = useState<Church>({} as Church);
  const [masses, setMasses] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const { goBack } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const [selectedChurchId] = useState(routeParams.churchId);

  useEffect(() => {
    setIsLoading(true);
    getChurchDetails();
  }, []);

  async function getChurchDetails(): Promise<void> {
    try {
      await api.get(`/churches/${selectedChurchId}`).then(response => {
        setIsLoading(false);
        setChurch(response.data);
        setMasses(response.data.masses);
      });
    } catch (err) {
      return console.log('Problema na requisição, verifique sua conexão');
    }
  }

  const currentDayInTheWeek = useMemo(() => getISODay(new Date()), []);

  const renderLoadingElement = () => {
    if (isLoading) {
      return <SkeletonPlaceholder />;
    }
  };

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <LinearGradient
      colors={['#5db6f5', '#a4dbfc']}
      style={styles.linearGradient}
    >
      <Container>
        <ScrollView>
          <BackButton onPress={navigateBack}>
            <Icon name="arrow-left" size={34} color="#000" />
          </BackButton>

          <LoadingContainer isLoadingProp={isLoading}>
            {renderLoadingElement()}
          </LoadingContainer>

          <ContentContainer isLoadingProp={isLoading}>
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

              <LocalizationButton
                onPress={() => Linking.openURL(church.localization_url)}
              >
                <LocalizationButtonText>Ver localização</LocalizationButtonText>
              </LocalizationButton>
            </InfoContainer>

            <ChurchScheduleContainer>
              <Title>Missas</Title>

              <ScheduleContainer>
                <WeekdayContainer>
                  {masses.map((data: Masses, index: number) => (
                    <EachDayContainer key={index} lastDayElement={index}>
                      <WeekDayText isToday={currentDayInTheWeek === index}>
                        {data.name}
                      </WeekDayText>
                      <HourContainer>
                        <Hour isToday={currentDayInTheWeek === index}>
                          {data.hours}
                        </Hour>
                      </HourContainer>
                    </EachDayContainer>
                  ))}
                </WeekdayContainer>
              </ScheduleContainer>
            </ChurchScheduleContainer>
          </ContentContainer>
        </ScrollView>
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

import React, { useCallback } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import {
  Container,
  SearchBar,
  ChurchList,
  ChurchImage,
  SearchBarContainer,
  TextContainer,
  Name,
  Adress,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';
import ChurchImg from '../../assets/igreja-matriz.jpg';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate('ChurchDetails');
  }, []);

  return (
    <>
      <LinearGradient
        colors={['#5db6f5', '#a4dbfc']}
        style={styles.linearGradient}
      >
        <Container>
          <SearchBarContainer>
            <SearchBar placeholder="Buscar Igreja"></SearchBar>
            <Icon name="search" size={24} color="#2FA8F3" />
          </SearchBarContainer>

          <ScrollView>
            <ChurchList
              onPress={() => {
                handleNavigate();
              }}
            >
              <ChurchImage
                source={ChurchImg}
                style={{ width: 62, height: 62 }}
              />

              <TextContainer>
                <Name>Nossa Senhora de Fátima</Name>
                <Adress>Av: 15 de novembro, Centro</Adress>
              </TextContainer>
            </ChurchList>

            <ChurchList
              onPress={() => {
                handleNavigate();
              }}
            >
              <ChurchImage
                source={ChurchImg}
                style={{ width: 62, height: 62 }}
              />

              <TextContainer>
                <Name>Nossa Senhora de Fátima</Name>
                <Adress>Av: 15 de novembro, Centro</Adress>
              </TextContainer>
            </ChurchList>

            <ChurchList
              onPress={() => {
                handleNavigate();
              }}
            >
              <ChurchImage
                source={ChurchImg}
                style={{ width: 62, height: 62 }}
              />

              <TextContainer>
                <Name>Nossa Senhora de Fátima</Name>
                <Adress>Av: 15 de novembro, Centro</Adress>
              </TextContainer>
            </ChurchList>

            <ChurchList
              onPress={() => {
                handleNavigate();
              }}
            >
              <ChurchImage
                source={ChurchImg}
                style={{ width: 62, height: 62 }}
              />

              <TextContainer>
                <Name>Nossa Senhora de Fátima</Name>
                <Adress>Av: 15 de novembro, Centro</Adress>
              </TextContainer>
            </ChurchList>

            <ChurchList
              onPress={() => {
                handleNavigate();
              }}
            >
              <ChurchImage
                source={ChurchImg}
                style={{ width: 62, height: 62 }}
              />

              <TextContainer>
                <Name>Nossa Senhora de Fátima</Name>
                <Adress>Av: 15 de novembro, Centro</Adress>
              </TextContainer>
            </ChurchList>

            <ChurchList
              onPress={() => {
                handleNavigate();
              }}
            >
              <ChurchImage
                source={ChurchImg}
                style={{ width: 62, height: 62 }}
              />

              <TextContainer>
                <Name>Nossa Senhora de Fátima</Name>
                <Adress>Av: 15 de novembro, Centro</Adress>
              </TextContainer>
            </ChurchList>

            <ChurchList
              onPress={() => {
                handleNavigate();
              }}
            >
              <ChurchImage
                source={ChurchImg}
                style={{ width: 62, height: 62 }}
              />

              <TextContainer>
                <Name>Nossa Senhora de Fátima</Name>
                <Adress>Av: 15 de novembro, Centro</Adress>
              </TextContainer>
            </ChurchList>
          </ScrollView>
        </Container>
      </LinearGradient>
    </>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default Home;

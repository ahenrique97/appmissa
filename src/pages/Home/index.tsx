import React, { useCallback, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import {
  Container,
  SearchBar,
  ChurchsList,
  ChurchListTitle,
  ChurchContainer,
  ChurchImage,
  SearchBarContainer,
  TextContainer,
  Name,
  Address,
} from './styles';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/Feather';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export interface Church {
  id: number;
  name: string;
  address: string;
  neighborhood: string;
  image_url: string;
}

const Home: React.FC = () => {
  const [churchs, setChurchs] = useState<Church[]>([]);

  const { navigate } = useNavigation();

  useEffect(() => {
    async function loadChurches(): Promise<void> {
      await api.get('/churchs').then(response => {
        setChurchs(response.data);
      });
    }

    loadChurches();
  }, []);

  const navigateToChurchDetails = useCallback(
    (churchId: number) => {
      navigate('ChurchDetails', { churchId });
    },
    [navigate],
  );

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

          <ChurchsList
            data={churchs}
            keyExtractor={church => church.id.toString()}
            ListHeaderComponent={<ChurchListTitle>Igrejas</ChurchListTitle>}
            renderItem={({ item: church }) => (
              <ChurchContainer
                onPress={() => navigateToChurchDetails(church.id)}
              >
                <ChurchImage
                  source={{ uri: church.image_url }}
                  style={{ width: 62, height: 62 }}
                />

                <TextContainer>
                  <Name>{church.name}</Name>
                  <Address>
                    {church.address}, {church.neighborhood}
                  </Address>
                </TextContainer>
              </ChurchContainer>
            )}
          ></ChurchsList>
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

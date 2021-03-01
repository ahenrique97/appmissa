import React, { useCallback, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import SkeletonPlaceholder from '../../components/Skeletons/HomeSkeleton';

import filter from 'lodash.filter';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/Feather';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  SearchBarContainer,
  SearchBar,
  ChurchNotFoundText,
  ChurchListTitle,
  LoadingContainer,
  ListContainer,
  ChurchsList,
  ChurchContainer,
  ChurchImage,
  TextContainer,
  Name,
  Address,
} from './styles';

export interface Church {
  id: number;
  name: string;
  address: string;
  neighborhood: string;
  image_url: string;
}

const Home: React.FC = () => {
  const [churchs, setChurchs] = useState<Church[]>([]);

  const [inputText, setInputText] = useState('');

  const [churchesFoundBySearching, setChurchesFoundBySearching] = useState<
    Church[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    getChurches();
  }, []);

  async function getChurches() {
    try {
      await api.get('/churches').then(response => {
        setIsLoading(false);
        setChurchs(response.data);
        setChurchesFoundBySearching(response.data);
      });
    } catch (error) {
      console.log('Problema na requisição, verifique sua conexão', error);
      return;
    }
  }

  function handleSearch(inputText: string) {
    const data = filter(churchs, church => {
      const churchNameFormatted = church.name.toLowerCase();
      const inputTextFormatted = inputText.toLowerCase();
      setInputText(inputText);

      return contains(churchNameFormatted, inputTextFormatted);
    });
    setChurchesFoundBySearching(data);
  }

  function contains(name: string, inputValue: string) {
    if (name.includes(inputValue)) {
      return true;
    }
    setIsLoading(false);
    return false;
  }

  const renderNoChurchsFound = () => {
    if (churchesFoundBySearching.length === 0 && churchs.length > 0) {
      return <ChurchNotFoundText>Nenhuma igreja encontrada</ChurchNotFoundText>;
    }
  };

  const renderLoadingElement = () => {
    if (isLoading) {
      return <SkeletonPlaceholder />;
    }
  };

  // const navigateToChurchDetails = useCallback(
  //   (churchId: number) => {
  //     navigate('ChurchDetails', { churchId });
  //     setInputText('');
  //     getChurches();
  //   },
  //   [navigate],
  // );

  return (
    <>
      <LinearGradient
        colors={['#5db6f5', '#a4dbfc']}
        style={styles.linearGradient}
      >
        <Container>
          <SearchBarContainer>
            <SearchBar
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleSearch}
              placeholder="Buscar Igreja"
              value={inputText}
            />
            <Icon name="search" size={24} color="#2FA8F3" />
          </SearchBarContainer>

          <ChurchListTitle>Igrejas</ChurchListTitle>

          {renderNoChurchsFound()}

          <LoadingContainer isLoadingProp={isLoading}>
            {renderLoadingElement()}
          </LoadingContainer>

          <ListContainer isLoadingProp={isLoading}>
            <ChurchsList
              testID="flat-list"
              showsVerticalScrollIndicator={false}
              data={churchesFoundBySearching}
              keyExtractor={church => church.id.toString()}
              renderItem={({ item: church }) => (
                <ChurchContainer
                  onPress={() =>
                    navigation.navigate('ChurchDetails', {
                      churchId: church.id,
                    })
                  }
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
            />
          </ListContainer>
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

import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { Church } from './index';
import { RectButton } from 'react-native-gesture-handler';

interface isFoundProps {
  isFound: boolean;
}

interface Loading {
  isLoadingProp: boolean;
}

export const Container = styled.View`
  padding: 20px;
`;

export const SearchBarContainer = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: #fff;
  border-radius: 40px;
  margin-top: 10px;
  margin-bottom: 20px;

  elevation: 14;

  flex-direction: row;
  align-items: center;
`;

export const SearchBar = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 16px;
`;

export const ChurchListTitle = styled.Text`
  font-size: 24px;
  margin: 0 auto 10px;
  color: #000;
  font-family: 'Roboto-Bold';
`;

export const LoadingContainer = styled.View<Loading>`
  align-items: center;

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

export const ListContainer = styled.View<Loading>`
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

export const ChurchsList = styled(FlatList as new () => FlatList<Church>)``;

export const ChurchNotFoundText = styled.Text<isFoundProps>`
  font-size: 18px;
  margin: 30px auto;
  color: #000;
  font-family: 'Roboto-Bold';

  ${props =>
    props.isFound === true &&
    css`
      display: none;
    `};
`;

export const ChurchContainer = styled(RectButton)`
  width: 100%;
  height: 99px;
  margin-bottom: 10px;
  padding: 15px 10px;
  border-radius: 10px;
  background-color: #fff;

  elevation: 3;

  flex-direction: row;
  align-items: center;
`;

export const ChurchImage = styled.Image`
  height: 62px;
  width: 62px;
  border-radius: 31px;
`;

export const TextContainer = styled.View`
  margin: 0 20px 0 20px;
`;

export const Name = styled.Text`
  margin-bottom: 8px;
  font-size: 19px;
  font-family: 'Roboto-Bold';
`;

export const Address = styled.Text`
  font-size: 13px;
  color: #6a6a6a;
  font-family: 'Roboto-Bold';
`;

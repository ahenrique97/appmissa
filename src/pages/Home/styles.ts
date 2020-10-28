import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 20px;
`;

export const SearchBarContainer = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: #fff;
  border-radius: 40px;
  margin-bottom: 30px;

  /* adds shadow */
  elevation: 10;

  flex-direction: row;
  align-items: center;
`;

export const SearchBar = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 16px;
`;

export const ChurchList = styled.TouchableOpacity`
  width: 100%;
  height: 99px;
  margin-bottom: 10px;
  padding: 15px 10px;
  border-radius: 10px;
  background-color: #fff;

  /* adds shadow */
  elevation: 10;

  flex-direction: row;
  align-items: center;
`;

export const ChurchImage = styled.Image`
  height: 62px;
  width: 62px;
  border-radius: 31px;
`;

export const TextContainer = styled.View`
  margin-left: 20px;
`;

export const Name = styled.Text`
  margin-bottom: 8px;
  font-size: 19px;
  font-family: 'Roboto-Bold';
`;

export const Adress = styled.Text`
  font-size: 13px;
  color: #6a6a6a;
  font-family: 'Roboto-Bold';
`;

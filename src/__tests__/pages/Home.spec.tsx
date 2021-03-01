import React from 'react';

import { render, waitFor } from '@testing-library/react-native';
import AxiosMock from 'axios-mock-adapter';
import api from '../../services/api';

import Home from '../../pages/Home/';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

const apiMock = new AxiosMock(api);

describe('Home Page', () => {
  it('should be able to list churches', async () => {
    const churches = [
      {
        id: 0,
        localization_url: 'url',
        image_url: 'image_url',
        name: 'Church 00',
        address: '5th avenue',
        neighborhood: 'Downtown',
        city: 'New York',
        zipcode: '9999999',
        addressComplement: 'Near Central Park',
        masses: [
          {
            name: 'Domingo',
            hours: ['07:00', '09:30', '18:30'],
          },
          {
            name: 'Segunda-feira',
            hours: ['18:00'],
          },
          {
            name: 'Terça-feira',
            hours: ['18:00'],
          },
          {
            name: 'Quarta-feira',
            hours: ['18:00'],
          },
          {
            name: 'Quinta-feira',
            hours: ['18:00'],
          },
          {
            name: 'Sexta-feira',
            hours: ['18:00'],
          },
          {
            name: 'Sábado',
            hours: ['18:30'],
          },
        ],
      },
      {
        id: 1,
        localization_url: 'url',
        image_url: 'image_url',
        name: 'Church 01',
        address: '4th avenue',
        neighborhood: 'Oregon',
        city: 'New York',
        zipcode: '9999999',
        addressComplement: 'Near Central Park',
        masses: [
          {
            name: 'Domingo',
            hours: ['07:00', '09:30', '18:30'],
          },
          {
            name: 'Segunda-feira',
            hours: ['18:00'],
          },
          {
            name: 'Terça-feira',
            hours: ['18:00'],
          },
          {
            name: 'Quarta-feira',
            hours: ['18:00'],
          },
          {
            name: 'Quinta-feira',
            hours: ['18:00'],
          },
          {
            name: 'Sexta-feira',
            hours: ['18:00'],
          },
          {
            name: 'Sábado',
            hours: ['18:30'],
          },
        ],
      },
    ];

    apiMock.onGet('/churches').reply(200, churches);

    const { getByText } = render(<Home />);

    await waitFor(() => expect(getByText('Church 01')).toBeTruthy(), {
      timeout: 200,
    });

    expect(getByText('Church 00')).toBeTruthy();
    expect(getByText('Church 01')).toBeTruthy();
  });
});

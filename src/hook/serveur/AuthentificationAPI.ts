import {
  AuthenticationApi,
  UserRegistrationParameter,
} from '@jbwittner/my-home-axios-client';
import { useCallback } from 'react';
import { API_CONFIGURATION, RequestProps } from './ApiConfig';

const authenticationApi = new AuthenticationApi(API_CONFIGURATION);

export const useRegistration = (props: RequestProps<void>) => {
  return useCallback(
    (userRegistrationParameter: UserRegistrationParameter) => {
      return authenticationApi
        .registration(userRegistrationParameter)
        .then((response) => {
          if (props.onSuccess !== undefined) {
            props.onSuccess(response.data);
          }
        })
        .catch(() => {
          if (props.onError !== undefined) {
            props.onError();
          }
        });
    },
    [props]
  );
};

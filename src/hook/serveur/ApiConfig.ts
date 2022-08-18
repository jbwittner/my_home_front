import {
  Configuration,
  ConfigurationParameters,
} from '@jbwittner/my-home-axios-client';

const configurationParameters: ConfigurationParameters = {
  basePath: '/api',
};

export const API_CONFIGURATION: Configuration = new Configuration(
  configurationParameters
);

export interface RequestProps<T> {
  onSuccess?: (data: T) => void;
  onError?: () => void;
}

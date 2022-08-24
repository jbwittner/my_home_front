import {
  Configuration,
  ConfigurationParameters,
} from '@jbwittner/my-home-axios-client';

const configurationParameters: ConfigurationParameters = {
  basePath: 'http://localhost:1080',
};

export const API_CONFIGURATION: Configuration = new Configuration(
  configurationParameters
);

export interface RequestProps<T> {
  onSuccess?: (data: T) => void;
  onError?: () => void;
}

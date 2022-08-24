import {
  Configuration,
  ConfigurationParameters,
} from '@jbwittner/my-home-axios-client';

const configurationParameters: ConfigurationParameters = {
  basePath: 'https://1080-jbwittner-myhomefront-m16e8s3cz6m.ws-eu62.gitpod.io'
};

export const API_CONFIGURATION: Configuration = new Configuration(
  configurationParameters
);

export interface RequestProps<T> {
  onSuccess?: (data: T) => void;
  onError?: () => void;
}

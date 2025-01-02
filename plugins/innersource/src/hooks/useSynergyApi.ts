import { useApi } from '@backstage/core-plugin-api';
import { SynergyApi } from '@ossunited/backstage-plugin-innersource-common';
import { synergyApiRef } from '../api';
import useAsync from 'react-use/esm/useAsync';

export function useSynergyApi<T>(
  func: (api: SynergyApi) => Promise<T>,
  deps: any[] = [],
) {
  const synergyApi = useApi(synergyApiRef);

  return useAsync(async () => {
    return await func(synergyApi);
  }, deps);
}

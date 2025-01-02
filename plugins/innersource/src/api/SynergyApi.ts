import { createApiRef } from '@backstage/core-plugin-api';
import { SynergyApi } from '@ossunited/backstage-plugin-innersource-common';

export const synergyApiRef = createApiRef<SynergyApi>({
  id: 'plugin.innersource.service',
});

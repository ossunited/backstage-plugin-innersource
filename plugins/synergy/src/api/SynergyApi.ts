import { createApiRef } from '@backstage/core-plugin-api';
import { SynergyApi } from '@opensource-sig/backstage-plugin-synergy-common';

export const synergyApiRef = createApiRef<SynergyApi>({
  id: 'plugin.synergy.service',
});

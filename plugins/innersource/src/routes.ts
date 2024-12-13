import { createRouteRef, createSubRouteRef } from '@backstage/core-plugin-api';

export const rootRouteRef = createRouteRef({
  id: 'innersource',
});

export const projectRouteRef = createSubRouteRef({
  id: 'innersource/project',
  parent: rootRouteRef,
  path: '/project/:owner/:project',
});

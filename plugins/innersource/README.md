# InnerSource

Welcome to the InnerSource plugin!

_This plugin was created through the Backstage CLI_

## Getting started

Your plugin has been added to the example app in this repository, meaning you'll be able to access it by running `yarn start` in the root directory, and then navigating to [/innersource](http://localhost:3000/innersource).

You can also serve the plugin in isolation by running `yarn start` in the plugin directory.
This method of serving the plugin provides quicker iteration speed and a faster startup and hot reloads.
It is only meant for local development, and the setup for it can be found inside the [/dev](./dev) directory.

## Installation

Add the plugin to your frontend app:

```bash
  yarn workspace app add @ossunited/backstage-plugin-innersource
```

Expose the Synergy page:

```ts
// packages/app/src/App.tsx
import { SynergyPage } from '@ossunited/backstage-plugin-innersource';

// ...

const AppRoutes = () => (
  <FlatRoutes>
    // ...
    <Route path="/innersource" element={<SynergyPage />} />
    // ...
  </FlatRoutes>
);
```

Add the navigation in the frontend:

```ts
// packages/app/src/components/Root/Root.tsx
import DeviceHubOutlined from '@material-ui/icons/DeviceHubOutlined';
// ...
export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SidebarPage>
    // ...
    <SidebarItem icon={DeviceHubOutlined} to="innersource" text="Synergy" />
    // ...
  </SidebarPage>
);
```

## Configuration

The following configuration options are available for your app-config.yaml:

```yaml
innersource:
  provider:
    github:
      hideIssues: <Optional true/false. Refer details below.>
  catalogBasePath: <Optional catalog entity base path>
```

The configuration values are:

- provider.github.hideIssues
  - Type: boolean
  - Required: No
  - Details: Boolean indicating whether to hide the issues tab (e.g., when Issues not used in GitHub projects). Default is false. If true, only the project list and details (README & Contributing Guidelines) will be available, as other views depend on issues.
- catalogBasePath
  - Type: string
  - Required: No
  - Details: Catalog entity base path. Will be used for creating catalog

## Translations (experimental)

Innersource plugin has integration with Backstage's experimental translation support. Refer official documentation on how to override the default plugin language - [Overwrite plugin messages](https://backstage.io/docs/plugins/internationalization/#for-an-application-developer-overwrite-plugin-messages)

To add a new language, please do the below:

1. Create a new translation file in `packages/app/src/translations` with language code e.g. `innersource-fi.ts`.

```ts
// packages/app/src/translations/innersource-fi.ts
import { innersourceTranslationRef } from '@ossunited/backstage-plugin-innersource';
import { createTranslationMessages } from '@backstage/core-plugin-api/alpha';

const fi = createTranslationMessages({
  ref: innersourceTranslationRef,
  full: false,
  messages: {
    synergyPage: {
      title: 'Tervetuloa Synergiaan!',
      subTitle: 'Sisäisen lähdekeskuksemme',
    },
    ...
  },
});

export default fi;
```

You can create translation files for other languages in a similar manner.

2. Create a new translation resource in `packages/app/src/translations` for the plugin e.g. innersource.ts

```ts
// packages/app/src/translations/innersource.ts
import { innersourceTranslationRef } from '@ossunited/backstage-plugin-innersource';
import { createTranslationResource } from '@backstage/core-plugin-api/alpha';

export const innersourceTranslationsResource = createTranslationResource({
  ref: innersourceTranslationRef,
  translations: {
    fi: () => import('./innersource-fi'),
    // include other languages, if needed
  },
});
```

3. Then add the translation to your `packages/app/src/App.tsx`:

```tsx
import { innersourceTranslationsResource } from './translations/innersource';

const app = createApp({
  //...
  __experimentalTranslations: {
    availableLanguages: ['en', 'fi'],
    resources: [innersourceTranslationsResource],
  },
});
```

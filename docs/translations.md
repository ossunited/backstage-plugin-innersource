# Translations (experimental)

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

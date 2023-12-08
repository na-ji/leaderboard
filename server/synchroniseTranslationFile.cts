import { resolve } from 'path';
import { writeFileSync } from 'fs';

import en from '../src/i18n/lang/en.json';
import oldFr from '../src/i18n/lang/fr.json';
import oldDe from '../src/i18n/lang/de.json';

const synchroniseTranslationFile = (name: 'fr' | 'de', oldTranslations: typeof en): void => {
  const newTranslations: Partial<typeof en> = {};

  (Object.keys(en) as Array<keyof typeof en>).forEach((translationId) => {
    if (translationId in oldTranslations) {
      newTranslations[translationId] = oldTranslations[translationId];
    } else {
      console.log(`[${name}] creating new message for "${translationId}"`);
      newTranslations[translationId] = en[translationId];
    }
  });

  try {
    writeFileSync(resolve(__dirname, `../src/i18n/lang/${name}.json`), JSON.stringify(newTranslations, null, 2), {
      flag: 'w+',
    });
  } catch (err) {
    console.error(err);
  }
};

synchroniseTranslationFile('fr', oldFr as unknown as typeof en);
synchroniseTranslationFile('de', oldDe as unknown as typeof en);

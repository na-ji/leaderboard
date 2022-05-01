import { resolve } from 'path';
import { writeFileSync } from 'fs';

import en from './lang/en.json';
import oldFr from './lang/fr.json';
import oldDe from './lang/de.json';

const synchroniseTranslationFile = (name: 'fr' | 'de', oldTranslations: typeof en): void => {
  const newTranslations: Partial<typeof en> = {};

  (Object.keys(en) as Array<keyof typeof en>).forEach((translationId) => {
    if (translationId in oldTranslations) {
      newTranslations[translationId] = oldTranslations[translationId];
    } else {
      newTranslations[translationId] = en[translationId];
    }
  });

  try {
    writeFileSync(resolve(__dirname, `./lang/${name}.json`), JSON.stringify(newTranslations, null, 2), { flag: 'w+' });
  } catch (err) {
    console.error(err);
  }
};

synchroniseTranslationFile('fr', oldFr);
synchroniseTranslationFile('de', oldDe);

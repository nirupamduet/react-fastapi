import { createTheme } from '@mui/material';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import { forEach, merge } from 'lodash';
import { themeColors } from './themeColors';
import themeOptions from './themeOptions';

function createMatxThemes() {
  let themes = {};

  forEach(themeColors, (value: any, key: any) => {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    themes[key] = createTheme(merge({}, themeOptions, value));
  });

  return themes;
}

export const themes = createMatxThemes();

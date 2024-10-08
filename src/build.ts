import { writeFile, mkdir, access } from 'fs/promises';
import { join, resolve } from 'path';

import { theme as defaultThemeConfig } from './themes/default';
import { theme as purpleThemeConfig } from './themes/purple';

type Theme = {
  name: string;
  type: string;
  fileName: string;
  config: Record<string, unknown>;
};

const themes: Theme[] = [
  {
    name: 'Stay On',
    type: 'dark',
    fileName: 'default',
    config: defaultThemeConfig,
  },
  {
    name: 'Stay On - Purple',
    type: 'dark',
    fileName: 'purple',
    config: purpleThemeConfig,
  },
];

const themesPath = resolve(__dirname, '..', 'themes');

(async () => {
  try {
    await access(themesPath);
  } catch {
    await mkdir(themesPath);
  }

  await Promise.all(
    themes.map(async theme => {
      const fullTheme = {
        $schema: 'vscode://schemas/color-theme',
        type: theme.type,
        name: theme.name,
        ...theme.config,
      };

      await writeFile(
        join(themesPath, `${theme.fileName}.json`),
        JSON.stringify(fullTheme, null, 2).concat('\n'),
      );
    }),
  );
})();

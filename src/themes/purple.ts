import { lighten, transparentize } from 'polished';

import { makeThemeConfig } from '@/make-theme-config';
import { makeColorVariants } from '@/make-color-variants';
import { hslToHex } from '@/utils/hsl-to-hex';
import { rgbStringToHex } from '@/utils/rgb-string-to-hex';

const mainColorHsl = [270, 30, 10];

const viewMainColor = hslToHex(
  mainColorHsl[0],
  mainColorHsl[1],
  mainColorHsl[2],
);

const viewColors = {
  main: makeColorVariants(viewMainColor),
  white: hslToHex(0, 0, 95),
  purple: makeColorVariants(hslToHex(mainColorHsl[0], 75, 55)),
};

const colors = {
  white: hslToHex(0, 0, 100),
  red: hslToHex(290, 100, 50),
  yellow: hslToHex(60, 100, 65),
  orange: hslToHex(315, 80, 65),
  blue: hslToHex(290, 75, 75),
  cyan: hslToHex(270, 75, 75),
  pink: hslToHex(310, 65, 65),
  green: hslToHex(120, 100, 50),
};

export const theme = makeThemeConfig({
  tokenColors: {
    default: colors.white,
    comments: lighten(0.25, viewMainColor),
    globals: '#ffffff',
    functions: colors.green,
    constants: colors.pink,
    support: colors.cyan,
    keywords: colors.red,
    parameters: colors.orange,
    strings: colors.yellow,
  },
  colors: {
    'editor.background': viewColors.main.default,

    'editor.foreground': viewColors.white,
    'statusBar.foreground': viewColors.white,

    'tab.activeBorderTop': viewColors.purple.default,
    'activityBarBadge.background': viewColors.purple.default,

    'statusBar.debuggingBackground': viewColors.purple['-200'],

    'tab.border': viewColors.main['975'],
    'titleBar.activeBackground': viewColors.main['975'],
    'titleBar.inactiveBackground': viewColors.main['975'],
    'activityBar.background': viewColors.main['975'],
    'statusBar.background': viewColors.main['975'],
    'statusBar.noFolderBackground': viewColors.main['975'],

    'tab.inactiveBackground': viewColors.main['950'],
    'input.background': viewColors.main['950'],
    'quickInput.background': viewColors.main['950'],
    'editorGroupHeader.tabsBackground': viewColors.main['950'],
    'editor.lineHighlightBackground': viewColors.main['950'],
    'editorRuler.foreground': viewColors.main['950'],
    'sideBarSectionHeader.background': viewColors.main['950'],

    'editorWidget.background': viewColors.main['900'],
    'editorIndentGuide.background1': viewColors.main['900'],
    'statusBarItem.prominentBackground': viewColors.main['900'],
    'list.hoverBackground': viewColors.main['900'],
    'list.activeSelectionBackground': viewColors.main['900'],
    'dropdown.background': viewColors.main['900'],
    'list.inactiveSelectionBackground': viewColors.main['900'],
    'tab.activeBackground': viewColors.main['900'],

    'editorWidget.border': viewColors.main['850'],

    'editorLineNumber.foreground': viewColors.main['800'],

    'focusBorder': viewColors.main['500'],

    'list.activeSelectionForeground': viewColors.main['300'],
    'list.inactiveSelectionForeground': viewColors.main['300'],

    'activityBar.foreground': viewColors.main['200'],

    'sideBar.background': lighten(0.01, viewMainColor),

    'scrollbarSlider.background': rgbStringToHex(
      transparentize(0.5, viewColors.main['800']),
    ),
    'scrollbarSlider.hoverBackground': rgbStringToHex(
      transparentize(0.25, viewColors.main['800']),
    ),

    'editor.selectionBackground': rgbStringToHex(
      transparentize(0.5, viewColors.main['700']),
    ),
    'editor.selectionHighlightBackground': rgbStringToHex(
      transparentize(0.75, colors.cyan),
    ),
    'editor.findMatchBackground': rgbStringToHex(
      transparentize(0.75, colors.yellow),
    ),
    'editor.findMatchHighlightBackground': rgbStringToHex(
      transparentize(0.8, viewColors.main['500']),
    ),
  },
});

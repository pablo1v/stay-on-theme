export type MainThemeConfigRequestedColors =
  | 'focusBorder'
  //
  | 'editor.foreground'
  | 'editor.background'
  | 'editor.lineHighlightBackground'
  | 'editorRuler.foreground'
  | 'editorWidget.border'
  | 'editorGroupHeader.tabsBackground'
  | 'editorIndentGuide.background1'
  | 'editorLineNumber.foreground'
  //
  | 'activityBar.background'
  | 'activityBar.foreground'
  | 'activityBarBadge.background'
  //
  | 'sideBar.background'
  | 'sideBarSectionHeader.background'
  //
  | 'titleBar.activeBackground'
  | 'titleBar.inactiveBackground'
  //
  | 'statusBar.background'
  | 'statusBar.foreground'
  | 'statusBar.debuggingBackground'
  | 'statusBar.noFolderBackground'
  | 'statusBarItem.prominentBackground'
  //
  | 'tab.border'
  | 'tab.activeBorderTop'
  | 'tab.activeBackground'
  | 'tab.inactiveBackground'
  //
  | 'list.hoverBackground'
  | 'list.activeSelectionForeground'
  | 'list.activeSelectionBackground'
  | 'list.inactiveSelectionBackground'
  | 'list.inactiveSelectionForeground'
  //
  | 'scrollbarSlider.background'
  | 'scrollbarSlider.hoverBackground'
  //
  | 'input.background'
  | 'quickInput.background'
  //
  | 'dropdown.background';

export type ThemeConfig = {
  semanticHighlighting: true;
  colors: Record<string, string>;
  tokenColors: {
    scope: string[];
    settings: Record<string, unknown>;
  }[];
};

export type MainThemeConfigData = {
  colors: Record<MainThemeConfigRequestedColors, string> &
    Record<string, string>;
  tokenColors: {
    keywords: string;
    strings: string;
    comments: string;
    parameters: string;
    constants: string;
    functions: string;
    globals: string;
    default: string;
    support: string;
  };
};

export function makeThemeConfig(
  mainThemeConfigData: MainThemeConfigData,
): ThemeConfig {
  const providedTokenColors = mainThemeConfigData.tokenColors;

  return {
    semanticHighlighting: true,
    colors: mainThemeConfigData.colors,
    tokenColors: [
      // Foreground

      {
        scope: [
          'keyword',
          'storage',
          'variable.language',
          'entity.name.tag',
          'punctuation.accessor.optional',
          'markup.heading',
        ],
        settings: {
          foreground: providedTokenColors.keywords,
        },
      },
      {
        scope: [
          'variable.other.object',
          'variable.other.enummember',
          'support.class',
          'entity.name.class',
          'entity.name.type',
        ],
        settings: {
          foreground: providedTokenColors.globals,
        },
      },
      {
        scope: ['string'],
        settings: {
          foreground: providedTokenColors.strings,
        },
      },
      {
        scope: ['variable.parameter', 'punctuation.definition.group.regexp'],
        settings: {
          foreground: providedTokenColors.parameters,
        },
      },
      {
        scope: [
          'punctuation.section.embedded',
          'string.regexp punctuation.definition.string.begin',
          'string.regexp punctuation.definition.string.end',
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
        ],
        settings: {
          foreground: providedTokenColors.keywords,
        },
      },
      {
        scope: [
          'storage.type',
          'support.type',
          'support.constant',
          'support.function',
          'support.constant.property-value',
        ],
        settings: {
          foreground: providedTokenColors.support,
        },
      },
      {
        scope: ['constant'],
        settings: {
          foreground: providedTokenColors.constants,
        },
      },
      {
        scope: ['entity.name.function', 'entity.other.attribute-name'],
        settings: {
          foreground: providedTokenColors.functions,
        },
      },
      {
        scope: ['string.comment', 'comment'],
        settings: {
          foreground: providedTokenColors.comments,
        },
      },
      {
        scope: [
          'meta',
          'invalid',
          'punctuation.separator',
          'variable.other.property',
          'variable.other.object.property',
        ],
        settings: {
          foreground: providedTokenColors.default,
        },
      },

      // Font Style

      {
        scope: ['comment', 'string.comment', 'storage', 'markup.italic'],
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        scope: ['invalid', 'invalid.deprecated'],
        settings: {
          fontStyle: 'underline italic',
        },
      },
      {
        scope: [
          'markup.bold',
          'markup.heading',
          'meta.separator',
          'keyword.control.new',
          'keyword.operator.new',
        ],
        settings: {
          fontStyle: 'bold',
        },
      },
    ],
  };
}

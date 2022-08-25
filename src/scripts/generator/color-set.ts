import { IColorSet } from '@moxer/vscode-theme-generator'
import { wb } from './colors/workbench'
import { ThemeSetting } from './types'

const Color = require('color')

export const getColorSet = (theme: ThemeSetting): IColorSet => {
  return {
    semanticHighlighting: true,
    base: {
      // Determines the overall background color
      background: theme.scheme.background,
      // Determines boolean, identifier, keyword, storage, and cssClass
      color1: theme.scheme.base.red,
      // Determines string, stringEscape, and cssId
      color2: theme.scheme.base.green,
      // Determines function, class, classMember, type, and cssTag
      color3: theme.scheme.base.yellow,
      // Determines functionCall and number
      color4: theme.scheme.base.blue,
      // Determines the overall text foreground color
      foreground: theme.scheme.foreground,
    },
    /**
     * Overrides specific syntax scopes provided
     * by the theme generator
     */
    syntax: {
      boolean: theme.scheme.base.pink,
      class: theme.scheme.base.yellow,
      classMember: theme.scheme.base.red,
      comment: theme.scheme.comments,
      cssClass: theme.scheme.base.yellow,
      cssId: theme.scheme.base.orange,
      cssProperties: theme.scheme.base.paleblue,
      cssTag: theme.scheme.base.yellow,
      function: theme.scheme.base.blue,
      functionCall: theme.scheme.base.blue,
      identifier: theme.scheme.base.red,
      keyword: theme.scheme.base.cyan,
      storage: theme.scheme.base.purple,
      string: theme.scheme.base.green,
      stringEscape: theme.scheme.foreground,
      type: theme.scheme.base.yellow,
      punctuation: theme.scheme.base.cyan,
      otherKeyword: theme.scheme.base.orange,
      variable: theme.scheme.foreground,
      number: theme.scheme.base.orange,
    },
    /**
     * Override all syntax tokens
     */
    /**
     * Overrides workbench UI Elements
     */
    workbench: wb(theme),
    /**
     * Define the integrated shell
     * color palette
     */
    terminal: {
      black: theme.scheme.base.black,
      blue: theme.scheme.base.blue,
      brightBlack: theme.scheme.comments,
      brightBlue: theme.scheme.base.blue,
      brightCyan: theme.scheme.base.cyan,
      brightGreen: theme.scheme.base.green,
      brightMagenta: theme.scheme.base.purple,
      brightRed: theme.scheme.base.red,
      brightWhite: theme.scheme.base.white,
      brightYellow: theme.scheme.base.yellow,
      cyan: theme.scheme.base.cyan,
      green: theme.scheme.base.green,
      magenta: theme.scheme.base.purple,
      red: theme.scheme.base.red,
      white: theme.scheme.base.white,
      yellow: theme.scheme.base.yellow,
    },
    /**
     * Define workbench colors
     */
    ui: {
      // Highlights matches from the find widget
      // currentFindMatchHighlight: theme.scheme.shade5,
      // Set the editor cursor color
      cursor: theme.scheme.caret,
      // Highlights matches from the find widget
      findMatchHighlight: theme.scheme.foreground,
      // Highlights the selected area for "find in selection"
      findRangeHighlight: Color(`${theme.scheme.base.yellow}`)
        .alpha(0.3)
        .hexa(),
      // Set color for invisible characters/whitespace
      invisibles: theme.scheme.guides,
      // Highlights text which matches the selected text
      selection: theme.scheme.selection,
      // Highlights text inside selected area
      selectionHighlight: Color(`${theme.scheme.base.yellow}`)
        .alpha(0.5)
        .hexa(),
      // When the cursor is on a symbol, highlights places that symbol is read
      wordHighlight: Color(`${theme.scheme.base.pink}`).alpha(0.3).hexa(),
      // When the cursor is on a symbol, highlights places that symbol is written
      wordHighlightStrong: Color(`${theme.scheme.base.green}`)
        .alpha(0.3)
        .hexa(),
    },
  }
}

import { ThemeSetting } from '../../../types'
const Color = require('color')

export const customTokens = (theme: ThemeSetting) => {
  const markup = [
    {
      name: 'Markup Deleted',
      scope: ['markup.deleted'],
      settings: {
        foreground: theme.scheme.base.red,
      },
    },
    {
      name: 'Markup Inserted',
      scope: ['markup.inserted'],
      settings: {
        foreground: theme.scheme.base.green,
      },
    },
    {
      name: 'Markup Underline',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
      },
    },
  ]

  const jsonVal = [
    {
      name: 'JSON Key - Level 0',
      scope: ['meta.structure.dictionary.json support.type.property-name.json'],
      settings: {
        foreground: theme.scheme.base.purple,
      },
    },
    {
      name: 'JSON Key - Level 1',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: theme.scheme.base.yellow,
      },
    },
    {
      name: 'JSON Key - Level 2',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: theme.scheme.base.orange,
      },
    },
    {
      name: 'JSON Key - Level 3',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: theme.scheme.base.red,
      },
    },
    {
      name: 'JSON Key - Level 4',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: theme.scheme.base.brown,
      },
    },
    {
      name: 'JSON Key - Level 5',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: theme.scheme.base.blue,
      },
    },
    {
      name: 'JSON Key - Level 6',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: theme.scheme.base.pink,
      },
    },
    {
      name: 'JSON Key - Level 7',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: theme.scheme.base.purple,
      },
    },
    {
      name: 'JSON Key - Level 8',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: theme.scheme.base.green,
      },
    },
  ]

  return [
    ...markup,
    {
      name: 'Keyword Control',
      scope: ['keyword.control'],
      settings: {
        foreground: theme.scheme.base.cyan,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Parameter',
      scope: ['variable.parameter'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Js - Block punctuation',
      scope: ['punctuation.definition.block'],
      settings: {
        foreground: 'black',
        fontStyle: 'italic',
      },
    },
    {
      name: 'Js - Block punctuation round',
      scope: ['meta.brace.round.js'],
      settings: {
        foreground: theme.scheme.base.yellow,
      },
    },
    {
      name: 'Js - Block punctuation round',
      scope: ['meta.brace.round.js'],
      settings: {
        foreground: theme.scheme.base.yellow,
      },
    },
    {
      name: 'Js - Variable property',
      scope: ['variable.other.property.ts'],
      settings: {
        foreground: theme.scheme.base.red,
      },
    },
    {
      name: 'Js - Variable property',
      scope: ['variable.other.property.js'],
      settings: {
        foreground: theme.scheme.base.red,
      },
    },
    {
      name: 'Vue - Property',
      scope: ['variable.other.property.vue'],
      settings: {
        foreground: theme.scheme.base.red,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Vue - Property',
      scope: ['variable.other.property.vue'],
      settings: {
        foreground: theme.scheme.base.red,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Constant',
      scope: ['variable.other.constant.object'],
      settings: {
        foreground: theme.scheme.custom.foreground,
      },
    },
    {
      name: 'Constant',
      scope: ['variable.other.constant.object.ts'],
      settings: {
        foreground: theme.scheme.custom.foreground,
      },
    },
    {
      name: 'Python - Self Parameter',
      scope: ['variable.parameter.function.language.special.self.python'],
      settings: {
        foreground: theme.scheme.base.red,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - Format Placeholder',
      scope: ['constant.character.format.placeholder.other.python'],
      settings: {
        foreground: theme.scheme.base.orange,
      },
    },
    {
      name: 'Markdown - Blockquote',
      scope: ['markup.quote'],
      settings: {
        fontStyle: 'italic',
        foreground: theme.scheme.base.cyan,
      },
    },
    {
      name: 'Markdown - Fenced Language',
      scope: ['markup.fenced_code.block'],
      settings: {
        foreground: Color(`${theme.scheme.foreground}`).alpha(0.9).hexa(),
      },
    },
    {
      name: 'Markdown - Blockquote Punctuation',
      scope: ['punctuation.definition.quote'],
      settings: {
        foreground: theme.scheme.base.pink,
      },
    },
    ...jsonVal,
  ]
}

const Color = require('color')

const base = {
  white: '#ffffff',
  lightgray: '#d8dee9',
  black: '#000000',
  red: '#FF707E',
  orange: '#FFBE82',
  yellow: '#FFCE72',
  brown: '#F5B791',
  green: '#C6FF95',
  cyan: '#73D7D9',
  blue: '#88C9FF',
  paleblue: '#6BD2E0',
  purple: '#EC97FF',
  pink: '#FFA6E3',
  violet: '#FFA3F3',
}

const custom = {
  background: '#2E3440',
  foreground: '#E9F1FF',
  accent: '#779ECE',
}

const colorTheme = {
  id: 'gems.theme.default',
  name: 'Gems-Theme-Default',
  type: 'dark',
  scheme: {
    base,
    custom,
    defaultAccent: `${custom.accent}`,
    background: `${custom.background}`,
    backgroundAlt: `${custom.background}`,
    contrastBorder: Color(`${custom.background}`).darken(0.3).hexa(),
    comments: Color(`${base.lightgray}`).alpha(0.5).hexa(),
    caret: `${base.yellow}`,
    foreground: `${custom.foreground}`,
    focusBorder: `${base.white}`,
    guides: Color(`${custom.accent}`).hexa(),
    // lineNumbers: '#434C5E',
    lineNumbers: Color(`${custom.accent}`).alpha(0.25).hexa(),
    invisibles: Color(`${base.lightgray}`).alpha(0.5).hexa(),
    lineHighlight: `${base.black}`,
    selection: Color(`${custom.accent}`).alpha(0.2).hexa(),
    shadow: Color(`${base.black}`).alpha(0.3).hexa(),
    inputBackground: Color(`${custom.background}`).lighten(0.3).hexa(),
    inputForeground: `${custom.foreground}`,
    inputBorder: Color(`${base.white}`).alpha(0.1).hexa(),
    scrollbars: Color(`${custom.foreground}`).alpha(0.2).hexa(),
    scrollbarsHover: Color(`${custom.foreground}`).alpha(0.1).hexa(),
    statusbarForeground: Color(`${custom.accent}`).alpha(0.3).hexa(),
    sidebarBackground: `${custom.background}`,
    sidebarForeground: `${custom.accent}`,
    listHoverForeground: `${base.white}`,
    listHoverBackground: `${custom.background}`,
    tabActiveForeground: `${base.white}`,
    inactiveSelectionBackground: Color(`${base.black}`).alpha(0.3).hexa(),
    findMatchBackground: `${base.black}`,
    findMatchHighlightBackground: Color(`${base.black}`).alpha(0.5).hexa(),
    findMatchHighlightBorder: Color(`${base.white}`).alpha(0.3).hexa(),
  },
}

export default colorTheme

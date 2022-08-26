const Color = require('color')

const base = {
  white: '#ffffff',
  lightgray: '#d8dee9',
  black: '#000000',
  red: '#bf616a',
  orange: '#d08770',
  yellow: '#8E5F00',
  brown: '#F5B791',
  green: '#4D653C',
  cyan: '#1F7187',
  blue: '#376F9C',
  paleblue: '#27717B',
  purple: '#860086',
  pink: '#AD2582',
  violet: '#FFA3F3',
}

const custom = {
  background: '#e5e9f0',
  foreground: '#2e3440',
  accent: '#5e81ac',
}

const colorTheme = {
  id: 'gems.theme.light',
  name: 'Gems-Theme-Light',
  type: 'light',
  scheme: {
    base,
    custom,
    defaultAccent: `${custom.accent}`,
    background: `${custom.background}`,
    backgroundAlt: `${custom.background}`,
    contrastBorder: Color(`${custom.background}`).darken(0.3).hexa(),
    comments: Color(`${custom.foreground}`).alpha(0.5).hexa(),
    caret: `${base.yellow}`,
    foreground: `${custom.foreground}`,
    focusBorder: `${base.white}`,
    guides: Color(`${custom.accent}`).hexa(),
    // lineNumbers: '#434C5E',
    lineNumbers: Color(`${custom.accent}`).alpha(0.25).hexa(),
    invisibles: Color(`${custom.foreground}`).alpha(0.5).hexa(),
    lineHighlight: `${base.lightgray}`,
    selection: Color(`${custom.accent}`).alpha(0.2).hexa(),
    shadow: Color(`${base.black}`).alpha(0.3).hexa(),
    inputBackground: Color(`${custom.background}`).lighten(0.3).hexa(),
    inputForeground: `${custom.foreground}`,
    inputBorder: Color(`${custom.foreground}`).alpha(0.1).hexa(),
    scrollbars: Color(`${custom.foreground}`).alpha(0.2).hexa(),
    scrollbarsHover: Color(`${custom.foreground}`).alpha(0.1).hexa(),
    statusbarForeground: Color(`${custom.accent}`).alpha(0.3).hexa(),
    sidebarBackground: `${custom.background}`,
    sidebarForeground: `${custom.accent}`,
    listHoverForeground: `${custom.accent}`,
    listHoverBackground: `${custom.background}`,
    tabActiveForeground: `${custom.foreground}`,
    inactiveSelectionBackground: Color(`${base.black}`).alpha(0.3).hexa(),
    findMatchBackground: `${base.black}`,
    findMatchHighlightBackground: Color(`${base.black}`).alpha(0.5).hexa(),
    findMatchHighlightBorder: Color(`${custom.foreground}`).alpha(0.3).hexa(),
  },
}

export default colorTheme

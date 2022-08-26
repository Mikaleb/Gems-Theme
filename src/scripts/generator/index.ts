import * as fs from 'fs-extra'
import * as path from 'path'

import { generateTheme } from '@moxer/vscode-theme-generator'
import { getColorSet } from './color-set'

const THEME_BUILD_PATH = path.join(__dirname, '../themes')

const themes = ['default', 'light']

async function getThemeColorModule(theme: string) {
  return import(`./colors/themes/${theme}/${theme}`)
}
async function getCustomTokens(theme: string) {
  return import(`./colors/themes/${theme}/custom-tokens`)
}

const generate = async (): Promise<void> => {
  await fs.mkdirp(THEME_BUILD_PATH)

  themes.forEach(async (theme) => {
    const themeColorModule = await getThemeColorModule(theme).then(
      (m) => m.default
    )

    const colorSet = getColorSet(themeColorModule)
    colorSet.customTokens = await getCustomTokens(theme).then((m) =>
      m.customTokens(themeColorModule)
    )
    generateTheme(
      themeColorModule.name,
      colorSet,
      path.join(THEME_BUILD_PATH, `${themeColorModule.name}.json`)
    )
  })
}

const run = async (): Promise<void> => {
  try {
    await generate()
  } catch (error) {
    console.error('ERROR build:generate-themes', error)
    process.exit(1)
  }
}

run()

import * as fs from 'fs-extra'
import * as path from 'path'

import { generateTheme } from '@moxer/vscode-theme-generator'
import { getColorSet } from './color-set'

const THEME_BUILD_PATH = path.join(__dirname, '../themes')

// only one for now
const themes = 'default'

async function getThemeColorModule(theme: string) {
  return await import(`./colors/specific/${theme}`)
}

const generate = async (): Promise<void> => {
  await fs.mkdirp(THEME_BUILD_PATH)

  const themeColorModule = await getThemeColorModule(themes).then(
    (m) => m.default
  )

  const colorSet = getColorSet(themeColorModule)
  generateTheme(
    themeColorModule.name,
    colorSet,
    path.join(THEME_BUILD_PATH, `${themeColorModule.name}.json`)
  )
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

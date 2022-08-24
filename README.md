# Gems theme <img src="https://raw.githubusercontent.com/Mikaleb/Gems-Theme/main/assets/logo.png" style="margin-left:1rem" width="24px">

[Gems Theme](https://marketplace.visualstudio.com/items?itemName=Mikaleb.gems-theme) is a VSCode theme that is based on [Material Theme](https://github.com/material-theme/vsc-material-theme) with theming inspiration from [Nord](https://www.nordtheme.com/) and [Plastic Theme](https://plastictheme.com/) designed to be easy on the eye and easy to use.

[![Preview in vscode.dev](https://img.shields.io/badge/preview%20in-vscode.dev-blue?logo=visualstudiocode)](https://vscode.dev/theme/mikaleb.gems-theme/Gems)
[![Marketplace](https://vsmarketplacebadge.apphb.com/version-short/mikaleb.gems-theme.svg)](https://marketplace.visualstudio.com/items?itemName=Mikaleb.gems-theme)
<a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square?&logo=prettier"></a>
[![GitHub license](https://img.shields.io/github/license/Mikaleb/Gems-Theme)](https://github.com/Mikaleb/Gems-Theme/blob/main/LICENSE.md)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

## Screenshot

![Preview](https://raw.githubusercontent.com/Mikaleb/Gems-Theme/main/assets/screenshot_zoom.png)

## Installation

0. With _Quick Open_ : `ext install Mikaleb.gems-theme `

1. Or : Open **Extensions** sidebar panel in VS Code ( `View → Extensions` )
2. Search for `Gems Theme` - find the one by **Mikaleb**
3. Click **Install** to install it
4. Code > Preferences > Color Theme > **Gems**
5. Recommended font : _Fira Code_

## Contribution

Gems-Theme is an open source project and we are very happy to accept community contributions. Please refer to Contributing to [Gems-Theme page](https://github.com/Mikaleb/Gems-Theme/blob/main/CONTRIBUTING.md) for more details.

If you run into a bug or miss a feature, please [open an issue](https://github.com/Mikaleb/Gems-Theme/issues) in this repository.

### Launch project locally

```bash
yarn
yarn build
```

By pressing F5 in VSCode you should be able to have a new window with the theme. If not, create the file `.vscode/launch.json` with this :

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Extension",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": ["--extensionDevelopmentPath=${workspaceFolder}"]
    },
    {
      "name": "Extension Tests",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/test"
      ]
    }
  ]
}
```

## Color scheme

<!-- todo : generate it auto via github action ? -->

- white: #ffffff,
- black: #000000,
- red: #FF707E,
- orange: #FFBE82,
- yellow: #FFD072,
- green: #C9FF9A,
- cyan: #66D3E2,
- blue: #88C9FF,
- paleblue: #6BD2E0,
- purple: #EC97FF,
- brown: #F5B791,
- pink: #FFACBA,
- violet: #FFA3F3,
- lightgray: #d8dee9,

## Licensing

See the [LICENSE](https://github.com/Mikaleb/Gems-Theme/blob/main/LICENSE.md) file for licensing information as it pertains to
files in this repository.

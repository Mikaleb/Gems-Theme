# Gems theme

![Logo Small](https://raw.githubusercontent.com/Mikaleb/Gems-Theme/main/assets/logo_small.png)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![Preview](https://raw.githubusercontent.com/Mikaleb/Gems-Theme/main/assets/screenshot.png)

## Installation

1. Open **Extensions** sidebar panel in VS Code ( `View → Extensions` )
2. Search for `Gems Theme` - find the one by **Mikaleb**
3. Click **Install** to install it
4. Code > Preferences > Color Theme > **Gems Theme**
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

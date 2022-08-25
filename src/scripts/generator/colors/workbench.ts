import { ThemeSetting } from '../types'
const Color = require('color')

export const wb = (theme: ThemeSetting) => {
  const border = Color(`${theme.scheme.contrastBorder}`).alpha(0.2).hexa()

  return {
    /**
     * General elements style
     */
    // colorCustomizations: { ...colorCustomizations },
    focusBorder: Color(`${theme.scheme.focusBorder}`).alpha(0).hexa(),
    'editorRuler.foreground': theme.scheme.guides,
    'widget.shadow': theme.scheme.shadow,
    'scrollbar.shadow': theme.scheme.shadow,
    'editorLink.activeForeground': theme.scheme.foreground,
    'selection.background': Color(`${theme.scheme.lineHighlight}`)
      .alpha(0.8)
      .hexa(),
    'progressBar.background': theme.scheme.defaultAccent,
    'debugToolBar.background': theme.scheme.background,
    'pickerGroup.foreground': theme.scheme.defaultAccent,
    'editorMarkerNavigation.background': Color(`${theme.scheme.foreground}`)
      .alpha(0.05)
      .hexa(),
    'tree.indentGuidesStroke': Color(theme.scheme.guides).alpha(0.7).hexa(),
    'terminalCursor.foreground': theme.scheme.base.yellow,
    'terminalCursor.background': theme.scheme.base.black,
    'editorWhitespace.foreground': Color(`${theme.scheme.foreground}`)
      .alpha(0.4)
      .hexa(),
    /**
     * InputOption
     */
    'inputOption.activeBackground': Color(`${theme.scheme.foreground}`)
      .alpha(0.3)
      .hexa(),
    'inputOption.activeBorder': Color(`${theme.scheme.foreground}`)
      .alpha(0.3)
      .hexa(),
    /**
     * Buttons style
     */
    'button.background': theme.scheme.selection,
    // 'button.hoverBackground': theme.scheme.shade2,
    /**
     * Links style
     */
    'textLink.foreground': theme.scheme.defaultAccent,
    'textLink.activeForeground': theme.scheme.foreground,
    /**
     * Sidebar style
     */
    'sideBar.background': theme.scheme.backgroundAlt,
    'sideBar.foreground': Color(`${theme.scheme.sidebarForeground}`)
      .alpha(0.7)
      .hexa(),
    'sideBar.border': Color(`${theme.scheme.contrastBorder}`).alpha(0.2).hexa(),
    /**
     * Sidebar elements style
     */
    'sideBarTitle.foreground': theme.scheme.foreground,
    'sideBarSectionHeader.background': theme.scheme.backgroundAlt,
    'sideBarSectionHeader.border': border,
    // "sideBarSectionHeader.foreground": theme.scheme.foreground,
    /**
     * Window panels style (terminal, global search)
     */
    'panel.border': Color(`${theme.scheme.contrastBorder}`).alpha(0.2).hexa(),
    'panel.background': theme.scheme.backgroundAlt,
    'panel.dropBackground': theme.scheme.foreground,
    /**
     * Window panels elements style
     */
    'panelTitle.inactiveForeground': theme.scheme.foreground,
    'panelTitle.activeForeground': theme.scheme.tabActiveForeground,
    'panelTitle.activeBorder': theme.scheme.defaultAccent,
    /**
     * Code Editor style
     */
    'editor.background': theme.scheme.background,
    'editor.foreground': theme.scheme.foreground,
    'editor.lineHighlightBackground': Color(`${theme.scheme.lineHighlight}`)
      .alpha(0.5)
      .hexa(),
    'editor.selectionHighlightBackground': Color(`${theme.scheme.caret}`)
      .alpha(0.2)
      .hexa(),
    'editor.lineHighlightBorder': Color(`${theme.scheme.lineHighlight}`)
      .alpha(0)
      .hexa(),
    'editor.findMatchBackground': theme.scheme.findMatchBackground,
    'editor.findMatchHighlightBackground':
      theme.scheme.findMatchHighlightBackground,
    'editor.findMatchBorder': theme.scheme.defaultAccent,
    'editor.findMatchHighlightBorder': theme.scheme.findMatchHighlightBorder,
    // Editor Indent guides
    'editorIndentGuide.background': Color(`${theme.scheme.guides}`)
      .alpha(0.3)
      .hexa(),
    'editorIndentGuide.activeBackground': Color(`${theme.scheme.guides}`)
      .alpha(0.8)
      .hexa(),
    // Editor line number
    'editorLineNumber.foreground': theme.scheme.lineNumbers,
    'editorLineNumber.activeForeground': theme.scheme.sidebarForeground,
    // Editor tab groups
    'editorGroupHeader.tabsBackground': theme.scheme.background,
    'editorGroup.border': theme.scheme.shadow,
    // Editor gutter
    'editorGutter.modifiedBackground': Color(`${theme.scheme.base.blue}`)
      .alpha(0.6)
      .hexa(),
    'editorGutter.addedBackground': Color(`${theme.scheme.base.green}`)
      .alpha(0.6)
      .hexa(),
    'editorGutter.deletedBackground': Color(`${theme.scheme.base.red}`)
      .alpha(0.6)
      .hexa(),
    /**
     * Activity bar style
     */
    'activityBar.background': theme.scheme.backgroundAlt,
    'activityBar.border': border,
    'activityBar.foreground': theme.scheme.foreground,
    'activityBar.activeBorder': theme.scheme.defaultAccent,
    /**
     * Activity bar badges style
     */
    'activityBarBadge.background': theme.scheme.defaultAccent,
    'activityBarBadge.foreground': theme.scheme.base.black,
    /**
     * Global badges style
     */
    'badge.background': Color(`${theme.scheme.lineHighlight}`)
      .alpha(0.3)
      .hexa(),
    'badge.foreground': theme.scheme.comments,
    /**
     * Extensions badge style
     */
    // 'extensionBadge.remoteBackground': theme.scheme.shade3,
    'extensionBadge.remoteForeground': theme.scheme.foreground,
    /**
     * Scrollbar style
     */
    'scrollbarSlider.background': theme.scheme.scrollbars,
    'scrollbarSlider.hoverBackground': theme.scheme.scrollbarsHover,
    'scrollbarSlider.activeBackground': theme.scheme.defaultAccent,
    /**
     * Tabs style
     */
    'tab.activeBorder': theme.scheme.defaultAccent,
    'tab.activeModifiedBorder': theme.scheme.sidebarForeground,
    'tab.unfocusedActiveBorder': theme.scheme.comments,
    'tab.activeForeground': theme.scheme.tabActiveForeground,
    'tab.inactiveForeground': theme.scheme.sidebarForeground,
    'tab.inactiveBackground': theme.scheme.background,
    'tab.activeBackground': theme.scheme.background,
    'tab.unfocusedActiveForeground': theme.scheme.foreground,
    'tab.border': theme.scheme.background,
    // 'tab.inactiveModifiedBorder': theme.scheme.shade5,
    /**
     * Editor overlay widgets style (find/replace..)
     */
    'editorWidget.background': theme.scheme.backgroundAlt,
    'editorWidget.resizeBorder': theme.scheme.defaultAccent,
    'editorWidget.border': theme.scheme.defaultAccent,
    /**
     * Notebook style
     */
    'notebook.focusedCellBorder': theme.scheme.defaultAccent,
    'notebook.inactiveFocusedCellBorder': Color(`${theme.scheme.defaultAccent}`)
      .alpha(0.5)
      .hexa(),
    /**
     * Statusbar style
     */
    'statusBar.noFolderBackground': theme.scheme.background,
    'statusBar.border': border,
    'statusBar.background': theme.scheme.backgroundAlt,
    'statusBar.foreground': theme.scheme.statusbarForeground,
    'statusBar.debuggingBackground': theme.scheme.base.purple,
    'statusBar.debuggingForeground': theme.scheme.base.white,
    /**
     * Statusbar items style
     */
    'statusBarItem.hoverBackground': Color(`${theme.scheme.comments}`)
      .alpha(0.2)
      .hexa(),
    'statusBarItem.remoteForeground': theme.scheme.base.black,
    'statusBarItem.remoteBackground': theme.scheme.defaultAccent,
    /**
     * Matching brackets style
     */
    'editorBracketMatch.border': Color(`${theme.scheme.caret}`)
      .alpha(0.5)
      .hexa(),
    'editorBracketMatch.background': theme.scheme.background,
    /**
     * Editor Overview Ruler style
     */
    'editorOverviewRuler.findMatchForeground': theme.scheme.defaultAccent,
    'editorOverviewRuler.border': theme.scheme.background,
    'editorOverviewRuler.errorForeground': Color(`${theme.scheme.base.red}`)
      .alpha(0.4)
      .hexa(),
    'editorOverviewRuler.infoForeground': Color(`${theme.scheme.base.blue}`)
      .alpha(0.4)
      .hexa(),
    'editorOverviewRuler.warningForeground': Color(
      `${theme.scheme.base.yellow}`
    )
      .alpha(0.4)
      .hexa(),
    /**
     * Squigglies style
     */
    'editorInfo.foreground': Color(`${theme.scheme.base.blue}`)
      .alpha(0.7)
      .hexa(),
    'editorWarning.foreground': Color(`${theme.scheme.base.yellow}`)
      .alpha(0.7)
      .hexa(),
    'editorError.foreground': Color(`${theme.scheme.base.red}`)
      .alpha(0.7)
      .hexa(),
    /**
     * Popop dialogs style
     */
    'editorHoverWidget.background': theme.scheme.background,
    'editorHoverWidget.border': theme.scheme.inputBorder,
    /**
     * Title bar style
     */
    'titleBar.activeBackground': theme.scheme.backgroundAlt,
    'titleBar.activeForeground': theme.scheme.foreground,
    'titleBar.inactiveBackground': theme.scheme.backgroundAlt,
    'titleBar.inactiveForeground': theme.scheme.sidebarForeground,
    'titleBar.border': border,
    /**
     * Textfield and inputs style
     */
    'input.background': theme.scheme.inputBackground,
    'input.foreground': theme.scheme.foreground,
    'input.placeholderForeground': Color(`${theme.scheme.foreground}`)
      .alpha(0.6)
      .hexa(),
    'input.border': theme.scheme.inputBorder,

    /**
     * Inputs validation style
     */
    'inputValidation.errorBorder': `${theme.scheme.base.red}`,
    'inputValidation.infoBorder': `${theme.scheme.base.blue}`,
    'inputValidation.warningBorder': `${theme.scheme.base.yellow}`,
    /**
     * Dropdown menu style
     */
    'dropdown.background': theme.scheme.background,
    'dropdown.border': theme.scheme.inputBorder,
    /**
     * Quick Panel
     */
    'quickInput.background': theme.scheme.background,
    'quickInput.foreground': theme.scheme.sidebarForeground,
    /**
     * Lists style
     */
    'list.hoverForeground': theme.scheme.listHoverForeground,
    'list.hoverBackground': theme.scheme.backgroundAlt,
    'list.activeSelectionBackground': theme.scheme.backgroundAlt,
    'list.activeSelectionForeground': theme.scheme.defaultAccent,
    'list.inactiveSelectionForeground': theme.scheme.defaultAccent,
    'list.inactiveSelectionBackground':
      theme.scheme.inactiveSelectionBackground,
    'list.focusBackground': Color(`${theme.scheme.foreground}`)
      .alpha(0.2)
      .hexa(),
    'quickInput.list.focusBackground': Color(`${theme.scheme.foreground}`)
      .alpha(0.2)
      .hexa(),
    'list.focusForeground': theme.scheme.foreground,
    'list.highlightForeground': theme.scheme.defaultAccent,
    // 'list.dropBackground': theme.scheme.shade2,
    /**
     * Editor suggest widget style
     */
    'editorSuggestWidget.background': theme.scheme.background,
    'editorSuggestWidget.foreground': theme.scheme.foreground,
    'editorSuggestWidget.highlightForeground': theme.scheme.defaultAccent,
    'editorSuggestWidget.selectedBackground': Color(
      `${theme.scheme.lineHighlight}`
    )
      .alpha(0.5)
      .hexa(),
    'editorSuggestWidget.border': theme.scheme.inputBorder,
    /**
     * Editor diff editor style
     */
    'diffEditor.insertedTextBackground': Color(`${theme.scheme.base.cyan}`)
      .alpha(0.2)
      .hexa(),
    'diffEditor.removedTextBackground': Color(`${theme.scheme.base.pink}`)
      .alpha(0.2)
      .hexa(),
    /**
     * Notifications
     */
    'notifications.background': theme.scheme.background,
    'notifications.foreground': theme.scheme.foreground,
    'notificationLink.foreground': theme.scheme.defaultAccent,
    /**
     * Extensions button style
     */
    'extensionButton.prominentBackground': Color(`${theme.scheme.base.green}`)
      .alpha(0.9)
      .hexa(),
    'extensionButton.prominentHoverBackground': theme.scheme.base.green,
    'extensionButton.prominentForeground': theme.scheme.base.black,
    /**
     * Peekview window style
     */
    'peekView.border': theme.scheme.shadow,
    'peekViewEditor.background': Color(`${theme.scheme.foreground}`)
      .alpha(0.05)
      .hexa(),
    'peekViewTitle.background': Color(`${theme.scheme.foreground}`)
      .alpha(0.05)
      .hexa(),
    'peekViewResult.background': Color(`${theme.scheme.foreground}`)
      .alpha(0.05)
      .hexa(),
    'peekViewEditorGutter.background': Color(`${theme.scheme.foreground}`)
      .alpha(0.05)
      .hexa(),
    'peekViewTitleDescription.foreground': Color(`${theme.scheme.foreground}`)
      .alpha(0.6)
      .hexa(),
    'peekViewResult.matchHighlightBackground': theme.scheme.selection,
    'peekViewEditor.matchHighlightBackground': theme.scheme.selection,
    'peekViewResult.selectionBackground': Color(
      `${theme.scheme.sidebarForeground}`
    )
      .alpha(0.7)
      .hexa(),
    /**
     * GIT decorations style
     */
    'gitDecoration.deletedResourceForeground': Color(`${theme.scheme.base.red}`)
      .alpha(0.9)
      .hexa(),
    'gitDecoration.conflictingResourceForeground': Color(
      `${theme.scheme.base.yellow}`
    )
      .alpha(0.9)
      .hexa(),
    'gitDecoration.modifiedResourceForeground': Color(
      `${theme.scheme.base.blue}`
    )
      .alpha(0.9)
      .hexa(),
    'gitDecoration.untrackedResourceForeground': Color(
      `${theme.scheme.base.green}`
    )
      .alpha(0.9)
      .hexa(),
    'gitDecoration.ignoredResourceForeground': Color(
      `${theme.scheme.sidebarForeground}`
    )
      .alpha(0.9)
      .hexa(),
    /**
     * Breadcrumb style
     */
    'breadcrumb.background': theme.scheme.background,
    'breadcrumb.foreground': theme.scheme.sidebarForeground,
    'breadcrumb.focusForeground': theme.scheme.foreground,
    'breadcrumb.activeSelectionForeground': theme.scheme.defaultAccent,
    'breadcrumbPicker.background': theme.scheme.backgroundAlt,
    /**
     * Custom menus style
     */
    'menu.background': theme.scheme.background,
    'menu.foreground': theme.scheme.foreground,
    'menu.selectionBackground': Color(`${theme.scheme.lineHighlight}`)
      .alpha(0.5)
      .hexa(),
    'menu.selectionForeground': theme.scheme.defaultAccent,
    'menu.selectionBorder': theme.scheme.inactiveSelectionBackground,
    'menu.separatorBackground': theme.scheme.foreground,
    /**
     * Menu Bar style
     */
    'menubar.selectionBackground': theme.scheme.inactiveSelectionBackground,
    'menubar.selectionForeground': theme.scheme.defaultAccent,
    'menubar.selectionBorder': theme.scheme.inactiveSelectionBackground,
    /**
     * Settings elements style
     */
    'settings.dropdownForeground': theme.scheme.foreground,
    'settings.dropdownBackground': theme.scheme.backgroundAlt,
    'settings.numberInputForeground': theme.scheme.foreground,
    'settings.numberInputBackground': theme.scheme.backgroundAlt,
    'settings.textInputForeground': theme.scheme.foreground,
    'settings.textInputBackground': theme.scheme.backgroundAlt,
    'settings.headerForeground': theme.scheme.defaultAccent,
    'settings.modifiedItemIndicator': theme.scheme.defaultAccent,
    'settings.checkboxBackground': theme.scheme.backgroundAlt,
    'settings.checkboxForeground': theme.scheme.foreground,
    /**
     * List Filter Widget style
     */
    'listFilterWidget.background': theme.scheme.inactiveSelectionBackground,
    'listFilterWidget.outline': theme.scheme.inactiveSelectionBackground,
    'listFilterWidget.noMatchesOutline':
      theme.scheme.inactiveSelectionBackground,
    /**
     * Debug Console
     */
    'debugConsole.errorForeground': theme.scheme.base.red,
    'debugConsole.infoForeground': theme.scheme.base.cyan,
    'debugConsole.warningForeground': theme.scheme.base.yellow,
  }
}

/* eslint-disable */
export type ThemeName = 'tour' | 'ticket' | 'triple'
export type ThemeByName = {
  'tour': {
          id: string,
          name: 'tour',
          css: string
        }
'ticket': {
          id: string,
          name: 'ticket',
          css: string
        }
'triple': {
          id: string,
          name: 'triple',
          css: string
        }
}

export type Theme<T extends ThemeName> = ThemeByName[T]

/**
 * Dynamically import a theme by name
 */
export declare function getTheme<T extends ThemeName>(themeName: T): Promise<ThemeByName[T]>

/**
 * Inject a theme stylesheet into the document
 */
export declare function injectTheme(el: HTMLElement, theme: Theme<any>): HTMLStyleElement
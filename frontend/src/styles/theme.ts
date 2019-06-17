import { ThemeProviderProps } from 'styled-components'

export const theme = {
  colors: {
    // primary variations
    darkPrimary: '#2F55CC',
    darkerPrimary: '#244AA8',
    primary: '#365DF0',
    lightPrimary: '#9AAEF7',
    lighterPrimary: '#B9C6FA',
    lightestPrimary: '#CAD6FC',
    mostLightestPrimary: '#E1E7FD',

    // main
    secondary: '#0992a5',
    tertiary: '#f79256',

    // white
    white: '#FFFFFF',
    darkWhite: '#FCFCFD',
    darkerWhite: '#F5F4F6',
    darkestWhite: '#EBEAED',
    mostDarkestWhite: '#DEDCE1',

    // danger
    darkDanger: '#A53F3F',
    darkerDanger: '#CC4C4C',
    danger: '#F95E5A',
    lightDanger: '#FCAEAC',
    lighterDanger: '#FCC6C5',
    lightestDanger: '#FCD7D6',
    mostLightestDanger: '#FEEFEE',

    // success
    darkSuccess: '#0E995D',
    darkerSuccess: '#10B26C',
    success: '#12DB89',
    lightSuccess: '#88EDC4',
    lighterSuccess: '#B7F7D8',
    lightestSuccess: '#CFF9E6',
    mostLightestSuccess: '#E7FBF3',

    // Ink
    ink: '#170C3A',
    lightInk: '#8F8A9B',
    lighterInk: '#B1ADB9',
    lightestInk: '#C7C4CD',

    transparent: 'transparent',
    darkTransparent: 'rgba(0,0,0,0.6)',
    whiteTransparent: 'rgba(255,255,255, 0.3)',
  },
}

type InnerTheme = typeof theme
export type Theme = ThemeProviderProps<InnerTheme, InnerTheme>

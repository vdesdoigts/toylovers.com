import chakraTheme from '@chakra-ui/theme'

export const breakpoints = ['30em', '48em', '62em', '77.5em']

const theme = {
  ...chakraTheme,
  breakpoints,
  colors: {
    ...chakraTheme.colors,
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '2.625rem',
    '6xl': '3.125rem',
  },
  sizes: {
    ...chakraTheme.sizes,
    container: {
      ...chakraTheme.sizes.container,
      lg: '192rem',
      xl: '192rem',
    },
  },
}

console.log('theme: ', theme)
export default theme


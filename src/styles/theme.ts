import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    // Enhanced dark theme colors
    background: {
      primary: '#0A0A0A',
      secondary: '#1A1A1A',
      tertiary: '#2A2A2A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E2E8F0',
      muted: '#A0AEC0',
      accent: '#60A5FA',
    },
    accent: {
      blue: '#3B82F6',
      green: '#10B981',
      purple: '#8B5CF6',
      orange: '#F59E0B',
      red: '#EF4444',
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.1)',
      secondary: 'rgba(255, 255, 255, 0.05)',
      accent: 'rgba(59, 130, 246, 0.3)',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'background.primary',
        color: 'text.primary',
        scrollBehavior: 'smooth',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      '*': {
        boxSizing: 'border-box',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
      variants: {
        gradient: {
          bgGradient: 'gradient.primary',
          color: 'white',
          _hover: {
            bgGradient: 'gradient.secondary',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        },
        ghost: {
          color: 'text.primary',
          _hover: {
            bg: 'background.secondary',
            color: 'text.accent',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        bg: 'background.secondary',
        borderRadius: 'xl',
        border: '1px solid',
        borderColor: 'border.primary',
        _hover: {
          borderColor: 'border.accent',
          transform: 'translateY(-4px)',
          boxShadow: '2xl',
        },
        transition: 'all 0.3s ease',
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'accent.blue',
      },
      variants: {
        filled: {
          field: {
            bg: 'background.secondary',
            borderColor: 'border.primary',
            _hover: {
              borderColor: 'border.accent',
            },
            _focus: {
              borderColor: 'accent.blue',
              boxShadow: '0 0 0 1px var(--chakra-colors-accent-blue)',
            },
          },
        },
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'accent.blue',
      },
      variants: {
        filled: {
          bg: 'background.secondary',
          borderColor: 'border.primary',
          _hover: {
            borderColor: 'border.accent',
          },
          _focus: {
            borderColor: 'accent.blue',
            boxShadow: '0 0 0 1px var(--chakra-colors-accent-blue)',
          },
        },
      },
    },
  },
  shadows: {
    'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
})

export default theme 
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['proxima_nova', 'sans-serif'],
      },
      fontSize: {
        'd-title-1': [
          '2.25rem', // 36px
          {
            letterSpacing: '0',
            lineHeight: '2.25rem', // 36px
          },
        ],
        'm-title-1': [
          '1.5rem', // 24px
          {
            letterSpacing: '0',
            lineHeight: '1.5rem', // 24px
          },
        ],
        'd-title-2': [
          '1.25rem', // 20px
          {
            letterSpacing: '0',
            lineHeight: '1.25rem', // 20px
          },
        ],
        'm-title-3': [
          '1rem', // 16px
          {
            letterSpacing: '0',
            lineHeight: '1rem', // 16px
          },
        ],
        'd-headline-semibold': [
          '0.875rem', // 14px
          {
            letterSpacing: '0',
            lineHeight: '0.875rem', // 14px
          },
        ],
        'd-text-primary': [
          '1rem', // 16px
          {
            letterSpacing: '0',
            lineHeight: '1.625rem', // 26px
          },
        ],
        'd-text-secondary': [
          '0.875rem', // 14px
          {
            letterSpacing: '0',
            lineHeight: '0.875rem', // 14px
          },
        ],
      },
      colors: {
        black: '#2E3048',
        blue: {
          100: '#4479FE',
          10: '#F7F9FD',
          20: '#EEF2F7',
        },
        green: '#34C759',
        'hover-blue-2': '#E9EFF7',
        'hover-blue': '#366AE0',
        orange: '#FF9500',
        red: '#ED5564',
        white: {
          100: '#FFFFFF',
          30: 'rgba(255, 255, 255, 0.5)',
        },
        yellow: '#FFD103',
        grey: {
          100: '#404258',
          20: '#E0E6EB',
          50: '#ADB0B8',
          70: '#8693B6',
        },
      },
      gradientColorStops: {
        'blue-start': '#4479FE',
        'blue-end': '#4498F9',
      },
      spacing: {
        15: '3.75rem', // 60px
      },
    },
  },
  plugins: [],
};

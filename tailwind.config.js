const defaultColors = require("tailwindcss/colors");
const COLORS = {
  success: {
    100: "#DEF5D9",
    200: "#AEE4AD",
    300: "#73C686",
    400: "#28A745",
    500: "#008E39",
  },
  info: {
    100: "#E2F1FF",
    200: "#ADD9FF",
    300: "#72B7FB",
    400: "#2B88FB",
    500: "#006EEF",
  },
  warning: { // fix later
    100: "#FFF6D9",
    200: "#FFE1A8",
    300: "#FDC66E",
    400: "#F0A328",
    500: "#E99208",
  },
  error: { // fix later
    100: "#FDECEF",
    200: "#FFABB5",
    300: "#FA8091",
    400: "#EA3E53",
    500: "#DA072D",
  },
  primary: {
    1: '#CE233C',
    2: '#FFABB5',
  },
  secondary: {
    1: '#030303',
    2: '#1C1C1C',
  },
  tertiary: {
    1: '#F59E0B',
    2: '#FCD34D',
  }, 
  quaternary: {
    1: '#D98905',
    2: '#ED970B',
    3: '#FFA004',
    4: '#FFB741',
    5: '#FDC871',
  },
  'neutral-1': {
    900: '#2C333A',
    800: '#424752',
    700: '#5A6271',
    600: '#6B7280',
    500: '#858F9B',
    400: '#929DAA',
    300: '#A1ACB8',
    200: '#CDD3DB',
    100: '#D2D8E0',
    50: '#DDE2E9'
  },
  'neutral-2': {
    300: '#DAE0E6',
    200: '#E2E7ED',
    100: '#E9EDF2',
    50: '#F2F4F7',
  },
  'neutral-3': {
    300: '#E3E6E9',
    200: '#EBEDEF',
    100: '#F0F1F3',
    50: '#F8F9FB',
  },
  gradient: {
    1: {
      start: "#D3EAFF",
      // mid:'',
      end: "#0085FF",
    },
    2: {
      start: "#FE8C48",
      // mid:'',
      end: "#FF7A00",
    },
    3: {
      start: "#A4EEEA",
      mid:'#0696DE',
      end: "#00A198",
    },
    4: {
      start: "#FFB741",
      // mid:'',
      end: "#FFA004",
    },
  },


}

function genarateColorTDS() {
  var colors = [];
  for (const colorName in COLORS) {
    for (const colorOpacity in COLORS[colorName]) {
      colors.push(`${colorName}-${colorOpacity}`);
    }
  }
  if (COLORTAIWIND.length > 0) {
    for (let index = 0; index < COLORTAIWIND.length; index++) {
      const colorName = COLORTAIWIND[index];
      if (defaultColors[colorName])
        for (const colorOpacity in defaultColors[colorName]) {
          colors.push(`${colorName}-${colorOpacity}`);
        }
    }
  }
  var prefixs = [
    "ring",
    "bg",
    "border",
    "text",
    "focus:bg",
    "focus:border",
    "hover:border",
    "hover:bg",
    "disabled:bg",
    "disabled:border",
    "dark:bg",
    "dark:text",
    "dark:border",
    "dark:group-hover:text",
    "dark:hover:bg",
    "dark:hover:text",
  ];

  var result = [];
  for (let index = 0; index < prefixs.length; index++) {
    const prefix = prefixs[index];
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const color = colors[colorIndex];
      result.push(prefix + "-" + color);
    }
  }

  return result;
}

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  important: false,
  theme: {
    extend: {
      colors: {
        ...COLORS
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      placeholderColor: {
        ...COLORS,
      },
      fontSize: {
          'heading-1': ['40px', '54px'],
          'heading-2': ['32px', '48px'],
          'heading-3': ['28px', '37px'],
          'heading-4': ['24px', '32px'],
          
          'title-1': ['16px', '24px'], 
          'title-2': ['14px', '22px'],

          'header-1': ['20px', '28px'], 
          'header-2': ['18px', '24px'], 

          'body-1': ['16px', '24px'],
          'body-2': ['14px', '22px'],

          'caption-1': ['13px', '22px'],
          'caption-2': ['12px', '18px'], 
          'caption-xtra': ['14px', '16px'], 

          'display-1': ['80px', 'auto'],
          'display-2': ['72px', 'auto'],
          'display-3': ['64px', 'auto'],
          'display-4': ['56px', 'auto'],
          'display-5': ['48px', 'auto'],
          'display-6': ['40px', 'auto'],

      },
      fontFamily: {
        'Saira-SemiCondensed': ['Saira SemiCondensed', 'sans-serif'],
        
      },
      backgroundImage: {
        'subscription': 'linear-gradient(180deg, #030303 0%, rgba(3, 3, 3, 0.69) 32.29%, rgba(3, 3, 3, 0.69) 70.31%, #030303 100%)',
        'quot': 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
        'header-service': "url('/src/img/service/black_white_gym.png')",
        'header-schedule': "url('/src/img/schedule/subheader_schedule.png')",
        'header-recruit': "url('/src/img/recruit/subheader_recruit.png')",
        'header-blog': "url('/src/img/blog/subheader_blog.png')"
      },
      animation: {
        'header': 'spin 300ms ease-in-out infinite',
      },
      dropShadow: {
        'small': '0 0 0 rgba(1, 39, 178, 0.2)',
        'drop-play': '0 20px 80px rgba(206, 35, 60, 0.26)',

      },
      boxShadow: {
        'more-btn': 'inset 0 0 1px #333',
      },
      aspectRatio: {
        'img-service': '410.67 / 320', 
        'banner': '5 / 1',   
        'thumbnail': '4 / 3',  
        'fanpage': '8 / 3',
        'pt-desktop': '302 / 382',
        'pt-tablet': '377 / 476',
        'pt-mobile': '382 / 483',
        'schedule': '411 / 474',
        'blog-image': '845 / 510',
        'event': '387 / 560',
      },
      screens: {
        'md': '834px',
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [
  //   require('@tailwindcss/line-clamp'),
    
  // ],
};
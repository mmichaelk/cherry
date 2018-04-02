export const theme = {
  colors: {
    red: '#FF5C5D',
    redHover: '#E55253',
    darkBlue: '#74878D',
    halfRed: '#F2A4AA',
    grey: '#919191',
    darkGrey: '#404E54',
    white: '#FFFFFF',
    black: '#000000',
    almostBlack: '#2B2A24',
    greyText: 'rgba(64, 78, 84, 0.75)',
    orange: '#FF7E00',
    divider: 'rgba(64, 78, 84, 0.25)',
    footerBg: 'rgba(32, 38, 39, 0.95)',
    darkHeader: '#AAADAD',
  },
  fonts: {
    futura: 'font-family: futura-pt, Arial, sans-serif;',
    futuraBold: `
      font-family: futura-pt-bold, Arial, sans-serif;
      font-weight: bold;
    `,
  },
  chatFooterHeight: 58,

  gridWidth: 940,
  mediumWidth: 780,

};

theme.layout = {
  mobile: {
    respondTo: `(max-width: ${780 + 39}px)`,
  },
  desktop: {
    respondTo: `(min-width: ${780 + 40}px)`,
  },
  medium: {
    respondTo: `(max-width: ${theme.mediumWidth}px)`,
  },
  cols10: {
    respondTo: `(min-width: ${780 + 40}px) and (max-width: ${theme.gridWidth + 39}px)`,
  },
  cols8: {
    respondTo: `(min-width: ${620 + 40}px) and (max-width: ${780 + 39}px)`,
  },
  cols6: {
    respondTo: `(min-width: ${460 + 40}px) and (max-width: ${620 + 39}px)`,
  },
  lessThanCols6: {
    respondTo: `(max-width: ${460 + 39}px)`,
  },
};


export const fontSize = (fontSize, lineHeight) => (`
  font-size: ${fontSize}px;
  line-height: ${lineHeight ? `${lineHeight}px` : '1.1'};
`);

export const respondTo = (size, style) => `@media only screen and ${theme.layout[size].respondTo} {
  ${style}
}`;

export const mobile = style => respondTo('mobile', style);
export const desktop = style => respondTo('desktop', style);
export const medium = style => respondTo('medium', style);
export const cols10 = style => respondTo('cols10', style);
export const cols8 = style => respondTo('cols8', style);
export const cols6 = style => respondTo('cols6', style);
export const lessThanCols6 = style => respondTo('lessThanCols6', style);

theme.respondTo = respondTo;
theme.fontSize = fontSize;

export default theme;

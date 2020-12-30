import colors from './colors';

const fontFamily = 'Arial';

const defaultStyles = {
  normal: `
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: normal;
  `,
  bold: `
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: bold;
  `,
};

export default {
  heading: {
    h1: `
      ${defaultStyles.bold}
      font-size: 32px;
      line-height: 36px;
      color: ${colors.textDarkGrey};
    `,
    h2: `
      ${defaultStyles.bold}
      font-size: 28px;
      line-height: 32px;
      color: ${colors.textDarkGrey};
    `,
    h3: `
      ${defaultStyles.bold}
      font-size: 24px;
      line-height: 28px;
      color: ${colors.textDarkGrey};
    `,
    h4: `
      ${defaultStyles.bold}
      font-size: 20px;
      line-height: 24px;
      color: ${colors.textDarkGrey};
    `,
    h5: `
      ${defaultStyles.bold}
      font-size: 16px;
      line-height: 20px;
      color: ${colors.textDarkGrey};
    `,
  },
  text: {
    t1: `
      ${defaultStyles.normal}
      font-size: 20px;
      line-height: 28px;
      color: ${colors.textGrey};
    `,
    t2: `
      ${defaultStyles.normal}
      font-size: 16px;
      line-height: 24px;
      color: ${colors.textGrey};
    `,
    t3: `
      ${defaultStyles.normal}
      font-size: 14px;
      line-height: 22px;
      color: ${colors.textGrey};
    `,
    t1Bold: `
      ${defaultStyles.bold}
      font-size: 20px;
      line-height: 28px;
      color: ${colors.textGrey};
    `,
    t2Bold: `
      ${defaultStyles.bold}
      font-size: 16px;
      line-height: 24px;
      color: ${colors.textGrey};
    `,
  },
};

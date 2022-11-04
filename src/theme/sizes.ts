export enum PADDING_ENUM {
  SMALL = '8px',
  DEFAULT = '16px',
  LARGE = '24px',
}

export enum SIZE_FONT_ENUM {
  DEFAULT = 'default',
  HEADER = 'header',
}

export type SIZE_FONT_TYPE = `${SIZE_FONT_ENUM}`;

export const SIZE_FONT_DATA = {
  [SIZE_FONT_ENUM.DEFAULT]: '16px',
  [SIZE_FONT_ENUM.HEADER]: '18px',
};

export const SIZE_FONT_WEIGHT_DATA = {
  [SIZE_FONT_ENUM.DEFAULT]: 'regular',
  [SIZE_FONT_ENUM.HEADER]: 'bold',
};

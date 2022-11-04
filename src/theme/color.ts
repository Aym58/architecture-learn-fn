export enum COLOR_ENUM {
  DEFAULT = 'default',
  BUTTON = 'button',
}

export type COLOR_TYPE = `${COLOR_ENUM}`;

export const COLOR_DATA = {
  [COLOR_ENUM.DEFAULT]: '#121212',
  [COLOR_ENUM.BUTTON]: '#62ceff',
};

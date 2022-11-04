export const MODULE_NAME = 'POST_LIST_MODULE';

export enum FORM_VALUE_ENUM {
  TEXT = 'text',
}

export type FORM_VALUE_TYPE = `${FORM_VALUE_ENUM}`;

export interface FORM_VALUE_INTER {
  [FORM_VALUE_ENUM.TEXT]: string;
}

export const API = {
  TYPE: 'POST',
  URL: (projectId: number) => `/project/${projectId}/post`,
};

export const PROJECT_ID = 1;

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}

export const POST_CREATE_SUCCESS = 'Post successfully created';

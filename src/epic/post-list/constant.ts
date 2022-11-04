import { POST_DATA_LIST_INTER } from '../../data/post';

export const MODULE_NAME = 'POST_LIST_MODULE';

export const API = {
  TYPE: 'GET',
  URL: '/project/1/post',
};

export const POST_LIST_TITLE = 'Post list';

export interface ACTION_RESPONSE_INTER extends POST_DATA_LIST_INTER {}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}

export interface DATA_INTER extends POST_DATA_LIST_INTER {
  isEmpty: boolean;
}

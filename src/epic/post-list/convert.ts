import { ACTION_RESPONSE_INTER, DATA_INTER } from './constant';

import { POST_DATA_RAW_INTER } from '../../data/post/constant';

export const convert = (raw: ACTION_RESPONSE_INTER): DATA_INTER => {
  return {
    list: raw.list.map((item: POST_DATA_RAW_INTER) => ({
      ...item,
    })),
    isEmpty: !raw?.list?.length,
  };
};

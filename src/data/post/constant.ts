export interface POST_DATA_RAW_INTER {
  id: number;
  text: string;
  project: {
    id: number;
  };
}

export interface POST_DATA_INTER extends POST_DATA_RAW_INTER {}

export interface POST_DATA_LIST_RAW_INTER {
  list: POST_DATA_RAW_INTER[];
}

export interface POST_DATA_LIST_INTER extends POST_DATA_LIST_RAW_INTER {}

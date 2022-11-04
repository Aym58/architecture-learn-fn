export const MODULE_NAME = 'POST_LIST_MODULE';

export const API = {
  TYPE: 'DELETE',
  URL: (projectId: number, postId: number) =>
    `/project/${projectId}/post/${postId}`,
};

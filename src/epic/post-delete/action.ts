import { API } from './constant';
import { HttpRequest } from '../../lib/http';

export const action = (projectId: number, postId: number) => {
  return HttpRequest({
    method: API.TYPE,
    url: API.URL(projectId, postId),
  });
};

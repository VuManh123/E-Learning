import axiosClient from './axiosClient';

const URL = 'apis/video';

const videoApi = {
  getVideoList: () => {
    return axiosClient.get(`${URL}/video-list`);
  },

  getVideoHtml: (_id) => {
    return axiosClient.get(`${URL}/video-html`, { params: { _id } });
  },
};

export default videoApi;

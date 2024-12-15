import axiosClient from './axiosClient';

const URL = 'apis/common';

const commonService = {
  getWordPackTotal: (packInfo) => {
    return axiosClient.get(`${URL}/word-pack/total`, {
      params: { packInfo: JSON.stringify(packInfo) },
    });
  },
};

export default commonService;

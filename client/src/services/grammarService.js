import axiosClient from './axiosClient';

const URL = 'apis/grammar';

const grammarApi = {
  getGrammarList: () => {
    return axiosClient.get(`${URL}/grammar-list`);
  },

  getGrammarHtml: (_id) => {
    return axiosClient.get(`${URL}/grammar-html`, { params: { _id } });
  },
};

export default grammarApi;

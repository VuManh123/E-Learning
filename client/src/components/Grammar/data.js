import grammarApi from 'services/grammarService';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import Grammar from '.';

function GrammarData() {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        const apiRes = await grammarApi.getGrammarList();
        if (apiRes.status === 200 && isSub) {
          const { grammarList = [] } = apiRes.data;
          setLoading(false);
          setList(grammarList);
        }
      } catch (error) {
        const message =
          error.response?.data?.message || 'Lấy tài liệu thất bại, thử lại !';
        dispatch(setMessage({ message, type: 'error' }));
      }
    })();

    return () => {
      isSub = false;
    };
  }, []);

  return <Grammar loading={loading} list={list} />;
}

export default GrammarData;

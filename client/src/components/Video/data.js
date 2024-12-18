import videoApi from 'services/videoService';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'redux/slices/message.slice';
import Video from '.';

function VideoData() {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        const apiRes = await videoApi.getVideoList();
        if (apiRes.status === 200 && isSub) {
          const { videoList = [] } = apiRes.data;
          setLoading(false);
          setList(videoList);
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

  return <Video loading={loading} list={list} />;
}

export default VideoData;

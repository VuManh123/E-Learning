import videoApi from 'services/videoService';
import React, { useState } from 'react';
import VideoListBox from '.';

function VideoListBoxData(props) {
  const [blogHtml, setBlogHtml] = useState(null);

  const onLoadBlog = async (_id) => {
    try {
      if (!Boolean(_id)) {
        return;
      }
      const apiRes = await videoApi.getVideoHtml(_id);
      if (apiRes.status === 200) {
        setBlogHtml(apiRes.data?.videoHtml);
      }
    } catch (error) {}
  };

  return (
    <VideoListBox {...props} blogHtml={blogHtml} onLoadBlog={onLoadBlog} />
  );
}

export default VideoListBoxData;

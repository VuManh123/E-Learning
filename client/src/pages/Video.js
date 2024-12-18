import VideoData from 'components/Video/data';
import useTitle from 'hooks/useTitle';
import React from 'react';

function VideoPage() {
  useTitle('Một số video bài giảng');

  return <VideoData />;
}

export default VideoPage;

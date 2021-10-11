import React from 'react';
import ReactPlayer from 'react-player/lazy';

const VideoPlayerFeature = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <ReactPlayer url="https://youtu.be/-_Navip4d9w" />
      <ReactPlayer url="https://youtu.be/6qqVtLsHgDI" />
      <ReactPlayer url="https://www.youtube.com/watch?v=rCR1dpAigtU" />
    </div>
  );
};

export default VideoPlayerFeature;

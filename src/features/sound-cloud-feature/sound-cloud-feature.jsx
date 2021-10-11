import React from 'react';
import ReactPlayer from 'react-player/lazy';

const SoundCloudFeature = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <ReactPlayer
        url="https://soundcloud.com/scenicodyssey/scenixx-global-ascension-set"
        fallback="...Loading"
      />
      <ReactPlayer
        url="https://soundcloud.com/scenicodyssey/scenixx-spring-oasis-set"
        fallback="...Loading"
      />
      <ReactPlayer
        url="https://soundcloud.com/scenicodyssey/scenic-odyssey-1-set-scenixx"
        fallback="...Loading"
      />
    </div>
  );
};

export default SoundCloudFeature;

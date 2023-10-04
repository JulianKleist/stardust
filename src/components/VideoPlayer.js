import React from 'react';
import './VideoPlayer.css'
class VideoPlayer extends React.Component {
    render() {
      const { VideoTop, VideoWidth, VideoHeight, VideoLeft } = this.props;
      const videoId = 'watch?v=ANs8-1iYkww';
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
      return (
        <div className="video-player" style={{top: VideoTop, left: VideoLeft}}>
          <iframe
            width={VideoWidth}
            height={VideoHeight}
            src={embedUrl}
            title="YouTube Video Player"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      );
    }
  }
  
  export default VideoPlayer;
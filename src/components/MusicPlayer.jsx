import { useRef, useState } from "react";
import PropTypes from "prop-types";
import BtnPlay from "./BtnPlay";
import BtnPause from "./BtnPause";
import SoundIcon from "./SoundIcon";

const MusicPlayer = ({ sound }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();

        setIsPlaying(false);
      } else if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="relative">
      <SoundIcon isSoundOn={isPlaying} audioRef={audioRef} />
      <div onClick={playAudio}>
        {isPlaying ? (
          <BtnPause playing={isPlaying} />
        ) : (
          <BtnPlay playing={isPlaying} />
        )}
        <audio ref={audioRef}>
          <source src={sound} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

MusicPlayer.propTypes = {
  sound: PropTypes.string.isRequired,
};

export default MusicPlayer;

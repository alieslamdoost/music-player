import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlerPause,
  handlerPlay,
}) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlerPause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlerPlay} />
  );

export default PlayPause;

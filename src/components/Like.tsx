import { useState } from "react";

import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface Props {
  onClick: () => void; // This is a function that takes no arguments and returns void
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    // This is a funciton that sets the status to the opposite of what it currently is and calls the onClick function which was passed as a propagted prop from the parent component
    setStatus(!status);
    onClick();
  };
  if (status)
    return <IoMdHeart size="2em" color="red" onClick={() => toggle()} />;
  else
    return <IoMdHeartEmpty size="2em" color="black" onClick={() => toggle()} />;
};
export default Like;

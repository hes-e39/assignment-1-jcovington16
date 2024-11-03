import { useState, useEffect } from "react";
import styled from "styled-components";
import HomeButton from "../generic/HomeButton";
import Panel from "../generic/Panel";
import Button from "../generic/StartButton";
import ResetButton from "../generic/ResetButton";

const TimeDisplay = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isActive) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000); // Convert milliseconds to minutes
    const seconds = Math.floor((time % 60000) / 1000); // Convert remaining milliseconds to seconds
    const milliseconds = Math.floor((time % 1000) / 10); // Convert remaining to 2-digit milliseconds

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <Panel title="Stopwatch">
      <HomeButton />
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
      <Button onClick={toggle}>{isActive ? "Pause" : "Start"}</Button>
      <ResetButton onClick={reset}>Reset</ResetButton>
    </Panel>
  );
};

export default Stopwatch;

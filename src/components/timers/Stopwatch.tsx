import { useState, useEffect } from "react";
import styled from "styled-components";
import HomeButton from "../generic/HomeButton";
import Panel from "../generic/Panel";

const TimeDisplay = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

// Reuse existing Button and ResetButton from the generic folder or define them here
const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const ResetButton = styled(Button)`
  background-color: #f44336;
  &:hover {
    background-color: #e53935;
  }
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

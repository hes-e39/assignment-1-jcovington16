import styled from "styled-components";
import { Link } from "react-router-dom";

const TimersContainer = styled.div`
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TimerButton = styled(Link)`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  text-align: center;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  width: 200px;
  display: block;
  text-transform: uppercase;
  &:hover {
    background-color: #45a049;
  }
`;

const TimersView = () => {
  return (
    <TimersContainer>
      <Title>Select a Timer</Title>
      <ButtonContainer>
        <TimerButton to="/stopwatch">Stopwatch</TimerButton>
        <TimerButton to="/countdown">Countdown</TimerButton>
        <TimerButton to="/xy">XY Timer</TimerButton>
        <TimerButton to="/tabata">Tabata</TimerButton>
      </ButtonContainer>
    </TimersContainer>
  );
};

export default TimersView;

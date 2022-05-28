import ReactDOM from 'react-dom';
import { Game } from "./game";

export const Home: React.FC = (): JSX.Element => {
  return (
    <Game />
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

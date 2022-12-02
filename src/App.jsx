import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  MovieProvider,
  useMovieContext,
  MovieContext,
} from "contexts/MovieContext";
import Alert from "react-bootstrap/Alert";

import { useNavigatorStatus } from "hooks";

import MoviePage from "./pages/MoviePage";
import styled from "styled-components";

const ErrorNetwork = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

function App() {
  const { online } = useNavigatorStatus();
  return (
    <div className="App">
      {!online && (
        <ErrorNetwork>
          <Alert key={"danger"} variant={"danger"}>
            Network error !{" "}
          </Alert>
        </ErrorNetwork>
      )}

      <MovieProvider>
        <MoviePage />
      </MovieProvider>
    </div>
  );
}

export default App;

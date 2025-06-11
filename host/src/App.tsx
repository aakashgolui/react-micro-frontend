import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { lazy, Suspense } from "react";

import useCount from "remoteApp/store";

const RemoteButton = lazy(() => import("remoteApp/Button"));

function App() {
  const [state, setState] = useCount();
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RemoteButton />
      </Suspense>
      <button onClick={() => setState((s: number) => s + 1)}>
        Count: {state}
      </button>
    </>
  );
}

export default App;

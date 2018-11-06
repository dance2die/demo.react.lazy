import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const Hello = lazy(() => import("./components/Hello"));
const Bye = lazy(() => import("./components/Hello"));

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Hello />
    </Suspense>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

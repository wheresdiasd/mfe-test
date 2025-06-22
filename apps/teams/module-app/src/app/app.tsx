// eslint-disable-next-line @typescript-eslint/no-unused-vars

import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import TeamRedLayout from "./team-red-layout";
import { AppQueryProvider } from "./query-client-provider";

export function App() {
  return (
    <div>
      <TeamRedLayout id="app"></TeamRedLayout>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <StrictMode>
    <AppQueryProvider>
      <App />
    </AppQueryProvider>
  </StrictMode>,
);

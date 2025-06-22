// eslint-disable-next-line @typescript-eslint/no-unused-vars

import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import BlueBasket from "./team-blue-basket";
import BlueBuy from "./team-blue-buy";
import ActivitiesList from "./module-activities-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a local QueryClient just for testing
// This mimics what the AppQueryProvider from module_app would provide
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

// Local test-only provider
function TestQueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export function App() {
  return (
    <div>
      <ActivitiesList />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <StrictMode>
    <TestQueryProvider>
      <App />
    </TestQueryProvider>
  </StrictMode>,
);

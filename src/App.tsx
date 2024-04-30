import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Layout } from "./components/layout/layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;

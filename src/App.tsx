import "presentation/design-system/styles/global.css";

import { Home } from "presentation/pages/Home";
import { queryClient } from "presentation/server/query";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Home />
      </QueryClientProvider>
    </>
  );
}

export default App;

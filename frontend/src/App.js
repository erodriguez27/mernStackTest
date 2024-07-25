import React from "react";

import AppRouter from "./routes";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  );
}

export default App;

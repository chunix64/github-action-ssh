import { RouterProvider } from "react-router/dom";

import { publicRoutes } from "@/routes";

function App() {
  return (
    <div className="app">
      <RouterProvider router={publicRoutes} />
    </div>
  );
}

export default App;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { AuthContext } from "./context";
import { useState } from "react";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
    </Route>
  )
);
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
    <div className="flex flex-col bg-[#171717] min-h-screen">
      <RouterProvider router={router} />
    </div>
    </AuthContext.Provider>
  );
}

export default App;

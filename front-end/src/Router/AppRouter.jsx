import ContextProvider from "../context/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";

const AppRouter = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default AppRouter;

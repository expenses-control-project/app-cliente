import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

// Pages
import AuthPage from "./pages/Auth/AuthPage";
import DashboardPage from "./pages/Dashboard/DashboardPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/*" element={<AuthPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/users/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

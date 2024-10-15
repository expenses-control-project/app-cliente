import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

// Pages
import AuthPage from "./pages/Auth/AuthPage";
import DashboardPage from "./pages/Dashboard/DashboardPage"
import AuthGuard from "./guard/auth.guard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/*" element={<AuthPage />} />
        <Route element={<AuthGuard />}>
          <Route path="/dashboard/*" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/users/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

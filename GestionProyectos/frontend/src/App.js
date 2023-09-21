import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./pages/Projects";
import Calendar from "./components/Calendar/Calendar";
import Kanban from "./components/Kanban/Kanban";
import Report from "./components/Report/Report";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./components/Theme";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ marginTop: "60px", flexGrow: 1, padding: "24px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard";
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Calendar from "./components/Calendar";
import Kanban from "./components/Kanban";
import Report from "./components/Report";
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

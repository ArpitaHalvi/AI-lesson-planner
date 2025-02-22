import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./components/ui/Home";
import LessonPlanner from "./components/ui/LessonPlanner";
import Login from "./components/ui/Login";
import LessonPlanPDF from "./components/ui/LessonPlanPDF";
import Signup from "./components/ui/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson-planner" element={<LessonPlanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lesson-plan-pdf" element={<LessonPlanPDF />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

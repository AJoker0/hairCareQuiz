import { Routes, Route, Navigate} from "react-router-dom";
import Start from "./pages/Start.jsx";
import Question from "./pages/Question.jsx";
import Results from "./pages/Results.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/q/:num" element={<Question />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<Navigate to="/"  />} />
    </Routes>
  );
}
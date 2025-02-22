import React from "react";
import { UserProvider } from "./components/UserContext"; // Import UserProvider
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import Quiz from "./components/Question";
import Results from "./components/Results";

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import SearchResults from "./pages/searchResults/SearchResults";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/search-results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;

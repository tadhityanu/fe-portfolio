import { Route, Routes } from "react-router-dom";
import '../Styles/Index.css'
import MainPage from "./MainPage";

function App() {
  return (
    <Routes>
      <Route path="/fe-portfolio/" Component={MainPage} />
    </Routes>
  );
}

export default App;

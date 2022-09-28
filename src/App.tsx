import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signin from "./pages/Signin"


function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import CreateLetter from "./pages/CreateLetter"
import ReadLetter from "./pages/ReadLetter"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateLetter />} />
        <Route path="/letter" element={<ReadLetter />} />
      </Routes>
    </BrowserRouter>
  )
}
import { Routes, Route } from 'react-router-dom';
import { Errorpage, Home, Projects, } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="*" element={<Errorpage />}/>
    </Routes>
  )
}

export default App

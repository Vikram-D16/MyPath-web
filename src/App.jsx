import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Organizations from './pages/Organizations';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

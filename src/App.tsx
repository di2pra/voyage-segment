import { Sign } from 'crypto';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import FlashDeal from './routes/FlashDeal';
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';

declare global {
  interface Window {
    analytics: any;
  }
}

function App() {

  let location = useLocation();

  useEffect(() => {
    window.analytics.page();
  }, [location]);


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/flash-deals/maldives" element={<FlashDeal />} />
      </Route>
    </Routes>
  );
}

export default App;

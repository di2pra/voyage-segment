import { Sign } from 'crypto';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;

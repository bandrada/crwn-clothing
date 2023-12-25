import './App.css';
import './components/category/directory';
import HomePage from './routes/home-page';
import NavBar from './routes/nav-bar';
import AuthPage from './routes/auth-page';
import { Routes, Route } from 'react-router-dom';
import Shop from './routes/shop';

const ShopPage = () => {
  return <Shop />
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />}/>
        <Route path='shop' element={<ShopPage />}/>
        <Route path='auth' element={<AuthPage />}/>
      </Route>
    </Routes>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrencyPage from './components/CurrencyPage';
import CurrencyPairDetail from './components/CurrencyPairDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<CurrencyPage />} />
          <Route path="/currency-detail" element={<CurrencyPairDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

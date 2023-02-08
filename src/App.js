import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dashboard from './views/Dashboard';
import PostContextProvider from './contexts/PostContexts';

function App() {
  return (
    <div className="App">
      <header >
        <h1>CRUD react app</h1>
      </header>
      <PostContextProvider>
      <Router>
          <Routes>
          <Route
              path="/"
              element={<Dashboard />}
            />
          </Routes>


        </Router>
      </PostContextProvider>
      
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Login from './layouts/Login';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<DefaultLayout />}></Route>
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

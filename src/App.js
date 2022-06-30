import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './layouts/Login';

export const LoginContext = createContext();
function App() {
    const [elm, setElm] = useState(<Login />);

    const handleChangeAccount = (Layout) => {
        setElm(Layout);
    };
    return (
        <LoginContext.Provider value={handleChangeAccount}>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={elm}></Route>
                    </Routes>
                </div>
            </Router>
        </LoginContext.Provider>
    );
}

export default App;

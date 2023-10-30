import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import AuthRoute from '../app/services/AuthRoute';
import Login from '../pages/onBoarding/Login';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path='/*'
                    element={<Login />}
                />
                <Route
                    path='/home'
                    element={<Home />}
                />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/Home';
import Login from './pages/loginPage/Login';
import PrivateRoute from './utlis/PrivateRoutes';
import { AuthProvider } from './context/AuthContext';
import Register from './pages/registerPage/Register';
import OutLet from './components/outlet/OutLet';
import Prediction from './pages/predictionPage/Prediction'
import Appointment from './pages/appointmentPage/Appointment'
import Donation from './pages/donationPage/Donation'
const App = () => {
  return (
    <Router>
      <AuthProvider>
        
        <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/' element={<OutLet />}>
                  <Route path="/"  element={<Home/> } />
                  <Route path="/disease_prediction" element={<PrivateRoute Component={Prediction} /> } />
                  <Route path="/bookappointment" element={<PrivateRoute Component={Appointment} /> } />
                  <Route path="/donate" element={<PrivateRoute Component={Donation} /> } />
                </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;

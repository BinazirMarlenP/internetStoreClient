import React, {useContext} from 'react';
import { Routes, Route} from 'react-router-dom';
// import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';
import Shop from '../pages/Shop';
import DevicePage from '../pages/DevicePage';
import Auth from '../pages/Auth';
import Admin from '../pages/Admin';

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
          <Route  path='/shop' element={<Shop/>}/>
           { user.isAuth &&<Route  path='/admin' element={<Admin/>}/>}
           <Route  path='/login' element={<Auth/>}/>
           <Route  path='/registration' element={<Auth/>}/>
           { user.isAuth &&<Route  path='/device/:id' element={<DevicePage/>}/>}
        </Routes>
       
    );
};

export default AppRouter;


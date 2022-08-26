
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext} from 'react';
import { Button, Container} from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import { Context } from '../index';
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, } from '../const';
import { useNavigate} from 'react-router-dom'

const NavBar =observer(() => {
    const {user} = useContext(Context);
    const history = useNavigate();

        return (
            <Navbar bg="dark" variant={"dark"}>
                <Container>
                    <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>КупиДевайс</NavLink>
                    {user.isAuth? 
                    <Nav className='ms-auto' style={{color:'white'}}>
                        <Button variant={'outline-light'} onClick ={()=>history(ADMIN_ROUTE, {replace: true})}>Админ Панель</Button>
                        <Button variant={'outline-light'} className="ms-2" onClick ={()=>history(LOGIN_ROUTE, {replace: true})}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className='ms-auto' style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={()=>user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>}
                </Container>
            </Navbar>
        );
    });

export default NavBar;
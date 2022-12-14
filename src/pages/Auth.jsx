import React , {useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Button, Form } from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import { login, registration } from '../http/userApi.js';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Row from "react-bootstrap/Row"; 
import { Context } from '../index';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../const';


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history =useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () =>{
        try {
           let data
            if(isLogin){
             data = await login(email, password);
            }else{
             data= await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history(SHOP_ROUTE, {replace: true})
            console.log(data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
   
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight-54}}>
            <Card style={{widht: 600}} className="p-5">
                <h2 className='m-name'>{isLogin? 'Авторизация': 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                    className="mt-3"
                    placeholder="Введите Ваш email..."
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                   
                    <Form.Control
                    className="mt-3"
                    placeholder="Введите Ваш пароль..."
                    type="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />

                    <Row className='d-flex justify-content-between mt-3'>{
                        isLogin? <div>
                            Нет аккаунта <NavLink to={REGISTRATION_ROUTE}> Зарегаться!</NavLink>
                        </div>:<div> Есть аккаунт
                            <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                        </div>
                    }
                       <Button className='align-self-end' variant={'outline-success'} onClick={click}>{isLogin? 'Войти': 'Зарегаться'}</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;

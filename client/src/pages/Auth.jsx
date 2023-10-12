/*import React, {useContext, useState} from 'react';
import {Card, Container,Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts';
import {NavLink, useLocation} from 'react-router-dom';
import {login, registration} from '../http/userAPI';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {useNavigate} from 'react-router';
 */
const Auth = observer(() => {
    const {user} = userContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const click = async() => {
        try{
            let data;
            if (isLogin){
                data = await login(email,password)
            }else {
                data = await registration(email,password)
            }
            user.setUser(user)
            user.SetIsAuth(true)
            navigate(HOME_ROUTER)
        }catch(e) {
            alert(e.response.data.message)
        }
    }
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height:window.innerHeight - 20}}
        >
            <Card
                style={{widths: 600}}
                className='p-5'
            >
                <h2 className={m-auto}>
                    {isLogin ? 'Авторизация' : 'Регистрация'}
                </h2>
            <Form
                className='d-flex flex-column'
            >
                <Form.Control
                className='mt-3'
                placeholder='Введите ваш e-mail...'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Введите ваш пароль...'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                />
                <Row
                    className='d-flex justife-content-between mt-3'
                >
                    {isLogin ?
                    <div>
                        Нет аккунта?<NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                    </div>
                    :
                    <div>
                        Есть аккаунт? <NaavLink to={LOGIN_ROUTER}>Войдите!</NaavLink>
                    </div>
                    }
                    <Button
                        variant='outline-success'
                        onClick={click}
                    >
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                </Row>
            </Form>
            </Card>
        </Container>
    );
});
export default Auth;
import React, {useContext} from 'react';
import {Container, Nav, Navbar,} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ACCAUNT_ROUTE, ARTICLE_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";


const MyNavbar = observer(() => {
    const {user} = userContext(Context)

    return (
            <Container classbName="justify-content-end d-flex" style={{backgroundColor: "#232536"}}>
                <Navbar style={{padding: "20px 0px"}}>
                    <Nav className="ml-auto">
                        <Nav.Link style={{color: 'white'}} href={HOME_ROUTE}>Главная</Nav.Link>
                        <Nav.Link style={{color: 'white'}} href={{ARTICLE_ROUTE}}>Статьи</Nav.Link>
                        {user.isAuth ?
                        <Nav.Link style={{color: 'white'}} href={{ACCAUNT_ROUTE}}>Личный кабинет</Nav.Link>
                        :
                        <Nav.Link style={{color: 'white'}} href={LOGIN_ROUTE}>Авторизация</Nav.Link>
                        }
                    </Nav>
                </Navbar>
            </Container>
    )
}
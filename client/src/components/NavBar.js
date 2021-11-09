import React , {useContext}from "react";
import { Context } from "../index";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import {Button, Container} from "react-bootstrap"
import {observer} from "mobx-react-lite"


const NavBar = observer(() => {
     const {user} = useContext(Context)
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{color:'white'}} to={SHOP_ROUTE}> НеКопиКупи!</NavLink>
        {user.isAuth ?
        <Nav className='ml-auto' style={{color:'white'}}>
          <Button variant={"outline-light"} onClick={() => user.setIsAuth(false)}>Выйти</Button>
          <Button variant={"outline-danger"} className='ml-2'>Админ панель</Button>
        </Nav>
        :
        <Nav className='ml-auto' style={{color:'white'}}>
          <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
        </Nav>
        }
         </Container>
  </Navbar>
    );
});
export default NavBar;
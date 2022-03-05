import React from 'react'
import { Container, Navbar, Button, Nav } from 'react-bootstrap'
import Logo from '../assets/img/redux.png'
import { useDispatch } from 'react-redux'
import { openCloseAddTweetModalAction } from '../actions/modalsActions'

export default function Menu() {

    const dispatch = useDispatch()
    const openCloseAddTweetModal = state => dispatch(openCloseAddTweetModalAction(state))

    const openModal = () => {
        openCloseAddTweetModal(true)
    }

    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>
                    <img alt="Tweet simulator redux" src={Logo} width='30' height='30' className='d-inline-block align-top mr-5' />
                    Tweet simulator redux
                </Navbar.Brand>
                <Button onClick={openModal} variant='outline-success'>Nuevo tweet</Button>
            </Container>
        </Navbar>
    )
}
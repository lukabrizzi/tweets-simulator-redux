import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { validationFormAddTweetActions } from '../actions/validationActions'
import { addTweetActions } from '../actions/tweetsActions'
import {v4 as uuid} from 'uuid'
import moment from 'moment'
import {openCloseAddTweetModalAction} from '../actions/modalsActions'

export default function FormAddTweet() {
    const [formValue, setFormValue] = useState({
        name: '',
        tweet: ''
    })

    const dispatch = useDispatch()
    const errorForm = state => dispatch(validationFormAddTweetActions(state))
    const addTweet = state => dispatch(addTweetActions(state))
    const closeModal = state => dispatch(openCloseAddTweetModalAction(state))

    const errorFormValue = useSelector(state => state.validations.errorFormAddTweet)

    const onChange = e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        const {name, tweet} = formValue

        if (!name || !tweet) {
            errorForm(true)
        } else {
            errorForm(false)
            addTweet({
                id: uuid(),
                name,
                tweet,
                date: moment()
            })
            closeModal(false)
        }
    }

    return (
        <Form className='m-3' onChange={onChange} onSubmit={onSubmit}>
            <Form.Group className='text-center'>
                <h1>Nuevo tweet</h1>
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' name='name' placeholder='Escribe tu nombre' />
            </Form.Group>
            <Form.Group>
                <Form.Control as='textarea' name='tweet' row='3' placeholder='Escribe lo que quieres comunicar...' />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Enviar tweet
            </Button>
            {errorFormValue && (
                <Alert variant='danger' className='mt-4'>Todos los campos son obligatorios</Alert>
            )}
        </Form>
    )
}
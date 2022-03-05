import React from 'react'
import { Modal as ModalB } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { openCloseAddTweetModalAction } from '../actions/modalsActions'

export default function Modal(props) {
    const { children } = props

    const dispatch = useDispatch()
    const closeModal = state => dispatch(openCloseAddTweetModalAction(state))

    const isOpenModal = useSelector(state => state.modals.stateModalAddTweet)

    return (
        <ModalB
            show={isOpenModal}
            onHide={() => closeModal(false)}
            size='lg'
            centred
        >
            {children}
        </ModalB>
    )
}
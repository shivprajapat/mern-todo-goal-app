import { createGoal } from 'features/goals/goalSlice';
import React, { useEffect, useState } from 'react'
import { Button, Form, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast'

const CreateGoal = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const { isLoading, isError, message } = useSelector((state) => state.goals)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

    }, [isError, message,])

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createGoal({ text }))
        setText('')
    }
    return (
        <section className='space'>
            <Container>
                <Row>
                    <Col xxl={6} lg={8} className='mx-auto'>
                        <h1 className='text-center'>Create Goals</h1>
                        <div className='shadow p-3'>
                            <Form onSubmit={onSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicTitle">
                                    <Form.Label>Goal</Form.Label>
                                    <Form.Control type="title" placeholder="Title" name='text' value={text} onChange={(e) => setText(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="text-center">
                                    <Button variant="primary" mr={2} type="submit">
                                        {isLoading ? <Spinner animation="border" size="sm" /> : "Add Goal"}
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CreateGoal
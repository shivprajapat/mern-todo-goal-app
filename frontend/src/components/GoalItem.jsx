import React from 'react'
import { Button, Card, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice'
import { toast } from 'react-hot-toast'

const GoalItem = ({ goal }) => {
  const { _id, createdAt, text, } = goal;
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.goals)
  const removeItem = (id) => {
    dispatch(deleteGoal(id))
    toast.success('Deleted goal Successfully')
  }
  if (isLoading) {
    return <Spinner />
  }
  return (
    <Card className='shadow border-0 mb-3'>
      <Card.Body>
        <Button size='sm' variant="primary mb-2">ID: {_id}</Button>
        <Card.Title className="text-capitalize">{text}</Card.Title>
        <Card.Text><b>Date:</b> {new Date(createdAt).toLocaleString('en-US')}</Card.Text>
        <Card.Footer className='bg-transparent border-0 ps-0'>
          <Button size='sm' variant="warning" >View</Button>
          <Button size='sm' variant="info" className='mx-2'>Edit</Button>
          <Button size='sm' variant="danger" onClick={() => removeItem(_id)}>
            {isLoading ? <Spinner animation="border" size="sm" /> : "Delete"}
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default GoalItem
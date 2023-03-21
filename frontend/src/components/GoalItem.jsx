import React from 'react'
import { Button, Card, Spinner } from 'react-bootstrap'

const GoalItem = () => {
  const isLoading = false
  return (
    <Card className='shadow border-0 mb-3'>
      <Card.Body>
        <Card.Title>This is Heading</Card.Title>
        <Card.Text>Shiv</Card.Text>
        <Card.Footer className='bg-transparent border-0 ps-0'>
          <Button size='sm' variant="warning" >View</Button>
          <Button size='sm' variant="info" className='mx-2'>Edit</Button>
          <Button size='sm' variant="danger">
            {isLoading ? <Spinner animation="border" size="sm" /> : "Delete"}
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default GoalItem
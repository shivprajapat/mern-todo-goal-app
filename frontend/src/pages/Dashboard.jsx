import { GoalItem } from 'components'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <section className='dashboard space'>
      <Container>
        <div className='d-flex align-items-center justify-content-between flex-wrap mb-3'>
          <article>
            <h1>Goal List</h1>
            <Button as={Link} to="/create-goal">New Goal</Button>
          </article>
        </div>
        <Row>
          <Col lg={4}>
            <GoalItem />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Dashboard
import { GoalItem, Header } from 'components'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <Header />
      <Container>
        <div className='d-flex align-items-center justify-content-between flex-wrap mb-3'>
          <article>
            <h1>Goal List</h1>
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
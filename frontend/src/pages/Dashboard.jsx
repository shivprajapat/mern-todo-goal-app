import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import GoalItem from '../components/GoalItem';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <Container>
        <div className='d-flex align-items-center justify-content-between flex-wrap mb-3'>
          <article>
            <h1>Goal List</h1>
          </article>
        </div>
        <Row>
          {
            new Array(1).fill("").map((id) => (
              <Col xxl={4} md={6} key={id}>
                <GoalItem />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Dashboard
import { GoalItem } from "components";
import { getGoals, reset } from "features/goals/goalSlice";
import React, { useEffect } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector((state) => state.goals)

  useEffect(() => {

    if (isError) {
      toast.error(message)
    }
    if (!user) {
      navigate('/login');
    }
    dispatch(getGoals())
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch, isError, message])
  if (isLoading) {
    return <Spinner />
  }
  return (
    <section className="dashboard space">
      <Container>
        <div className="d-flex align-items-center justify-content-between flex-wrap mb-3">
          <article>
            <h1>Goal List</h1>
            <Button as={Link} to="/create-goal">
              New Goal
            </Button>
          </article>
        </div>
        <Row>
          {goals.length > 0 ? (
            <>
              {
                goals.map((goal, i) => <Col lg={4} md={6} key={i}>
                  <GoalItem goal={goal} />
                </Col>)}
            </>
          ) : (
            <h3>You have not set any goals</h3>
          )
          }

        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;

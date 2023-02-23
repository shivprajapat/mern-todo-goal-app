import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='custom-spinner'>
        <Spinner animation="border" />
      </div>
  )
}

export default Loading
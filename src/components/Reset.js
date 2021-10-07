import React from 'react'

const Reset = ({ reset }) => {

  return (
    <>
      <div className="resetContainer">
        <button onClick={reset} className="reset"></button>
      </div>
      
    </>
  )

}

export default Reset
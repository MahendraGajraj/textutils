import React from 'react'

const Gajraj = ({question1, heading, myStyle}) => {
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle}
            data-bs-toggle="collapse" data-bs-target="#flush-collapseSixteen"
            aria-expanded="false" aria-controls="flush-collapseSixteen">
            {question1}
        </button>
    </h2>
    <div id="flush-collapseSixteen" className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample">
        {/*<div className="accordion-body" style={myStyle}></div>*/}
        <div className='gajraj'>
            <img src="Gajraj.jpg" alt="" />
            <h2>{heading}</h2>
        </div>
    </div>
</div>
  )
}

export default Gajraj
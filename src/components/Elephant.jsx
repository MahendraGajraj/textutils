import React from 'react'

const Elephant = ({question1, question2, heading, myStyle}) => {
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle}
            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
            aria-expanded="false" aria-controls="flush-collapseTwo">
            {question1}
        </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample">
        <div className="accordion-body" style={myStyle}>{question2}</div>
        <div className='elephant'>
            <img src="Elephant.jpg" alt="" />
            <h2>{heading}</h2>
        </div>
    </div>
</div>
  )
}

export default Elephant
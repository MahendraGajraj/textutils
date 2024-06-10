import React from 'react'

const Banana = ({question1, question2, heading, myStyle}) => {
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle}
            data-bs-toggle="collapse" data-bs-target="#flush-collapseTweleve"
            aria-expanded="false" aria-controls="flush-collapseTweleve">
            {question1}
        </button>
    </h2>
    <div id="flush-collapseTweleve" className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample">
        <div className="accordion-body" style={myStyle}>{question2}</div>
        <div className='banana'>
            <img src="Banana.jpg" alt="" />
            <h2>{heading}</h2>
        </div>
    </div>
</div>
  )
}

export default Banana
import React from 'react'

const Lion = ({question1, question2, heading, myStyle}) => {
  return (
    <div className="accordion-item" >
                <h2 className="accordion-heade" style={{fontSize:"30px"}}>
                    <button className="accordion-button collapsed" type="button" style={myStyle}
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" 
                    aria-expanded="false" aria-controls="flush-collapseOne">
                        {question1}
                        
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={myStyle}>{question2}</div>
                    <div className='lion'>
                        <img src="Lion.jpg" alt="" />
                        <h2>{heading}</h2>
                    </div>
                </div>
            </div>
  )
}

export default Lion
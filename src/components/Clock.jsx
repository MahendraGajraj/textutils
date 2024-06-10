import React, {useState} from 'react'

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
    const UpdateTime = () => {
      time = new Date().toLocaleTimeString();
      setCtime(time);
    };
    setInterval(UpdateTime, 1000);
  return (
    <>
   
     <div className="clock-outer"
     style={{
      fontFamily: "sans-serif",
     position:"absolute",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     boxSizing: "border-box",
    /* borderRadius: "100%",
     objectFit: "cover",
     /*boxShadow: "0rem 0rem 0rem 1rem rgba(58, 11, 176, 0.4)",*/
     width: "90%",
     height: "90%"}}>
    
        <div className="inner"
         style={{
          borderRadius: "50%",
          position:"relative",
          display:"flex",
          flexDirection:"column",
          alignItems: "center",
          justifyContent: "center",
          width: "70%",
          height: "70%",
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          boxShadow: "0rem 0rem 0rem 1rem rgba(58, 11, 176, 0.7)"}}>
          <h2 className="clock-h2"
          style={{
            color: "blue",
            fontSize: "40px",
            background:"linear-gradient(to right ,red,yellow,green)",
            borderRadius:"10px"
          }}>
             Gajraj Digital Clock
        </h2>
                   <h1 style={{ color: "green", fontSize:"35px"  }}>{ctime}</h1>
        </div>
      </div>
    </>
  );
};

export default Clock
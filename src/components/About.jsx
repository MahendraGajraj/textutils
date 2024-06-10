import React, { useState } from 'react'
import Lion from './Lion';
import Elephant from './Elephant';
//import { Link } from "react-router-dom";
import Camel from './Camel';
import Cat from './Cat';
import Dog from './Dog';
import Snake from './Snake';
import Rabbit from './Rabbit';
import Cow from './Cow';
import Buffalo from './Buffalo';
import Apple from './Apple';
import Mango from './Mango';
import Banana from './Banana';
import Grapes from './Grapes';
import Orange from './Orange';
import Watermelon from './Watermelon';
import Gajraj from './Gajraj';

const About = () => {


    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState('Enable Dark mode');

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white',

            })
            setBtnText('Enable Light mode')
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText('Enable Dark mode')
        }
    }
    return (
        <>
            <div className='container my-3' style={myStyle}>
                <h1 className='my-3'>😍 𝓚𝓲𝓭𝓼 𝓖𝓮𝓷𝓮𝓻𝓪𝓵 𝓚𝓷𝓸𝔀𝓵𝓮𝓭𝓰𝓮 😍</h1>
                <div className="d-sm-flex align-items-center justify-content-between w-20" style={{ height: "50vh", marginTop: "25px" }}>
                    <div className="col-md-4 my-3 mx-auto mb-4 mb-sm-0 headline">
                        <span className="text-secondary text-uppercase"><span style={{ color: "green", fontSize: "20px" }}>🆂🅿🅴🅲🅸🅰🅻 🅵🅾🆁</span></span>
                        <h1 className="display-4 my-4 font-weight-bold color-red"> <span style={{ color: "#9B5DE5", fontSize: "25px" }}>✌𝓓𝓲𝓿𝓲𝓼𝓪,𝓞𝓳𝓪𝓼 𝓪𝓷𝓭 𝓖𝓪𝓳𝓻𝓪𝓳 𝓚𝓲𝓭𝓼✌</span></h1>
                        {/* <Link to="#" className="btn px-5 py-3 text-white mt-3 mt-sm-0" style={{ borderRadius: "30px", backgroundColor: "#9B5DE5" }}></Link>*/}
                    </div>
                    {/* <!-- in mobile remove the clippath -->*/}
                    <div className="col-md-8 h-100 clipped" style={{ minHeight: "250px", backgroundImage: "url(Photo.jpg)", backgroundPosition: "center", backgroundSize: "cover", borderRadius: "10px" }}>

                    </div>
                </div>
                <h2>Animals</h2>
                <div className="accordion accordion-flush" id="accordionFlushExample">

                    <Lion question1="Question Number-1" heading="This is a Lion"
                        question2="What is This?" myStyle={myStyle} />
                    <Elephant question1="Question Number-2" heading="This is an Elephant"
                        question2="What is This?" myStyle={myStyle} />
                    <Camel question1="Question Number-3" heading="This is a Camel"
                        question2="What is This?" myStyle={myStyle} />
                    <Cat question1="Question Number-4" heading="This is a Cat"
                        question2="What is This?" myStyle={myStyle} />
                    <Dog question1="Question Number-5" heading="This is a Dog"
                        question2="What is This?" myStyle={myStyle} />
                    <Snake question1="Question Number-6" heading="This is a Snake"
                        question2="What is This?" myStyle={myStyle} />
                    <Rabbit question1="Question Number-7" heading="This is a Rabbit"
                        question2="What is This?" myStyle={myStyle} />
                    <Cow question1="Question Number-8" heading="This is a Cow"
                        question2="What is This?" myStyle={myStyle} />
                    <Buffalo question1="Question Number-9" heading="This is a Buffalo"
                        question2="What is This?" myStyle={myStyle} />
                    <h2>Fruits</h2>
                    <Apple question1="Question Number-10" heading="This is a Apple"
                        question2="What is This?" myStyle={myStyle} />
                    <Mango question1="Question Number-11" heading="These are Mangos"
                        question2="What is This?" myStyle={myStyle} />
                    <Banana question1="Question Number-12" heading="These are Bananas"
                        question2="What is This?" myStyle={myStyle} />
                    <Grapes question1="Question Number-13" heading="These are Grapes"
                        question2="What is This?" myStyle={myStyle} />
                    <Orange question1="Question Number-14" heading="This is a Orange"
                        question2="What is This?" myStyle={myStyle} />
                    <Watermelon question1="Question Number-15" heading="This is a Watermelon"
                        question2="What is This?" myStyle={myStyle} />
                    <Gajraj question1="This Site is Made By-" heading="Mahendra Singh Gajraj" myStyle={myStyle} />
                </div>
                <div className='container my-3'>
                    <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
                </div>

            </div>
        </>
    )
}

export default About
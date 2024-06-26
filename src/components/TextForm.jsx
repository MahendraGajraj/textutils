import React, { useState } from 'react'

const TextForm = (props) => {

    const handleUpClick = () => {
        // console.log('Upper case Clicked'+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success")
    }
    const handleLoClick = () => {
        // console.log('Upper case Clicked'+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase", "success")
    }

    const handleClearTextClick = () => {
        // console.log('Upper case Clicked'+ text);
        let newText = " ";
        setText(newText)
        props.showAlert("Text cleared", "success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("copy to clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }




    const handleOnChange = (event) => {
        //console.log('onChange');
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText('new text');



    return (
        <>

            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' style={{ fontSize: "20px" }} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' style={{ fontSize: "20px" }} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' style={{ fontSize: "20px" }} onClick={handleClearTextClick}>Clear Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' style={{ fontSize: "20px" }} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' style={{ fontSize: "20px" }} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text Summary</h2>
                <p style={{ fontSize: "20px" }}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p style={{ fontSize: "20px" }}>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p style={{ fontSize: "20px" }}>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>

        </>
    )
}

export default TextForm
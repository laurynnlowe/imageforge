import React, {useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import { SketchPicker } from "react-color";
import './index.css';



const Draw = () => {

    const [color, setColor] = useState("black")
    const [colorSelect, setColorSelect] = useState(false)

    const imageRef = useRef(null)
    const brushSize = 3
    const originalImage = "https://res.cloudinary.com/dosbhyc5z/image/upload/v1660155665/robot2_caiy83.png"


    const save = () => {
        const image =  imageRef.current.canvasContainer.childNodes[1].toDataURL();
    }

    const openColorPicker = () => {
        setColorSelect(true)
    }

    const closeColorPicker = () => {
        setColorSelect(false)
    }

    return (
        <div className="drawPage">
            <h1>Draw</h1>
            <button
               onClick={openColorPicker}
            >Change color</button>
            {colorSelect && 
            (<div>
                <button onClick={closeColorPicker}>
                Close Color Picker
                </button>
                <SketchPicker 
                    color={color}
                    onChange={(color => {
                        setColor(color.hex)
                    })}
                />
            </div>)}
            <div className="canvas">
                <CanvasDraw  
                    brushColor={color}   
                    brushRadius={brushSize} 
                    hideGrid={true}
                    // imgSrc={originalImage}
                    canvasWidth={700}
                    canvasHeight={500}
                    ref={imageRef}
                />
            </div>
            <button className="saveImage"
                type="button"
                onClick={save}
            >
                Save image
            </button>
           
        </div>
    )
}

export default Draw;
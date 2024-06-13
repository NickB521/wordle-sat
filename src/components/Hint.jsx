import { useState } from "react"

const Hint = (props) => {
    const [show, setShow] = useState(false);
    console.log(props.def)

    const handleClick = () => {
        if(!show){
            setShow(true)
        }else{setShow(false)}
    }


    return(
        <div>
            <button onClick={handleClick}>{show ? props.def : "Hint"}</button>
        </div>
    )
}

export default Hint;
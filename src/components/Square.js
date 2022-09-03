import React from "react";

export default function Square(props) {
    const [value, setValue] = React.useState()
    const [mutate, setMutate] = React.useState(false)

    function handleClick() {
        if(!mutate) {
            setMutate(true)
            if(props.turnX) {
                setValue("X")
                props.setValues((prev) => {
                    prev[props.orderValue]="X"
                    return prev
                })
                props.setTurnX(prev => !prev)
            } else{
                props.setValues((prev) => {
                    prev[props.orderValue]="O"
                    return prev
                })                
                setValue("O")
                props.setTurnX(prev => !prev)
            }
        }
    }
    
    return (
        <div turnX={props.turnX} className="square" onClick={handleClick}>{value}</div>
    )
}
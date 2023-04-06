import React, { useState } from 'react'
import{ CounterButtonStyle, CounterSpanStyle} from './CounterStyles'
import{AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { CounterContainerStyle } from './CounterStyles'
const Counter = () => {
    const [count, setcount] = useState(0) 
    const handleDecrement = () =>{
     setcount(count > 0? count - 1 : 0)
    }
    const handleIncrement = ()=>{
      setcount(count + 2)
    }
    return (
    <CounterContainerStyle>
        <CounterButtonStyle left onClick={handleDecrement}>
             <AiOutlineMinusCircle size=" 32px" color='white'/>
        </CounterButtonStyle>
        
        <CounterSpanStyle>{count}</CounterSpanStyle>

        <CounterButtonStyle right onClick={handleIncrement}>
              <AiOutlinePlusCircle size=" 32px" color='white'/>
        </CounterButtonStyle>
    </CounterContainerStyle>
  )
}

export default Counter
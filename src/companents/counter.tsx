import { useEffect, useState } from "react";


const Counter = () => {

    const [count , setCount] =useState(0);
    const [countM , setCountM] =useState(0);

    const seconds =() => {
        setCount(count + 1);
    }

    const mientus =() => {
        setCountM(countM + 1);
    }

    useEffect(() => {
       const interval = setInterval(() => seconds() , 1000);

        return () => {
            clearInterval(interval);

            if(count == 60) {
                mientus();
                setCount(0)
            }
        }
    } , [count])

    return (
        <>
         { parseFloat(countM.toString())} : { parseFloat(count.toString())}
       </>
    )
}

export default Counter;
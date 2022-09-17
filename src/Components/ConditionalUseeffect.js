import React, {useState, useEffect} from 'react'

function ConditionalUseeffect() {
    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);

    useEffect(()=>{
        console.log("data called",+ data)
    },[data]);

    useEffect(()=>{
        console.log("count called",+ count)
    },[count]);

  return (
    <div>
        <h1>count props: {count}</h1>
        <h1>Data props: {data}</h1>
        <button onClick={()=>setCount(count+1)}>set count</button>
        <button onClick={()=>setData(data+1)}>set data</button>
    </div>
  )
}

export default ConditionalUseeffect
import React, {useEffect} from 'react';

let renderCount = 0;
function Memo(){
    useEffect(()=>{
        renderCount ++;
    })
    return <div>rendercount: {renderCount} </div>
}

export default Memo;
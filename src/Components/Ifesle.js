import React, { useState } from 'react'

function Ifesle() {

    const [loggedIn, setLoggedIn] = useState(2);
    
  return (
    <div>
        {loggedIn==1 ? <p>Welcome user 1</p> :loggedIn==2 ? <p>Welcome user 2</p> : <p>Welcome Guest</p>}
    </div>
  )
}

export default Ifesle
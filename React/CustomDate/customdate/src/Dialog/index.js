import React from 'react'

import './style.css'

const Dialog = ({open, handleClose, children}) => {
    return open ? <div className='dialogConatiner'>
        <div className='dialogBox'>
            <button onClick={handleClose} className='close'>X</button>
            {children}
        </div>
    </div> : null
}

export default Dialog;
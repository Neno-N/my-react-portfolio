import { RiCloseFill } from '@remixicon/react';

interface Popup {
    showPopup: boolean,
    handlePopup: any,
    children: any
}
const Popup = ({showPopup,handlePopup,children}:Popup) => {
  return (
    <div className={showPopup ? 'popup show' : 'popup hide'}>
        <button className='btn' onClick={()=>handlePopup()}><RiCloseFill/></button>
        {children}
    </div>
  )
}

export default Popup
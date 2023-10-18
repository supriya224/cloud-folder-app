import React from 'react'
// import { ShowToastContext } from '../context/ShowToastContext';

function Toast() {
    // const {showToastMsg,setShowToastMsg}
    // =useContext(ShowToastContext)
    // useEffect(()=>{
    //     setInterval(()=>{
    //         setShowToastMsg(null);
    //     },3000 )
    // },[showToastMsg])
  return (
    <div className="toast toast-top toast-end">
    <div className="alert alert-info">
      <span>New mail arrived.</span>
    </div>
    <div className="alert alert-success">
      <span>Message sent successfully.</span>
    </div>
  </div>
  )
}

export default Toast

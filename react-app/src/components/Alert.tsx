import { ReactNode, useState } from "react"

interface Props{
    children: ReactNode,
    onClose: ()=>void
}

const Alert = ({children, onClose}: Props) => {
  return (
    <>
    <div className="alert alert-primary text-center alert-dismissible" role="alert">
        {children}
        <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    {/* <div className="alert alert-secondary text-center" role="alert">
        {children}
      </div>
    <div className="alert alert-danger text-center" role="alert">
        {children}
      </div> */}
      </>
  )
}

export default Alert

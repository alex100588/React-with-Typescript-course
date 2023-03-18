import { ReactNode } from "react"

interface Props{
    children: ReactNode,
}

const Alert = ({children}: Props) => {
  return (
    <>
    <div className="alert alert-primary text-center" role="alert">
        {children}
      </div>
    <div className="alert alert-secondary text-center" role="alert">
        {children}
      </div>
    <div className="alert alert-danger text-center" role="alert">
        {children}
      </div>
      </>
  )
}

export default Alert
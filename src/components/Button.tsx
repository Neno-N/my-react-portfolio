interface Button {
    text?:string
    icon?:any
    link?:string
    target?:string
    type?:any
    handleFunction?:any
}
const Button = ({text, link, target, icon, handleFunction, type}:Button) => {
  return (
    link ? 
    <a href={link} className="btn" target={target ? target : '_self'} rel="noreferrer">
      <span >
        {text && text}
        {icon && icon}
      </span>
    </a> : 
    <button type={type ? type : 'button'} onClick={()=>handleFunction} className="btn" >
      <span >
        {text && text}
        {icon && icon}
      </span>
    </button>
  )
}

export default Button
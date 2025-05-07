import { Link } from 'react-router-dom'
import './Button.css'

function Button({ text, variant = 'primary', to }) {
  return (
    <Link href={to} className={`btn btn--${variant}`}>
      {text}
    </Link>
  )
}

export default Button
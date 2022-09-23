import { Link } from 'react-router-dom'
import '../styles/Navigation.css'

function Navigation() {
  return (
    <nav>
        <Link to={'/'}>Food tracker</Link>
        <div className='nav-links'>
            <Link to={'/rejestracja'}>Rejestracja</Link>
            <Link to={'/login'}>Zaloguj</Link>
        </div>
    </nav>
  )
}

export default Navigation
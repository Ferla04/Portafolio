import { routes } from '../../constants'
import { NavbarItem } from './NavbarItem'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        {
          routes.map(route =>
            <NavbarItem key={route.id} {...route} />
          )
        }
      </ul>
    </nav>
  )
}

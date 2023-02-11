
export const NavbarItem = ({ name, id, icon }) => {
  return (
    <li className='nav-item'>
      <a href={`#${id}`} className='nav-link'>
        <i className={`link-icon fa-solid ${icon}`} />
        <span className='link-text'>{name}</span>
      </a>
    </li>
  )
}

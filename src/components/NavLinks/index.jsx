import { Link } from "react-router-dom"

const NavLinks = ({users}) => {
  return <div>
    <ul className="menu bg-base-100 w-56">
      <li><Link to="/">Accueil</Link></li>
      <li className="bordered"><Link to={`/${users[0].id}`}>Profil</Link></li>
      {users[0].role === ("member" || "admin") &&
        <>
        <li><Link to="/member/instuments">Instruments</Link></li>
        <li><Link to="/member/suits">Costumes</Link></li>
        <li><Link to="/member/users">Gestion des adhérents</Link></li>
        </>
      }
    </ul>
  </div>
}

export default NavLinks

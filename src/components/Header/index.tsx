import React from 'react'
import { Nav } from "react-bootstrap"
import { Link }  from 'react-router-dom'

const Header: React.FC = () => {
  return <nav className="navbar navbar-expand-sm bg-dark navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Nav.Item as = {Link} className="nav-link text-light" to = "/">Inicio</Nav.Item>
            </li>
            <li className="nav-item" >
              <Nav.Item as = {Link} className="nav-link text-light" to = "/tarefas">Tarefas</Nav.Item>
            </li>    
          </ul>
        </nav>
      }

export default Header;
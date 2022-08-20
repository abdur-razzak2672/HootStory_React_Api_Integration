import React from 'react'
import { Nav } from 'react-bootstrap'

function Header() {
  return (
    <>
      <Nav className="justify-content-center bg-dark text-light" variant = 'light' activeKey="/home">
        <Nav.Item>
          <Nav.Link className = "text-light" href="/home"><h3>HootStroy</h3></Nav.Link>
        </Nav.Item>
      </Nav>   
    </>
  )
}

export default Header

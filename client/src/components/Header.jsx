import React from "react"
import logo from "./assets/vite.svg"

export default function Header() {
  return (
    <nav className="navbar bg-dark mb-4 py-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>ProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  )
}

import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className='header d-flex flex-row justify-content-between'>
        <Link to='/'>
        <img className='logo-pcf' src="/pcf.png" Video Aulasalt="asd"></img>
        </Link>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse bg-semi" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto  mb-lg-0 mr-5">
                <li className="nav-item">
                  <Link className="nav-link" to="/agende-ja">Agende já</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/follow-us">Acompanhe nossas localidades</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">Quem somos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
    )
  }
}
import React, { FC } from 'react';
import EsrogImage from '../../assets/images/esrog.png';

const Header: FC = () => {

  const routes = [
    {
      title: 'New Order',
      route: '/',
    },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={ EsrogImage } width="35" height="35" className="d-inline-block align-top" alt=""/>
      <span className="navbar-brand mb-0 h1">Esrog Shuk, hello Adam!</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          { routes.map((route, index) => (
            <a className="nav-item nav-link" href={ route.route } key={ `route-${ index }` }>{ route.title }</a>
          )) }
        </div>
      </div>
    </nav>
  )
}

export default Header;

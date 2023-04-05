import React from 'react';

function Header() {
  return (
    <nav className="navbar header">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="logodiv">
            <img
              className="logoElement"
              src="https://cdn-icons-png.flaticon.com/512/5125/5125100.png"
              alt="logo"
              width="30"
              height="26"
            />
            <p className="logotext">Dogiegram</p>
          </div>
        </a>
        <div className="emptySpace" />
        <div className="Signin">
          <a href="/auth">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt,react/button-has-type */}
            <button className="btn btn-outline-warning signInButton">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img
                className="buttonImg"
                src="https://cdn-icons-png.flaticon.com/512/5125/5125078.png"
                alt="Sign-in Image"
                width="30"
                height="26"
              />
              Login
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;

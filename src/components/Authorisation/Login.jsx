// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Login(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin(email, pass);
  };

  return (
    <form>
      <div className="mainForRegistration">
        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
          <button
            className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
            id="bd-theme"
            type="button"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            aria-label="Toggle theme (auto)"
          >
            <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
              <use href="#circle-half" />
            </svg>
            <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
            <li>
              <button
                type="button"
                className="dropdown-item d-flex align-items-center"
                data-bs-theme-value="light"
                aria-pressed="false"
              >
                <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
                  <use href="#sun-fill" />
                </svg>
                Light
                <svg className="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2" />
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item d-flex align-items-center"
                data-bs-theme-value="dark"
                aria-pressed="false"
              >
                <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
                  <use href="#moon-stars-fill" />
                </svg>
                Dark
                <svg className="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2" />
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item d-flex align-items-center active"
                data-bs-theme-value="auto"
                aria-pressed="true"
              >
                <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
                  <use href="#circle-half" />
                </svg>
                Auto
                <svg className="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <main className="form-signin w-100 m-auto">
          <form>
            <img
              className="mb-4"
              src="https://cdn-icons-png.flaticon.com/512/5125/5125100.png"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal AuthFormText">Please sign in</h1>

            <div className="form-floating">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <br />
            <button onClick={handleSubmit} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="signinLinkp">
              Don&apos;t have an account yet?
              <NavLink to="/register" className="nav-link"><span className="signinLink">Sign up!</span></NavLink>
            </p>
          </form>
        </main>
      </div>
    </form>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Login;

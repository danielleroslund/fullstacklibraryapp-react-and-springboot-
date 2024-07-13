import { Link, NavLink } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

export const Footer = () => {
  const { authState } = useOktaAuth();

  return (
    <div className="main-color">
      <footer className="container-fluid py-5 main-color">
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
          <p className="col-12 text-center mb-3 text-white">@ CodeLibrary, Inc</p>
          <ul className="nav navbar-dark col-12 justify-content-center">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link px-2 text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/search" className="nav-link px-2 text-white">
                Search Books
              </NavLink>
            </li>
            {authState?.isAuthenticated && (
              <li className="nav-item">
                <NavLink className="nav-link px-2 text-white" to="/shelf">
                  Shelf
                </NavLink>
              </li>
            )}
            {authState?.isAuthenticated && (
              <li className="nav-item">
                <NavLink className="nav-link px-2 text-white" to="/fees">
                  Pay fees
                </NavLink>
              </li>
            )}
            {authState?.isAuthenticated && authState.accessToken?.claims?.userType === 'admin' && (
              <li className="nav-item">
                <NavLink className="nav-link px-2 text-white" to="/admin">
                  Admin
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </footer>
    </div>
  );
};

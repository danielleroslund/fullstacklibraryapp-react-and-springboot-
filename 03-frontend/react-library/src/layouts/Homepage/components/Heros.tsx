import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const Heros = () => {

  const { authState } = useOktaAuth();

  return (
    <div>
      {/* Desktop Heros */}
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5 custom-container">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1 className="custom-heading">Share Your Reading Adventures</h1>
              <p className="lead">
                Dive into the world of technology and innovation with us! Share your latest reads and discoveries with the Library team.
                Whether you're mastering a new programming language or exploring cutting-edge technologies,
                we're here to curate the best content for your journey!
              </p>
              {authState?.isAuthenticated ? 
                <Link type='button' className='btn main-color btn-lg text-white custom-button-dark' to='search'>Explore top books</Link> : 
                <Link className='btn main-color btn-lg text-white custom-button-dark' to='/login'>Sign up</Link>
              }
            </div>
          </div>
        </div>
        <div className="row g-0 custom-container">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1 className="custom-heading">Our collection is always changing!</h1>
              <p className="lead">
                Our collection is constantly being updated to provide you with the best and most current books.
                We work tirelessly to curate a precise selection, ensuring our book collection always meets your reading needs.
                Providing top-quality books is our highest priority.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* Mobile Heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="row g-0 mt-4">
            <div className="col-12">
              <div className="col-image-left"></div>
              <div className="mt-2">
                <h1 className="custom-heading">Share Your Reading Adventures</h1>
                <p className="lead">
                  Dive into the world of technology and innovation with us! Share your latest reads and discoveries with the Library team.
                  Whether you're mastering a new programming language or exploring cutting-edge technologies,
                  we're here to curate the best content for your journey!
                </p>
                {authState?.isAuthenticated ? 
                  <Link type='button' className='btn main-color btn-lg text-white custom-button-dark' to='search'>Explore top books</Link> : 
                  <Link className='btn main-color btn-lg text-white custom-button-dark' to='/login'>Sign up</Link>
                }
              </div>
            </div>
          </div>
          <div className="row g-0 mt-4">
            <div className="col-12">
              <div className="col-image-right"></div>
              <div className="mt-2">
                <h1 className="custom-heading">Our collection is always changing!</h1>
                <p className="lead">
                  Our collection is constantly being updated to provide you with the best and most current books.
                  We work tirelessly to curate a precise selection, ensuring our book collection always meets your reading needs.
                  Providing top-quality books is our highest priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

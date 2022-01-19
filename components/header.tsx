import Link from 'next/link'
import logo from '../public/port-logo.png'
import { Button, Navbar } from 'react-bulma-components';
import Image from 'next/image';

function Header() {
    return (
        <div className='Header'>
            <Navbar transparent={true}>
              <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  <Image
                      src={logo}
                      alt="Samuel Abera Logo"
                      layout="intrinsic"
                  />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <Button color="black">
                        <a>
                          <strong>Contact</strong>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Navbar>
        </div>
    )
}

export default Header;
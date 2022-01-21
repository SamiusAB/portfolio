import Link from 'next/link'
import logo from '../public/port-logo.png'
import { Button, Navbar } from 'react-bulma-components';
import Image from 'next/image';

function Footer() {
    return (
        <footer className="footer is-transparent">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    )
}

export default Footer;
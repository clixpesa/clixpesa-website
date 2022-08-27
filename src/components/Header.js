import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby";
import Navigation from './Navigation';
import OverlayMenu from './OverlayMenu';
import Logo from '../images/logo.svg'


export default function Header({ siteTitle }) {
  return (

    <div className='bg-teal-50 border-b'>
      <div className="px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Clixpesa"
            title="Clixpesa"
            className="inline-flex items-center"
          >
            <img src={Logo} alt="clixpesa" className='h-8 w-auto md:h-10' />
          </Link>
          <Navigation />
          <OverlayMenu />
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
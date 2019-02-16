import React from 'react'
import { useLocation } from 'react-use';
import Presentation from './Presentation';

const links = {
  default: [
    {
      path: '/',
      name: <span>inicio</span>,
    },
    {
      path: '/nosotros',
      name: <span>nosotros</span>,
    },
    {
      path: '/servicios',
      name: <span>servicios</span>,
    },
    {
      path: '/portafolio',
      name: <span>portafolio</span>,
    },
    {
      path: '/',
      hash: 'contacto',
      name: <span>contacto</span>,
    },
  ],
  en: [{
    path: '/',
    name: <span>home</span>,
  },
  {
    path: '/nosotros',
    name: <span>about</span>,
  },
  {
    path: '/servicios',
    name: <span>services</span>,
  },
  {
    path: '/portafolio',
    name: <span>portfolio</span>,
  },
  {
    path: '/',
    hash: 'contacto',
    name: <span>contact</span>,
  },]
};

function hasLanguagePrefix(string) {
  return string.startsWith('/en/') || string === "/en";
}

function NavbarContainer(props) {
  const location = useLocation();
  const { pathname } = location;
  const language = hasLanguagePrefix(pathname) ? "en" : "es";
  
  const localizedLinks = language === 'en' ? links.en : links.default;
  console.table(localizedLinks);

  return <Presentation links={localizedLinks} {...props} />;
}

export default NavbarContainer
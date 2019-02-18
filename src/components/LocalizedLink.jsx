import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import 'string.prototype.startswith';

function hasLanguagePrefix(string) {
  return string.startsWith('/en/') || string === "/en";
}

function stripPrefix(string) {
  return string.startsWith('/en') ? string.substr(0, 3) : string;
}

function LocalizedLink(props) {
  const { children, location, to, ...rest } = props;
  const { pathname } = location;

  const nextLocation = stripPrefix(to);
  const routePrefix = hasLanguagePrefix(pathname) ? "/en" : "";

  return (
    <Link to={routePrefix + nextLocation} {...rest}>
      {children}
    </Link>
  );
}

export default props => (
  <Location>
    {({location}) => (
      <LocalizedLink location={location} {...props} />
    )}
  </Location>
);

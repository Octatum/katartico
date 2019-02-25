import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import { hasLanguagePrefix, stripPrefix } from '../utilities/functions';

function LocalizedLink(props) {
  const { children, location, to, ...rest } = props;
  const { pathname } = location;

  const nextLocation = stripPrefix(to);
  console.log(nextLocation);
  const routePrefix = hasLanguagePrefix(pathname) ? '/en' : '';

  return (
    <Link to={routePrefix + nextLocation} {...rest}>
      {children}
    </Link>
  );
}

export default props => (
  <Location>
    {({ location }) => <LocalizedLink location={location} {...props} />}
  </Location>
);

import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { localizePath, useAppLanguage } from '../../utils/localeRouting';

/**
 * Drop-in replacement for React Router <Link> that preserves the active
 * language URL prefix (/fr, /es, /de, /ar) while keeping English at root.
 */
export const LocalizedLink: React.FC<LinkProps> = ({ to, ...rest }) => {
  const lang = useAppLanguage();
  const resolvedTo = typeof to === 'string' ? localizePath(to, lang) : to;
  return <Link to={resolvedTo} {...rest} />;
};

export default LocalizedLink;

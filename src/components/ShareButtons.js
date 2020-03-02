import React, { Fragment } from 'react';

import {
  FaEnvelope,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

// A module for making buttons to share the project
// The module is right now used on the frontpage but could be modified for other places

const ShareButtons = () => (
  <Fragment>
    {[
      // LinkedIn
      {
        href:
          'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.borgerforslag.dk%2Fse-og-stoet-forslag%2F%3FId%3DFT-02233',
        icon: FaLinkedin,
        color: '#2867B2',
      },
      // Facebook
      {
        href:
          'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.borgerforslag.dk%2Fse-og-stoet-forslag%2F%3FId%3DFT-02233',
        icon: FaFacebookSquare,
        color: '#4267B2',
      },
      // Twitter
      {
        href:
          'https://twitter.com/share?url=https%3A%2F%2Fwww.borgerforslag.dk%2Fse-og-stoet-forslag%2F%3FId%3DFT-02233&text=Dansk%20klimalov%20nu',
        icon: FaTwitter,
        color: '#1DA1F2',
      },
      // Email
      {
        href:
          'mailto:??subject=Borgerforslag&body=Hej%0D%0A%0D%0ATjek det her borgerforslag: https://www.borgerforslag.dk/se-og-stoet-forslag/?Id=FT-02233',
        icon: FaEnvelope,
        color: '#ca2026',
      },
    ].map(Share => (
      <a
        href={Share.href}
        target="_blank"
        rel="noopener noreferrer"
        key={Share.href}
        style={{
          margin: '0 0.5em',
          padding: '0.5em 1em 0.4em',
          backgroundColor: Share.color,
        }}
      >
        <Share.icon
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: '0.3em',
            position: 'relative',
            top: '-0.1em',
          }}
        />
        Del
      </a>
    ))}
  </Fragment>
);

export default ShareButtons;

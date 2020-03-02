import React from 'react';

import {
  FaEnvelope,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const buttons = [
  {
    href:
      'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.borgerforslag.dk%2Fse-og-stoet-forslag%2F%3FId%3DFT-02233',
    icon: FaLinkedin,
    text: 'LinkedIn',
  },
  {
    href:
      'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.borgerforslag.dk%2Fse-og-stoet-forslag%2F%3FId%3DFT-02233',
    icon: FaFacebookSquare,
    text: 'Facebook',
  },
  {
    href:
      'https://twitter.com/share?url=https%3A%2F%2Fwww.borgerforslag.dk%2Fse-og-stoet-forslag%2F%3FId%3DFT-02233&text=Dansk%20klimalov%20nu',
    icon: FaTwitter,
    text: 'Twitter',
  },
  {
    href:
      'mailto:??subject=Borgerforslag&body=Hej%0D%0A%0D%0ATjek det her borgerforslag: https://www.borgerforslag.dk/se-og-stoet-forslag/?Id=FT-02233',
    icon: FaEnvelope,
    text: 'E-mail',
  },
];

const ShareButtons = () => (
  <div className="flex items-center justify-center flex-wrap text-white">
    {buttons.map(share => (
      <a
        href={share.href}
        target="_blank"
        rel="noopener noreferrer"
        key={share.href}
        className="flex items-center mx-4 my-2 sm:my-4 opacity-75 hover:opacity-100 hover:underline"
      >
        <share.icon
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: '0.3em',
            position: 'relative',
            top: '-0.1em',
          }}
        />
        <span>{share.text}</span>
      </a>
    ))}
  </div>
);

export default ShareButtons;

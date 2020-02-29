import React from 'react';
import { Link } from 'gatsby';

const LinkStyle =
  'font-bold block my-2 md:my-6 hover:text-green-300 transition ease-in-out duration-200';

const Footer = () => (
  <div className="bg-green-900 text-green-500">
    <div className="py-8 md:py-24 px-8 md:max-w-5xl mx-auto">
      <div className="md:flex -mx-8">
        <div className="md:w-1/3 m-8">
          <Link className={LinkStyle} to="/">
            Hjem
          </Link>
          <Link className={LinkStyle} to="/about-the-plan">
            Om planen
          </Link>
          <Link className={LinkStyle} to="/about-us">
            Bag planen
          </Link>
          <Link className={LinkStyle} to="/privacy-policy">
            Cookie- og privatlivspolitik
          </Link>
        </div>
        <div className="md:w-1/3 m-8">
          <a
            className={LinkStyle}
            href="https://www.klimabevaegelsen.dk/"
            target="blank"
          >
            Klimabevægelsen
          </a>
          <a className={LinkStyle} href="https://www.dgsb.dk/" target="blank">
            Den Grønne Studenter Bevægelse
          </a>
          <a
            className={LinkStyle}
            href="https://citizensclimatelobby.org/"
            target="blank"
          >
            Citizen&apos;s Climate Lobby
          </a>
        </div>
        <div className="md:w-1/3 m-8">
          <a
            className={LinkStyle}
            href="mailto:kontakt@verdensbedsteklimaplan.dk"
          >
            kontakt@verdensbedsteklimaplan.dk
          </a>
        </div>
      </div>
      <p className="opacity-50 text-center mt-6">
        &copy; Verdens Bedste Klimaplan 2020
      </p>
    </div>
  </div>
);

export default Footer;

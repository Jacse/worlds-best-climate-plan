import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <div className="bg-gray-200">
    <div className="container p-8 md:max-w-4xl mx-auto">
      <div className="flex -mx-4">
        <div className="w-1/6 md:w-1/3 m-4">
          <h4 className="font-bold uppercase tracking-wide text-gray-800">
            Navigation
          </h4>
          <Link className="block my-2" to="/">
            Hjem
          </Link>
          <Link className="block my-2" to="/about-the-plan">
            Om planen
          </Link>
          <Link className="block my-2" to="/about-us">
            Bag planen
          </Link>
          <Link className="block my-2" to="/privacy-policy">
            Cookie- og privatlivspolitik
          </Link>
        </div>
        <div className="w-1/6 md:w-1/3 m-4">
          <h4 className="font-bold uppercase tracking-wide text-gray-800">
            Organisationer
          </h4>
          <a
            className="block my-2"
            href="https://www.klimabevaegelsen.dk/"
            target="blank"
          >
            Klimabevægelsen
          </a>
          <a className="block my-2" href="https://www.dgsb.dk/" target="blank">
            Den Grønne Studenter Bevægelse
          </a>
          <a
            className="block my-2"
            href="https://citizensclimatelobby.org/"
            target="blank"
          >
            Citizen&apos;s Climate Lobby
          </a>
        </div>
        <div className="w-1/6 md:w-1/3 m-4">
          <h4 className="font-bold uppercase tracking-wide text-gray-800">
            Kontakt
          </h4>
          <a
            className="block my-2"
            href="mailto:kontakt@verdensbedsteklimaplan.dk"
          >
            kontakt@verdensbedsteklimaplan.dk
          </a>
        </div>
      </div>
      <p className="opacity-50 text-center">
        &copy; Verdens Bedste Klimaplan 2020
      </p>
    </div>
  </div>
);

export default Footer;

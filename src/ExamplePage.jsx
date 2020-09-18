/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import ColorContrast from './components/ColorContrast';
import IntroCard from './components/IntroCard';
import MorphButton from './components/MorphButton';
import HeaderOrganization from './components/HeaderOrganization';
import Justified from './components/ExcessivelyJustified';
import InnerSiteFooter from './components/Footer_bad';
import ExampleAbout from './components/ExampleAbout';

export default function ExamplePage() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div className="innerHeader">
        <header>
          <h1>Why Accessibility?</h1>
        </header>
        <div>
          <ul>
            <li>
              <button
                onClick={() => {
                  setIsClicked(false);
                }}
                className="plain-button"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsClicked(true);
                }}
                className="plain-button"
              >
                About
              </button>
            </li>
          </ul>
        </div>
      </div>
      {!isClicked && (
        <div id="innerMain">
          <IntroCard />
          <ColorContrast />
          <MorphButton />
          <HeaderOrganization />
          <Justified />
        </div>
      )}

      {isClicked && <ExampleAbout />}
      <InnerSiteFooter />
    </div>
  );
}

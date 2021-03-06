import React, { useState } from 'react';
import { useMorph } from 'react-morph';

export default function HeaderOrganization() {
  const [toggle, setToggle] = useState(true);

  const morph = useMorph();

  return (
    <div className="cards">
      <button className="morph-button" onClick={() => setToggle(!toggle)}>
        {toggle ? 'Make it accessible!' : 'Make it inaccessible...'}
      </button>
      <div className="cardsBody">
        {toggle && (
          <button className="bad-org bg" {...morph}>
            <h3>Page Structure</h3>
            <h2>Why are headings important?</h2>
            <h1>
              Headings communicate the organization of the content on the page. Assistive
              technologies, such as screen readers, can use them to provide in-page navigation.
            </h1>
          </button>
        )}
        {!toggle && (
          <button className="good-org bg" {...morph}>
            <h1>Page Structure</h1>
            <h2>Why are headings important?</h2>
            <h3>
              Headings communicate the organization of the content on the page. Assistive
              technologies, such as screen readers, can use them to provide in-page navigation.
            </h3>
          </button>
        )}
      </div>
    </div>
  );
}

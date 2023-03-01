import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Interest from "../components/Research/Interest";

import References from "../components/Resume/References";

import Selected from "../components/publication/Selected";

import selected from "../data/publication/selected";
import interest from "../data/research/interest";



const sections = ["Selected", "Interest", "References"];

const Publication = () => (
  <Main title="Publication" description="Elvan Ceyhan's Publication">
    <article className="post" id="publication">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="publication">Publication</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Interest data={interest}></Interest>
      <Selected data={selected}></Selected>
      <References />
    </article>
  </Main>
);

export default Publication;

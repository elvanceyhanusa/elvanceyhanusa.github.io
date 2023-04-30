import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Interest from "../components/Research/Interest";
import Honor from "../components/Research/Honor";
import Funding from "../components/Research/funding";

import interest from "../data/research/interest";
import honor from "../data/research/honor";
import funding from "../data/research/funding";

const sections = ["Interest", "Honor", "Funding"];

const Research = () => (
  <Main title="Research" description="Elvan Ceyhan's Research">
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="research">Research</Link>
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

      <Interest data={interest} />
      <Funding data={funding} />
      <Honor data={honor} />
    </article>
  </Main>
);

export default Research;

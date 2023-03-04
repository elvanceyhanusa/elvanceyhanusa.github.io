import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Selected from "../components/publication/Selected";

import selected from "../data/publication/selected";

import Paper from "../components/publication/Paper";
import paper from "../data/publication/paper";

import misc from "../data/publication/misc";
import Misc from "../components/publication/Misc";

const sections = ["Selected", "Paper", "Misc"];

const Publication = () => (
  <Main title="Publication" description="Elvan Ceyhan's Publication">
    <article className="post" id="publication">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="publication">Publication</Link>
          </h2>
          <div className="publication-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>

      <Selected data={selected}></Selected>
      <Paper data={paper}></Paper>
      <Misc data={misc}></Misc>
    </article>
  </Main>
);

export default Publication;

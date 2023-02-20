import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Interest from "../components/Research/Interest";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";
import Courses from "../components/Resume/Courses";
import References from "../components/Resume/References";

import courses from "../data/resume/courses";
import interest from "../data/research/interest";
import positions from "../data/resume/positions";
import { skills, categories } from "../data/resume/skills";

const sections = ["Interest", "Experience", "Skills", "Courses", "References"];

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
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />
    </article>
  </Main>
);

export default Research;

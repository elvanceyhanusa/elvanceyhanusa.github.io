import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Student from "../components/Service/Student";
import Editorial from "../components/Service/Editorial";
import Professional from "../components/Service/Professional";
import Organizational from "../components/Service/Organizational";
import Refereeing from "../components/Service/Refereeing";
import Membership from "../components/Service/Membership";

import student from "../data/service/student";
import editorial from "../data/service/editorial";
import professional from "../data/service/professional";
import organizational from "../data/service/organizational";
import refereeing from "../data/service/refereeing";
import membership from "../data/service/membership";

const sections = ["Student", "Editorial", "Professional", "Organizational", "Refereeing"];

const Service = () => (
  <Main title="Service" description="Elvan Ceyhan's Service">
    <article className="post" id="service">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="service">Service</Link>
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
      <Student data={student} />
      <Editorial data={editorial} />
      <Professional data={professional} />
      <Organizational data={organizational} />
      <Refereeing data={refereeing} />
      <Membership data={membership} />
    </article>
  </Main>
);

export default Service;

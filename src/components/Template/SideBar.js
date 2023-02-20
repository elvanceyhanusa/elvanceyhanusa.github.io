import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Elvan Ceyhan</h2>
        <p>
          <a href="mailto:ceyhan@auburn.edu ">ceyhan@auburn.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m <b>Elvan Ceyhan</b>. Experienced Research Associate Professor with a demonstrated history of
        working in the research industry. Skilled in Statistics, Research, Mathematical Modeling, R Software, LaTeX, and
        Data Analysis. Strong community and social services professional with a Doctor of Philosophy (PhD) focused in
        Applied Mathematics and Statistics from The Johns Hopkins University.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Elvan Ceyhan <Link to="/">Elvan Ceyhan.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;

import React from "react";
import "./assets/css/main.css";
import "./assets/css/noscript.css";
import "./assets/css/fontawesome-all.min.css";

const App = () => {
  return (
    <div id="page-wrapper">
      <div id="wrapper">
        {/* Panel (Banner) */}
        <section className="panel banner right">
          <div className="content color0 span-3-75">
            <h1 className="major">
              Hello, my name
              <br />
              is Ashma Garg
            </h1>
            <p>
              I'm a Software Developer with 2 years of experince in Web
              Development where I've worked on ReactJS, TypeScript, CSS, SCSS,
              Python, NodeJS, FastAPI, MongoDB and SQL. I love to take on
              challenges and prove out to be the one who can do difficult tasks
              and still meet deadlines not only in corporate world but also in
              real life scenarios. I like to incorporate myself with new
              thoughts and ideas so that I'm open to entrepreneurship
              characteristics and can think of something out of the box.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="#first"
                  className="button primary color1 circle icon solid fa-angle-right"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
          <div className="image filtered span-1-75" data-position="35% 25%">
            <img src="\images\gallery\fulls\ashma.png" alt="" />
          </div>
        </section>

        {/* Panel (Spotlight) */}
        <section className="panel spotlight medium right" id="first">
          <div className="content span-7">
            <h2 className="major">Tripesto</h2>
            <p>
              This is an <strong>trip handling website </strong>on which I've
              started working and will be continuing the work until it's
              completed. Started on a vague idea of users uploading trips and
              managing it. Now leading to a way where it can be explored more
              and can be used as a business idea in fututre.
              <p>
                <strong>Take a visit: </strong>
                <a href="https://tripesto.vercel.app/" target="_blank">
                  https://tripesto.vercel.app/{" "}
                </a>
              </p>
              <p>
                <strong>Github repositories links:</strong>
                <p>
                  Frontend Link:{" "}
                  <a
                    href="https://github.com/Ashma-Garg/wonderpla"
                    target="blank"
                  >
                    https://github.com/Ashma-Garg/wonderpla
                  </a>
                  <br />
                  Backend Link:{" "}
                  <a
                    href="https://github.com/Ashma-Garg/wonderpla-api"
                    target="blank"
                  >
                    https://github.com/Ashma-Garg/wonderpla-api
                  </a>
                </p>
              </p>
            </p>
          </div>
          <div
            className="image filtered tinted"
            // data-position="top left"
          >
            <img
              style={{
                width: "35%",
                height: "80%",
                marginTop: "5%",
                marginLeft: "1%",
              }}
              src="/images/gallery/fulls/tripesto.png"
              alt=""
            />
          </div>
        </section>

        {/* Panel */}
        <section className="panel color1">
          <div className="intro joined">
            <h2 className="major">Tripesto Packages</h2>
            <p>
              A self made library for specifically Tripesto reusable components
              using Storybook. It helped me to use Storybook for documentation
              as well as exporting those components and making them customizable
              as much as possible. Same as project this is also in progress.
            </p>
            <p>
              Github:{" "}
              <a
                href="https://github.com/Ashma-Garg/wonderpla-packages"
                target="_blank"
              >
                https://github.com/Ashma-Garg/wonderpla-packages
              </a>
            </p>
            <span>
              Library: @ashma-garg/tripesto-packages at 0.0.01 version
            </span>
          </div>
          <div className="inner">
            <ul className="grid-icons three">
              <li>
                <span className="icon fa-calendar">Calender</span>
              </li>
              <li>
                <span className="icon solid fa-hamburger">Navbar</span>
              </li>
              <li>
                <span className="icon solid fa-icons">Cutomized Icons</span>
              </li>
              <li>
                <span className="icon solid fa-code">Add Element</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Panel (Spotlight) */}
        <section className="panel spotlight large left">
          <div className="content span-5">
            <h2 className="major">Digicare</h2>
            <p>
              When everything is at tips of our finger in today's generation
              then why to stop for medical help. The reason behing this web
              application was to reach out as many people as we can who seek
              remote consultation and advice from doctors. Also, the prime aim
              of this web application was to record constants of patients and
              send real time data to doctors so that in case of any emergency
              doctors can call for help on their patient's behalf.
            </p>
            <p>
              Video link:{" "}
              <a
                href="https://drive.google.com/file/d/1OsRaSaNFu-mR0Ke0WmhRY5LUya26ZadS/view?usp=sharing"
                target="blank"
              >
                Digicare
              </a>
            </p>
          </div>
          <div className="image filtered tinted" data-position="top right">
            <img
              style={{
                width: "60%",
                marginLeft: "40%",
                marginTop: "7%",
                height: "65%",
              }}
              src="/images/gallery/fulls/team_07.png"
            />
          </div>
        </section>

        {/* Contact Form Panel */}
        <section className="panel color4-alt">
          <div className="intro color4">
            <h2 className="major">Contact</h2>
            <p>
              I'd love to hear from you! Whether you have a question, feedback,
              exciting opportunities or just want to say hello, feel free to
              reach out.
            </p>
          </div>
          <div className="inner columns divided">
            <div className="span-1-5">
              <ul className="contact-icons color1">
                <li className="icon solid fa-envelope">
                  <a href="https://gmail.com" target="blank">
                    @ashmagarg77u@gmail.com
                  </a>
                </li>
                <li className="icon brands fa-github">
                  <a href="https://github.com/Ashma-Garg" target="blank">
                    Ashma-Garg
                  </a>
                </li>
                <li className="icon brands fa-linkedin">
                  <a
                    href="https://www.linkedin.com/in/ashma-garg-31235415b/"
                    target="blank"
                  >
                    Ashma Garg
                  </a>
                </li>
                <li className="icon solid fa-phone">
                  <a href="#">+1 (382)-880-2727</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import MyPicture from "./components/assets/MyPicture.jpg";
import "./Home.css";
import linkedin from "./components/assets/linkedin.svg";
import twitter from "./components/assets/twitter.svg";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import C from "./components/assets/C.png";
import tag from "./components/assets/tag.jpg";
import css from "./components/assets/css.jpg";
import js from "./components/assets/js.png";
import git from "./components/assets/git.png";
import ret from "./components/assets/ret.jpg";
import python from "./components/assets/python.png";
import training from "./components/assets/training.svg";
import ServicesRendered from "./components/Services/ServicesRendered";
import consulting from "./components/assets/consulting.svg";
import Website from "./components/assets/Website.svg";
import Database from "./components/assets/Database.svg";
import Testing from "./components/assets/Testing.svg";
import Writing from "./components/assets/Writing.svg";
import envelope from "./components/assets/envelope.jpg";
import telephone from "./components/assets/telephone.svg";
import PRINTING from "./components/assets/PRINTING.jpg";
import Programming from "./components/assets/Programming.PNG";
import RESTUARANT from "./components/assets/RESTUARANT.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div classname="homeG">
          <div className="head-info">
            <div className="word">
              <h2> Hi there, </h2>
              <h1 className="Name2">I'm Taiwo Adebiyi</h1>
              <h3 className="Name3">A Software Engineer </h3>
              <br />
              <h3 className="Name4">
                I build mechanism that helps people pursue their dreams.
              </h3>
            </div>
            <img className="image" src={MyPicture} alt="My face" />
          </div>

          <div className="about1">
            <h1 className="about3"> About Me </h1>
            <div className="about4">
              <p>
                I'm a computer programmer with an accounting background. I'm
                currently studying Software Engineering. I have delved into
                HTML, CSS, JAVASCRIPT, C PROGRAMMING AND PYTHON. I have also
                done and collaborated on a projects using REACT JS. I'm a
                believer that technology can change the future of the world if
                used rightly. I'm also passionate about coding because it gives
                me a sense of purpose that I will be able to build something
                worthwhile for myself and people around me.
              </p>
            </div>
            <a href="https://www.linkedIn.com/in/taiwoadebiyi">
              <img className="social-link" src={linkedin} alt="linkedin-icon" />
            </a>
            <img className="tweet" src={twitter} alt="twitter-icon" />
          </div>

          <div className="progressBar">
            <h1> My Skills</h1>
            <p> Here are the few skills I possess </p>

            <div className="bar">
              <div>
                <h2 className="skillsword">
                  <img className="Cimage" src={C} alt="c program" /> C
                  PROGRAMMING
                </h2>
                <div className="stripe">
                  <ProgressBar striped variant="info" now={50} />
                </div>
              </div>

              <div className="stripe">
                <h2 className="skillsword">
                  <img className="Cimage" src={tag} alt="html" /> HTML
                </h2>

                <ProgressBar striped variant="info" now={90} />
              </div>
            </div>

            <div>
              <h2 className="skillsword">
                <img className="Cimage" src={css} alt="css" /> CSS{" "}
              </h2>
              <div className="stripe">
                <ProgressBar striped variant="info" now={70} />
              </div>
            </div>

            <div>
              <h2 className="skillsword">
                <img className="Cimage" src={js} alt="js icon" /> JAVASCRIPT{" "}
              </h2>
              <div className="stripe">
                <ProgressBar striped variant="info" now={80} />
              </div>
            </div>

            <div>
              <h2 className="skillsword">
                <img className="Cimage" src={ret} alt="react icon" /> REACT JS{" "}
              </h2>
              <div className="stripe">
                <ProgressBar striped variant="info" now={65} />
              </div>
            </div>

            <div>
              <h2 className="skillsword">
                <img className="Cimage" src={git} alt="giticon" /> GITHUB{" "}
              </h2>
              <div className="stripe">
                <ProgressBar striped variant="info" now={75} />
              </div>
            </div>

            <div>
              <h2 className="skillsword">
                <img className="Cimage" src={python} alt="giticon" /> PYTHON{" "}
              </h2>
              <div className="stripe">
                <ProgressBar striped variant="info" now={75} />
              </div>
            </div>
          </div>
        </div>

        <div className="Service">
          <h1>Services I Render. </h1>
          <p>Here are the services I can render</p>
          <div className="Render">
            <div className="one">
              <div className="render-box">
                <ServicesRendered
                  image={training}
                  text={"Training"}
                  smallText={
                    "I offer instructor-led training in a way that fits with the way you work. "
                  }
                />
              </div>
              <div className="render-box">
                <ServicesRendered
                  image={consulting}
                  text={"IT Consulting."}
                  smallText={
                    "I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives."
                  }
                />
              </div>
              <div className="render-box">
                <ServicesRendered
                  image={Website}
                  text={"Responsive Web Design"}
                  smallText={
                    "I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better. "
                  }
                />
              </div>
              <div className="render-box">
                <ServicesRendered
                  image={Database}
                  text={"Database Development"}
                  smallText={
                    "With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization. "
                  }
                />
              </div>
            </div>
            <div className="one">
              <div className="render-box">
                <ServicesRendered
                  image={training}
                  text={"Customer Software Development"}
                  smallText={
                    "I help develop tehnical solutions in form of softwarres that answer to the needs of customer’s problems. "
                  }
                />
              </div>
              <div className="render-box">
                <ServicesRendered
                  image={Testing}
                  text={"Software Testing"}
                  smallText={
                    "I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly.  "
                  }
                />
              </div>
              <div className="render-box">
                <ServicesRendered
                  image={Writing}
                  text={"Technical Writing"}
                  smallText={
                    "I help channel and transfer information between two or more parties, through any medium that best facilitates the transfer and comprehension of the information. "
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lap">
          <h1> Projects </h1>
          <p className="project-para">
            Here are a few people and projects i've patnered and worked on.
          </p>
          <div className="project1">
            <div>
              <p>
                <a
                  style={{ textDecoration: "none" }}
                  className="whitish"
                  href="https://adebiyi1605.wixsite.com/adeptbookprint"
                >
                  A Website for a Printing Press
                </a>
              </p>
              <img src={PRINTING} alt="" />
            </div>
          </div>
          <div className="project1">
            <p>
              <a
                style={{ textDecoration: "none" }}
                className="whitish"
                href="https://metabnbwebbb.netlify.app/"
              >
                Metabnb For Frontend
              </a>
            </p>
            <img src={Programming} alt=" " />
          </div>

          <div className="project1">
            <div>
              <p>
                <a
                  style={{ textDecoration: "none" }}
                  className="whitish"
                  href="https://gb-food-app.netlify.app/"
                >
                  A Website for a resturant
                </a>
              </p>
              <img src={RESTUARANT} alt=" " />
            </div>
          </div>
        </div>

        <div className="pagecontact">
          <div className="touch1">
            <h1>Get In Touch</h1>
            <br />
            <div className="contact2">
              <h4>
                <a href="https://www.linkedin.com/in/taiwoadebiyi">
                  <img
                    className="linkedIn-img"
                    src={linkedin}
                    alt="linkedin-icon"
                  />
                </a>
                -- Taiwo Adebiyi
              </h4>
              <hr />
              <p className="touch1-para">
                <img className="msg" src={envelope} alt="message-icon" />
                adebiyi1605@gmail.com
              </p>
              <p className="touch1-para"> Send a message anytime</p>
              <hr />
              <p className="touch1-para">
                <img src={telephone} alt="telephone-icon" /> +234- 8103 - 025029
              </p>
              <p className="touch1-para"> Reach me privately</p>
            </div>
          </div>

          <div className="touch2">
            <h4>Send a Message</h4>
            <form>
              <label for="namef" className="full">
                {" "}
                Enter your full name:
                {/* <h1 className="full">Enter your full name: </h1> */}
              </label>
              <br />
              <input className="full2" type="namef" id="namef" name="namef" />
              <hr />
              <label for="email" className="full">
                {" "}
                Enter your email:
                {/* <h1 className="full">Enter your email:</h1> */}
              </label>
              <br />
              <input className="full2" type="email" id="email" name="email" />
              <hr />
              <label for="message" className="full">
                {" "}
                Write a Message:
                {/* <h1 className="full"> Write a Message:</h1> */}
              </label>
              <br />
              <textarea
                className="full2"
                type="message"
                id="message"
                name="message"
                rows={5}
                cols={50}
              ></textarea>
              <hr />
              <div>
                <input className="box" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>

        <footer className="footer7">
          <h2> Taiwo Adebiyi </h2>
          <img src={linkedin} alt="linkedin-icon" />{" "}
          <img className="msg" src={envelope} alt="message-icon" />{" "}
          <img src={telephone} alt="telephone-icon" />
          <p> Copyright &copy; 2022 || All rights Reserved </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;

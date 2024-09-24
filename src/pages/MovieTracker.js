import React from "react";
import "./MovieTracker.css";
import Crunchyroll from "../assets/images/movie/crunchyroll.png";
import Github from "../assets/images/movie/github.png";
import Yelp from "../assets/images/movie/yelp.png";
import MyApp from "../assets/images/movie/movie-tracker.png";
import MovieGoals from "../assets/images/movie/movie-goals.png";
import MovieSticker from "../assets/images/movie/movie-sticker.png";
import MovieLowfi from "../assets/images/movie/movie-lowfi.png";

export default function MovieTracker() {
  return (
    <div className="MovieTracker">
      <div className="banner">
        <img src={MovieSticker} alt="banner showing movie tracker app"></img>
      </div>
      <div className="widthContainer">
        <h1>Lit Path Website</h1>
        <div className="section">
          <h2>Overview ✧</h2>
          <hr />
          <div className="projectInfo">
            <div className="overview">
              <p>
                This is a development project in which I implemented a newly
                designed website for a non-profit client, Lit Path. Lit Path’s
                purpose is to "light the path to recovery" through partial
                scholarships for psychotherapy with certified professionals.
                Their goal is to make recovery therapy more affordable for
                everyone.
              </p>
            </div>
            <div className="projectDetails">
              <p>
                <span className="bold">Role:</span> Developer
              </p>
              <p>
                <span className="bold">Team:</span> 3 Developers, 6 Designers
              </p>
              <p>
                <span className="bold">Skills:</span> React, HTML, CSS,
                JavaScript
              </p>
              <p>
                <span className="bold">Timeline:</span> 12 weeks (2023)
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>The problem ⚙</h2>
          <hr />
          The client was not satisfied with the old design, mainly because of
          inconsistencies in colors and layout that did not have clear branding.
          Also, they received feedback about the pages being difficult to
          navigate, due to a lack of guidance. Our goal was to make a website
          that was more professional, intuitive and user friendly for donors,
          therapists, and scholarship applicants.
          <hr className="spacing" />
          <div className="subsection">
            <h3 className="bold">Original Website</h3>
            <div className="imgContainer">
              <img
                className="screenshot"
                src={MovieGoals}
                alt="goals for my movie tracking app"
              />
            </div>
          </div>
        </div>
        <div className="section">
          <h2>The process ✎</h2>
          <hr />
          <div className="subsection">
            <h3>Code Planning</h3>
            <p>
              The first couple of weeks was spent on planning and research,
              namely to see if certain features and layouts would be feasible to
              implement (based on the first wireframes made by the designers).
            </p>
          </div>
          <hr className="spacing" />
          <div className="subsection">
            <h3>First Iteration</h3>
            <p>
              Due to time constraints, the development process overlapped
              slightly with the design process, which normally would go through
              multiple iterations. I implemented first-drafts of the following
              pages: Scholarship Application Page, Therapis Application Page,
              and the Donate Page. I also made the footer and the header. In the
              implementation process, I focused too heavily on getting the page
              layout as close as possible to the prototype, which in hindsight
              would not have been necessary.
            </p>
          </div>
          <hr className="spacing" />
          <div className="subsection">
            <h3 className="bold">Final Implementation</h3>
            <p>
              After user testing and receiving feedback from the client, we
              decided on a final design to implement. One of the problems I ran
              into was ensuring the prototypes made by the design team would be
              consistent across screens of varying sizes. In particular, the
              custom React components I made that required careful consideration
              were the slide carousel and the timeline. Since their contents
              varied across different pages, I had to make sure they looked
              consistent across different uses and screen sizes.
            </p>
          </div>
        </div>
        <div className="section">
          <h2>The Solution ✩</h2>
          <hr />
          <div className="subsection">
            <h3 className="bold">Final Protoype and Demo</h3>
            <p>
              For more detail on the team and the work process, view the demo
              video and final prototype below.
            </p>
          </div>
          <div className="subsection">
            <h3>My App</h3>
            <p>
              Here is the final page I implemented using React, HTML, and CSS. I
              used React for more flexibility, as I could easily resuse core
              components like card items. I included the sorting, filtering, and
              resetting functionality all on one line for ease of use. Clicking
              the favorite button will add a movie to the favorite list on top,
              or remove it if it has already been added.
            </p>
            <div className="imgContainer">
              <img
                className="screenshot"
                src={MyApp}
                alt="My movie tracker's favoriting feature"
              ></img>
            </div>
            <p>
              Visit the page at:{" "}
              <a
                className="bold underlined"
                href="https://development-movie-tracker.vercel.app/"
              >
                Movie-Tracker App
              </a>
            </p>
          </div>
        </div>
        <div className="section">
          <h2>Takeaways ☺</h2>
          <hr />
          <p>
            This project gave me the opportunity to work in an agile
            environment, and I learned how to collaborate more efficiently
            across different teams. I learned the importance of writing
            well-maintained, reusable code, especially on a project that is
            changing rapidly. Overall, I found it really meaningful to
            contribute to Lit Path's redesign, especially considering its
            mission.
          </p>
        </div>
      </div>
    </div>
  );
}

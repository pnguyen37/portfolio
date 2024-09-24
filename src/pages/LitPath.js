import React from "react";
import "./LitPath.css";
import LitPathSticker from "../assets/images/litpath/litpath-banner.png";
import LitPathVideo from "../assets/images/litpath/DFG_Lit_Path_Demo_Video.mp4";
import OldTherapistPage from "../assets/images/litpath/old-therapist-page.png";
import OldDonatePage from "../assets/images/litpath/old-donate-page.png";
import OldScholarshipPage from "../assets/images/litpath/old-scholarship-page.png";
import FirstTherapistPage from "../assets/images/litpath/first-therapist-page.png";
import FirstDonatePage from "../assets/images/litpath/first-donate-page.png";
import FirstScholarshipPage from "../assets/images/litpath/first-scholarship-page.png";
import FinalTherapistPage from "../assets/images/litpath/final-therapist-page.png";
import FinalDonatePage from "../assets/images/litpath/final-donate-page.png";
import FinalScholarshipPage from "../assets/images/litpath/final-scholarship-page.png";
import Timeline from "../assets/images/litpath/timeline-component.png";

export default function LitPath() {
  return (
    <div className="LitPath">
      <div className="banner">
        <img src={LitPathSticker} alt="banner showing movie tracker app"></img>
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
            <div className="spanContainer" style={{justifyContent: "center"}}>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={OldTherapistPage}
                  alt="Original Home Page"
                />
              </div>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={OldScholarshipPage}
                  alt="Original Scholarship Page"
                />
              </div>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={OldDonatePage}
                  alt="Original Donation Page"
                />
              </div>
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
            <div className="spanContainer" style={{justifyContent: "center"}}>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={FirstTherapistPage}
                  alt="First Design of Therapist Page"
                />
              </div>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={FirstScholarshipPage}
                  alt="First Design of Scholarship Page"
                />
              </div>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={FirstDonatePage}
                  alt="First Design of Donation Page"
                />
              </div>
            </div>
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
            <div className="imgContainer">
              <img src={Timeline} alt="timeline react component" />
            </div>
            <hr className="spacing"/>
            <p>
              One of the key changes from the previous implementation was more 
              consistency across components, as shown by the headers and image sizes
              of the banner sections on each page. This made reusing components much 
              easier. 
            </p>
             <div className="spanContainer" style={{justifyContent: "center"}}>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={FinalTherapistPage}
                  alt="Final Design of Therapist Page"
                />
              </div>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={FinalScholarshipPage}
                  alt="Final Design of Scholarship Page"
                />
              </div>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={FinalDonatePage}
                  alt="Final Design of Donation Page"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>The Solution ✩</h2>
          <hr />
          <p>
            For more details on the team and the work process, view the demo
            video. To view the final product, visit {" "}
            <span>  
             <a className="bold underlined" href="https://litpath.org/">
                Lit Path
              </a>
            </span>  
          </p>
          <hr className="spacing" />
          <div className="subsection">
            <h3>Demo</h3>
            <video
              controls
              type="video/mp4"
              style={{ maxWidth: "80%", alignSelf: "center" }}
              src={LitPathVideo}
            ></video>
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

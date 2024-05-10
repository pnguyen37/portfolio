import React from "react";
import "./UnoHealth.css";
import AllisonSketch1 from "../assets/images/uno/sketches/AllisonSketch1.png";
import AllisonSketch2 from "../assets/images/uno/sketches/AllisonSketch2.png";
import DavidSketch1 from "../assets/images/uno/sketches/DavidSketch1.jpeg";
import DavidSketch2 from "../assets/images/uno/sketches/DavidSketch2.jpeg";
import PaulineSketch1_1 from "../assets/images/uno/sketches/PaulineSketch1_1.jpg";
import PaulineSketch1_2 from "../assets/images/uno/sketches/PaulineSketch1_2.jpg";
import PaulineSketch2_1 from "../assets/images/uno/sketches/PaulineSketch2_1.jpg";
import PaulineSketch2_2 from "../assets/images/uno/sketches/PaulineSketch2_2.jpg";
import SophieSketch1 from "../assets/images/uno/sketches/SophieSketch1.png";
import SophieSketch2 from "../assets/images/uno/sketches/SophieSketch2.png";
import Lowfi1 from "../assets/images/uno/figma/Lo-fi1.png";
import Lowfi2 from "../assets/images/uno/figma/Lo-fi2.png";
import PrepPage from "../assets/images/uno/figma/Prep-page.png";
import UploadPage from "../assets/images/uno/figma/upload-page.png";
import HomePage from "../assets/images/uno/figma/Home-page.png";
import MyHomePage from "../assets/images/uno/figma/my-home-page.png";
import Warning from "../assets/images/uno/figma/Warning.png";
import UnoStyleGuide from "../assets/images/uno/figma/uno-style-guide.png";
import NewEastSidePockets from "../assets/images/redesign/new-esp-page.png";
import Carousel from "../components/Carousel";
import UnoSticker from "../assets/images/uno/uno-sticker.png";

const images = [
  {
    img: AllisonSketch1,
    alt: "low-fidelity wireframe, first version",
  },
  {
    img: AllisonSketch2,
    alt: "low-fidelity wireframe, updated version",
  },
];

export default function UnoHealth() {
  return (
    <div className="UnoHealth">
      <div className="banner">
        <img src={UnoSticker} alt="banner showing uno health redesign"></img>
      </div>
      <div className="widthContainer">
        <h1>Uno Health Application Design</h1>
        <div className="section">
          <h2 className="uppercase">Overview ✧</h2>
          <hr />
          <div className="projectInfo">
            <div className="overview">
              <p>
                This is a design project for the startup{" "}
                <a
                  className="bold underlined"
                  href="https://www.unohealth.com/"
                >
                  Uno Health
                </a>
                , a company that focuses on helping Medicare-eligible users get
                the government benefits they are entitled to. I worked with
                other designers to redesign their document upload experience for
                a household application (e.g., an individual and their spouse).
                I was responsible for the initial design of the homepage, from
                which users begin the upload process.
              </p>
            </div>
            <div className="projectDetails">
              <p>
                <span className="bold">Role:</span> Designer
              </p>
              <p>
                <span className="bold">Team:</span> 4 Designers
              </p>
              <p>
                <span className="bold">Skills:</span> Figma, Prototyping
              </p>
              <p>
                <span className="bold">Timeline:</span> 2 weeks (2024)
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="uppercase">The Problem ⚙</h2>
          <hr />
          <p>
            Uno Health's website has duplicate upload sites for joint
            applications. This makes the interface overwhelming and confusing
            for all members of the household, especially since there are many
            documents that could be mixed up in the upload process. We aimed to
            make both the home page and the upload pages easier to navigate to
            prevent confusion.
          </p>
        </div>

        <div className="section">
          <h2 className="uppercase">The Process ✎</h2>
          <hr />
          <p>
            After refining our understanding of the problem, we began sketching
            to come up with a variety of designs that might help in making the
            interface less overwhelming.
          </p>
          <div className="subsection">
            <h3>Sketches</h3>
            <div className="spanContainer">
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={AllisonSketch1}
                  alt="Allison's Sketch 1"
                />
                {/* <img
              className="sketch"
              src={AllisonSketch2}
              alt="Allison's Sketch 2"
            /> */}
              </div>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={DavidSketch1}
                  alt="David's Sketch 1"
                />
                {/* <img className="sketch" src={DavidSketch2} alt="David's Sketch 2" /> */}
              </div>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={PaulineSketch1_2}
                  alt="Pauline's Sketch 1"
                />
                {/* <img
              className="sketch"
              src={PaulineSketch2_1}
              alt="Pauline's Sketch 2 Page 1"
            /> */}
              </div>
              <div className="sketchContainer">
                <img
                  className="sketch"
                  src={SophieSketch1}
                  alt="Sophie's Sketch 1"
                />
                {/* <img
              className="sketch"
              src={SophieSketch2}
              alt="Sophie's Sketch 2"
            /> */}
              </div>
            </div>
          </div>

          <hr className="spacing" />
          <div className="subsection">
            <h3>Key Design Choices</h3>
            <p>
              After comparing sketches, we found that several features showed up
              more than once across our designs, due to similar approaches to
              the problem. We ended up selecting the following features:
            </p>
            <ul>
              <li>
                <span className="bold">Linear flow of document uploads:</span>{" "}
                We wanted the user to only view one upload task for each page,
                rather than all uploads on one page, so that it is less
                overwhelming.
              </li>
              <li>
                <span className="bold">Progress bar:</span> Since a linear
                sequence of uploads may take awhile, the progress bar encourages
                the user to continue until completion.
              </li>
              <li>
                <span className="bold">Profiles:</span> The profiles
                differentiate uploads between a user and their spouse to prevent
                mixup between users. We created separate profiles from which
                each user can begin uploading their documents, which also allows
                for a more clear entry point.
              </li>
              <li>
                <span className="bold">Dropdown button:</span> The document
                dropdown allows users more flexibility in navigating to a
                specific upload page, in case they need to fix an upload and
                don't want to go through the linear flow again.
              </li>
            </ul>

            <p>
              Overall, we were paying closest attention to the ease of
              navigation and hiding the complexity of the original interface,
              and we believe that the creation of the linear flow behind a home
              page with profiles and a dropdown would do that for us.
            </p>
          </div>
          <hr className="spacing" />
          <div className="subsection">
            <h3>Low-fi Wireframe: Iteration 1</h3>
            <p>
              After deciding on the key features of our design, we made a
              wireframe to get a more detailed visual of what the user flow
              would look like. We wanted each page to be very clear in what its
              purpose was so the flow would be easier to navigate.
            </p>
            <div className="imgContainer">
              <img src={Lowfi1} alt="Low-fidelity wireframe, initial" />
            </div>
            {/* <a
              className="bold"
              href="https://www.figma.com/file/dTd1HvNalOHYYo3x9HFsvd/Iterative-Lo-Fi%2C-Style-Guide%2C-and-Hi-Fi?type=design&node-id=0%3A1&mode=design&t=5aVrYg2mPhqQFJhq-1"
            >
              Here is the link to our Lo-Fi figma for a closer look.
            </a> */}
            <p>
              I was responsible for making the home page. Three of the major
              changes that I made to the layout were{" "}
              <span className="bold">
                moving the application status towards the top
              </span>{" "}
              of the page to ground the user in the process, including{" "}
              <span className="bold">separate profiles </span>to prevent mixup
              between different members, and adding a{" "}
              <span className="bold">dropdown route</span> to allow the user
              flexibility in navigating to a specific page.
            </p>
            <div className="wideImg">
              <img
                src={MyHomePage}
                alt="Low-fidelity wireframe, my home page"
              />
            </div>
          </div>

          <hr className="spacing" />
          <div className="subsection">
            <h3>Critique</h3>
            <p>
              Shortly after we created the first wireframe, we received feedback
              from peers and our point of contact, the design lead on the Uno
              team. Although they praised the simplicity of our interface, they
              also gave the following feedback on what we could improve.
            </p>
            <ul>
              <li>
                <span className="bold">Inconsistent button:</span> "I live on my
                own" button was a completely different color from other button
                options, which made its purpose unclear.
              </li>
              <li>
                <span className="bold">Missing edge cases:</span> What if a user
                hit "save and exit" when no document was uploaded? How do you
                add more documents or delete one document? What if user needs to
                skip an upload because they don't have the docuemnt at the
                moment?
              </li>
              <li>
                <span className="bold">Lacking context:</span> User may not
                expect the upload process to require so many documents, because
                there is no warning or preparation stage before they begin the
                upload process.
              </li>
              <li>
                <span className="bold">Unclear entry point:</span> If "upload
                document" was clicked again, would this erase all of the
                documents or keep them (leading users to not act based on fear
                of wiping progress)?
              </li>
              <li>
                <span className="bold">Unclear intention of dropdown:</span> It
                wasn't clear what the intention of the dropdown button was
                (whether it's for required vs. uploaded documents).
              </li>
            </ul>
          </div>
          <hr className="spacing" />
          <div className="subsection">
            <h3>Low-fi Wireframe: Iteration 2</h3>
            <p>
              Based on the feedback we received, we updated our wireframe to
              address the user concerns. This step was important becuase we had
              to all be on the same page about updated design decisions before
              we could implement a more polished prototype.
            </p>
            <div className="imgContainer">
              <img src={Lowfi2} alt="Low-fidelity wireframe, updated" />
            </div>
            {/* <a
              className="bold"
              href="https://www.figma.com/file/dTd1HvNalOHYYo3x9HFsvd/Iterative-Lo-Fi%2C-Style-Guide%2C-and-Hi-Fi?type=design&node-id=248%3A1618&mode=design&t=ll9fR6IRVRSR588e-1"
            >
              Here is the link to our second Lo-Fi figma for a closer look.
            </a> */}
          </div>
          <hr className="spacing" />
          <div className="subsection">
            <h3>Key Updates</h3>
            <ul>
              <li>
                <span className="bold">Fixed button layout:</span> The "I live
                on my own" button has the same layout as the other options for
                better consistency.
              </li>
              <li>
                <span className="bold">
                  Added extra functionality for edge cases:
                </span>{" "}
                Every upload page has a skip button so the user can skip if they
                are missing a document. The document names have info buttons to
                provide more information for the user. Every upload page allows
                users to view and delete uploaded documents. This was done to
                address the edge cases brought up in critique.
                <div className="listImg">
                  <img
                    className="prep"
                    src={UploadPage}
                    alt="low fidelity upload page"
                  />
                </div>
              </li>
              <li>
                <span className="bold">
                  Added preparation page for context:
                </span>{" "}
                I proposed adding a preparation page to give the user more
                context before they enter into the upload process. It ensures
                users know what to expect and have documents ready before they
                begin uploading. It is also a centralized place for users to
                navigate to the desired upload page and keep track of their
                progress and which documents they have yet to upload.
                <div style={{ width: "50%" }} className="listImg">
                  <img
                    className="prep"
                    src={PrepPage}
                    alt="low fidelity preparation page"
                  />
                </div>
              </li>
              <li>
                <span className="bold">Clarified application entry point:</span>{" "}
                I also proposed changing the initial upload button from "Upload
                documents," to "Go to applcication" because this clearly indicates that the user
                will not be directly uploading/re-uploading their documents from
                the home page, but will be redirected.
              </li>
              <li>
                <span className="bold">Clarified dropdown button:</span> The
                "View documents" button was renamed to "View uploaded
                documents," and made to appear only when the user has uploaded
                at least one document, to ensure users know exactly what the
                button is intended for.
                {/* <div className="listImg">
                  <img
                    className="wideImg"
                    src={HomePage}
                    alt="low fidelity home page"
                  />
                </div> */}
              </li>
            </ul>
          </div>

          <hr className="spacing" />
          <div className="subsection">
            <h3>Style Guide</h3>
            <p>
              When it came to styling, we chose to follow the style guide given
              by our client to ensure consistency with the company's brand. The
              guide included high-contrast colors, which was good for
              accessibility and for signifying clickability. The typography was
              a round font, which made the page less formal and intimidating,
              yet was still easy to read.
            </p>
            <div className="imgContainer">
              <img src={UnoStyleGuide} alt="uno style guide" />
            </div>
            {/* <a
              className="bold"
              href="https://www.figma.com/file/dTd1HvNalOHYYo3x9HFsvd/Iterative-Lo-Fi%2C-Style-Guide%2C-and-Hi-Fi?type=design&node-id=284%3A2684&mode=design&t=Gk4YGF94alqfNgLh-1"
            >
              Click the frame above to see the full style guide, or use this
              link
            </a> */}
            <p>
              For icons, buttons, and other components, we stuck to the designs
              given to us in the brand kit. However, we added a couple new{" "}
              <span className="bold">colored icons and components</span> (shown
              below) for purposes like{" "}
              <span className="bold">warnings and successes</span>, as we felt
              the color helped them stand out more.
            </p>
            <div className="imgContainer">
              <img
                src={Warning}
                alt="components showing missing document and uploaded document"
              />
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="uppercase">the solution ✩</h2>
          <hr />
          <div className="subsection">
            <h3>Prototype</h3>
            <p>
              We combined the styling from the style guide and the layout from
              our wireframes to get a final prototype. The major design choices
              were using <span className="bold"> one page per upload</span> and
              creating{" "}
              <span className="bold">multiple ways of navigating </span>
              the upload process We also used styling to guide the user by
              highlighting
              <span className="bold"> important actions in dark green</span> .
            </p>
            <div className="wideImg imgContainer">
              <iframe
                title="high-fideltiy prototype"
                width="800"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdTd1HvNalOHYYo3x9HFsvd%2FIterative-Lo-Fi%252C-Style-Guide%252C-and-Hi-Fi%3Ftype%3Ddesign%26node-id%3D147-108%26t%3DUCPmepClLi6CVS5r-1%26scaling%3Dscale-down%26page-id%3D114%253A84%26starting-point-node-id%3D147%253A74%26mode%3Ddesign"
                allowfullscreen
              ></iframe>
            </div>
            {/* <a
              className="bold"
              href="https://www.figma.com/file/dTd1HvNalOHYYo3x9HFsvd/Iterative-Lo-Fi%2C-Style-Guide%2C-and-Hi-Fi?type=design&node-id=114%3A84&mode=design&t=LcZjdUW10JrUdZCZ-1"
            >
              Click the frame above to interact with our Hi-Fi prototype, or use
              this link
            </a> */}
          </div>
        </div>
        <div className="section">
          <h2 className="uppercase">Next Steps ↪</h2>
          <hr />
          <p>
            For a final round of feedback, we met with our point of contact.
            Some of the positive feedback mentioned the benefits of the
            preparation page, the use of instructions to guide the user, and the
            separate entrypoints on the home page to prevent mixup between
            members. However, to further improve on this design, we would
            prioritize the following fixes.
          </p>
          <hr className="spacing" />
          <div className="subsection">
            <h3>Areas of Improvement</h3>
            <ul>
              <li>
                <span className="bold">
                  Misuse of error state vs. empty state:
                </span>{" "}
                Our prototype needs some default empty state for incomplete
                actions. The error state should be reserved for documents that
                are not uploaded properly, or incorrect documents (which is
                manually checked by the Uno team).
              </li>
              <li>
                <span className="bold">
                  Upload pages could use more context:
                </span>{" "}
                There's enough space to display some context about the document
                but our prototype stores everything in an info button. Also, we
                use the labels "Primary Member" and "Spouse," which can be more
                explicit if replaced with the names of users.
              </li>
              <li>
                <span className="bold">Dropdown route not needed:</span> Since
                users might not expect to see a list of documents, and be able
                to navigate from the dropdown, this feature might not be
                discovered and used. It's also a duplicate route (similar to the
                preparation page), so it could be simplified. It's ok if the
                user needs to click one extra button to see the same
                information.
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2 className="uppercase">Takeaways ☺</h2>
          <hr />
          <p>
            While working with other designers, I learned how to advocate for my
            design while still being open to feedback. It was a meaningful
            experience learning how to incorporate everyone's design styles into
            one final product. I also learned the importance of an iterative
            design process, as the feedback we received at each step was crucial
            in improving the usability of our design. Hearing a lot of different
            perspectives helped us address issues that we would not have noticed
            otherwise.
          </p>
        </div>
      </div>
    </div>
  );
}

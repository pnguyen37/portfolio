import React from "react";
import "./ResponsiveRedesign.css";
import EastSidePockets from "../assets/images/redesign/esp-page.png";
import SpeedSketches from "../assets/images/redesign/speed-sketches.jpg";
import FinalSketch from "../assets/images/redesign/final-sketch.jpg";
import NewEastSidePockets from "../assets/images/redesign/new-esp-page.png";
import StyleGuide from "../assets/images/redesign/visual-style-guide.png";
import DesktopWireframe from "../assets/images/redesign/redesign-desk-wireframe.png";
import TabletWireframe from "../assets/images/redesign/redesign-mobile-wireframe.png";
import PhoneWireframe from "../assets/images/redesign/redesign-phone-wireframe.png";
import RedesignSticker from "../assets/images/redesign/redesign-sticker.png";

export default function ResponsiveRedesign() {
  return (
    <div className="ResponsiveRedesign">
      <div className="banner">
        <img
          src={RedesignSticker}
          alt="banner showing east side pockets redesign"
        ></img>
      </div>
      <div className="widthContainer">
        <h1>East Side Pockets Redesign</h1>
        <div className="section">
          <h2>Overview ✧</h2>
          <hr />
          <div className="projectInfo">
            <div className="overview">
              <p>
                This is a redesign project attempting to improve the usability
                and accessibility of the{" "}
                <a
                  className="bold underlined"
                  href="https://www.ediningexpress.com/live20/617/1130/"
                >
                  East Side Pockets
                </a>{" "}
                ordering page. I began by sketching and wireframing to address
                the major usability issues in the layout, and then made a visual
                style guide and high fidelity mockup to finalize the style of
                the new design before implementation.
              </p>
            </div>
            <div className="projectDetails">
              <p>
                <span className="bold">Role:</span> Designer and Developer
              </p>
              <p>
                <span className="bold">Skills:</span> HTML, CSS, Figma, Redesign
              </p>
              <p>
                <span className="bold">Timeline:</span> 3 weeks (2024)
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>The Problem ⚙</h2>
          <hr />
          <p>
            The interactive elements on East Side Pocket's ordering page were
            not as intuitive to use in comparison to other restaurant ordering
            pages. There were accessibility and layout issues that could be
            addressed in a more responsive design.
          </p>
          <div className="imgContainer scrollable">
            <img
              className="screenshot"
              src={EastSidePockets}
              alt="original East Side Pockets ordering page"
            ></img>
          </div>

          <hr className="spacing" />
          <div className="subsection">
            <h3>Usability Issues</h3>
            <p>
              I started to identify usability issues by taking note of the
              problems I ran into when interacting with the page. I found that
              the main usability issues could be categorized into the following
              groups: affordances, responsiveness, and alignment.
            </p>
            <ul>
              <li>
                <p>
                  <span className="bold">Poor affordances / learnability:</span>{" "}
                  Some buttons in the banner don’t seem clickable and just look
                  like images, so banner might get ignored completely. Order
                  receipt looks like it could be a button but is not. At a
                  glance, menu seems more like plain text than an interactive
                  page.
                </p>
              </li>
              <li>
                <p>
                  <span className="bold">Not fully responsive: </span>The nav
                  bar disappears for small screens and some of the text in the
                  nav bar gets pushed off as the screen gets smaller. The order
                  function doesn't show up on smaller screens if you don't
                  already have something in the cart.
                </p>
              </li>
              <li>
                <p>
                  <span className="bold">Alignment / spacing: </span>Menu images
                  interfere with left alignment of text. Some images are big
                  enough to take up the whole screen. There is a lot of unused
                  space on right side when the order is empty.
                </p>
              </li>
            </ul>
          </div>

          <hr className="spacing" />
          <div className="subsection">
            <h3>Accessibility Issues</h3>
            <p>
              I then found issues related to accessibility, which I found by
              inspecting the page using the WAVE Evaluation Tool.{" "}
            </p>
            <ul>
              <li>
                <p>
                  The text contrast is too low because the shade of green is too
                  light for a white background.
                </p>
              </li>
              <li>
                <p>
                  The language of the document is not identified so screen
                  readers can't read the page in the correct language.
                </p>
              </li>
              <li>
                <p>
                  There are no aria labels, and some images are missing
                  alternative text, so images and icons wouldn’t be read out
                  loud.
                </p>
              </li>
              <li>
                <p>
                  There is no heading structure, which creates navigation issues
                  for assitive technologies.
                </p>
              </li>
              <li>
                <p>
                  Some of the dropdown menus require a click and aren’t
                  accessible through the keyboard, which creates problems for
                  those with mobility impairments.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2>The Process ✎</h2>
          <hr />
          <div className="subsection">
            <h3>Sketches</h3>
            <p>
              Once I identified issues to address in the original page, I made 9
              sketches to brainstorm new designs for the page, which I combined
              into a final sketch with some of my favorite components. The{" "}
              <span className="bold">dropdown buttons</span> in the banner and{" "}
              <span className="bold">footer with navigation links</span> allowed
              me to condense the content from the banner to make it less
              crowded. The <span className="bold">two-column display</span>{" "}
              worked well for convention reasons (physical menus have two
              columns). The <span className="bold">clickable cards </span>helped
              make each menu item more consistent in layout and more easy to
              interact with, as opposed to a small link.
            </p>
            <div className="gridContainer">
              <img
                className="screenshot"
                src={SpeedSketches}
                alt="9 initial sketches to brainstorm design"
              />
              <img
                className="screenshot"
                src={FinalSketch}
                alt="finalized sketch of design"
              />
            </div>
          </div>
          <hr className="spacing" />
          <div className="subsection">
            <h3>Low-Fidelity Wireframes</h3>
            <p>
              I used my final sketch as the foundation for my wireframes, which
              I made in order to see how the layout looked when scaled properly.
              Some of the key fixes I made addressed accessibility issues like
              the lack of heading structure, and usability issues like poor
              affordances and misalignment. I tackled the issue of poor
              affordances by making interactive components more obvious to the
              user, and spacing issues by reorganizing the placement of content.
            </p>
            <div className="imgContainer">
              {/* <iframe
              title="dektop view of low fidelity wireframe"
              aria-label="low fidelity wireframe of page in desktop view"
              className="screenshot"
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvnJB0pTxs6QwimnI5oKq2N%2FEast-Side-Pockets-Redesign%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3Dos3E3ln5Ky8ghUHU-1"
              allowfullscreen
            ></iframe> */}
              <img
                className="screenshot"
                src={DesktopWireframe}
                alt="desktop view of low fidelity wireframe"
              />
            </div>
            <hr className="spacing" />
            <p>
              For the tablet view <span>(bottom left image)</span>, and the
              phone view <span>(bottom right image)</span>, I did not make major
              changes in layout relative to the desktop view{" "}
              <span>(above image)</span> because I wanted my design to be
              consistent across different screens. The main differences were
              changing from a two-column display to a{" "}
              <span className="bold">one-column display</span> and adding a{" "}
              <span className="bold">hamburger menu </span> to fit the nav-bar
              pages. I made this change to ensure all the content would fit on
              smaller screen sizes.
            </p>
            <div className="gridContainer">
              <img
                className="screenshot"
                src={TabletWireframe}
                alt="tablet view of low fidelity wireframe"
              />
              <img
                className="screenshot"
                src={PhoneWireframe}
                alt="phone view of low fidelity wireframe"
              />
            </div>
          </div>
          <hr className="spacing" />
          <div className="subsection">
            <h3>Visual Style Guide</h3>
            <p>
              Once I figured out my layout, I needed to decide on the styling of
              the page. I liked the restuarant's color scheme, so I made a style
              guide that fit the restaurant's brand. This meant selecting
              similar colors as the original website to stay on theme, but
              choosing shades with{" "}
              <span className="bold">better contrast for accessibility</span>. I
              chose a dark green and bright yellow because they have good
              contrast and can serve different purposes. I chose a{" "}
              <span className="bold">simpler font</span> so that it would not be
              too distracting, especially since I chose some bright colors. I
              also made sure to include hoverable components to ensure{" "}
              <span className="bold">consistency in the hover effects</span>.
            </p>
            <div className="imgContainer">
              <img
                className="screenshot"
                src={StyleGuide}
                alt="visual style guide showing color palette, typography, UI elements, and icons"
              />
            </div>
          </div>
          <hr className="spacing" />
          <div className="subsection">
            <h3>High-Fidelity Mockups</h3>
            <p>
              I then moved on to my high-fidelity mockups, using the styling
              choices in my style guide to build on my wireframes and make a
              more realistic prototype of the final page. I ended up making{" "}
              <span className="bold">green the primary color of the page</span>,
              and reserving the{" "}
              <span className="bold">bright yellow for action items</span> that
              users should pay attention to (like adding to order and checking
              out). Below are the mockups for Desktop View{" "}
              <span>(left page)</span>, Tablet View <span>(middle page)</span>,
              and Phone View <span>(right page)</span>.
            </p>

            {/* <div className="imgContainer">
            <iframe
              title="desktop view of high fidelity mockup"
              width="100%"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvnJB0pTxs6QwimnI5oKq2N%2FEast-Side-Pockets-Redesign%3Ftype%3Ddesign%26node-id%3D144-264%26t%3DVCrKwGBkCOJeGWd0-1%26scaling%3Dscale-down%26page-id%3D144%253A263%26starting-point-node-id%3D144%253A264%26mode%3Ddesign"
              allowfullscreen
            ></iframe>
            </div> */}

            <div className="imgContainer">
              <iframe
                title="high fidelity mockeups for all three screen sizes"
                width="100%"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvnJB0pTxs6QwimnI5oKq2N%2FEast-Side-Pockets-Redesign%3Ftype%3Ddesign%26node-id%3D2656%253A84%26mode%3Ddesign%26t%3DlTItdksh9PtowZzi-1"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>The Solution ✩</h2>
          <hr />
          <p>
            Here is the final page that I implemented using HTML and CSS, based
            on my mockups. I used media queries to ensure responsiveness.
          </p>
          <div className="imgContainer scrollable">
            <img
              className="screenshot"
              src={NewEastSidePockets}
              alt="redesigned East Side Pockets page"
            />
          </div>
          <p>
            Visit the page at:{" "}
            <a
              href="https://pnguyen37.github.io/responsive-redesign/"
              className="bold underlined"
            >
              New East Side Pockets Online Ordering Page
            </a>
          </p>
        </div>

        <div className="section">
          <h2>Takeaways ☺</h2>
          <hr />
          <p>
            After going through this redesign process, I learned that there are
            a lot of factors to consider when choosing a design. For example, I
            had to think about components that would be accessible, have good
            affordances, follow convention, and also have a consistent and clean
            style. Convention in particular was tricky because when I was
            brainstorming design ideas, it was hard to come up with original
            ways to display menus when the two-column format is so widely
            recognized. Overall, it was a good learning experience and I liked
            the iterative nature of the design process.
          </p>
        </div>
      </div>
    </div>
  );
}

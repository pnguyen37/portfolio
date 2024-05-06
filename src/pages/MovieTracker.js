import React from "react";
import "./MovieTracker.css";
import Crunchyroll from "../assets/images/movie/crunchyroll.png";
import Github from "../assets/images/movie/github.png";
import Yelp from "../assets/images/movie/yelp.png";
import MyApp from "../assets/images/movie/movie-tracker.png";
import MovieGoals from "../assets/images/movie/movie-goals.png";
// import NewEastSidePockets from "../assets/movie/redesign/new-esp-page.png";

export default function MovieTracker() {
  return (
    <div className="MovieTracker">
      <div className="widthContainer">
        <h1>Movie Tracker</h1>
        <div className="section">
          <h2>Overview ✧</h2>
          <hr />
          <div className="projectInfo">
            <div className="overview">
              <p>
                In this project, I conducted a competitive analysis between
                three different companies to analyze the design choices made by
                industry experts. I looked at features related to the filtering
                and sorting functionality of the page. I then implemented a page
                of my own based on the features that I thought worked well,
                specifically when used in combination with a favoriting
                function.
              </p>
            </div>
            <div className="projectDetails">
              <p>
                <span className="bold">Role:</span> Designer
              </p>
              <p>
                <span className="bold">Skills:</span> React, HTML, CSS
              </p>
              <p>
                <span className="bold">Timeline:</span> 2 weeks (2024)
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>The problem ⚙</h2>
          <hr />I wanted to make a movie tracking app that allows users to
          filter and sort through movies so that they can easily add their
          favorites to a separate list. To ensure that my app would be more
          user-friendly, I needed to research what makes a filtering and sorting
          function easy to use.{" "}
        </div>
        <div className="section">
          <h2>The process ✎</h2>
          <hr />
          <h3>Competitive Analysis</h3>
          <p>
            I wanted to compare a variety of companies, so I chose to compare
            the favoriting functions between{" "}
            <a className="bold underlined" href="https://www.crunchyroll.com/">
              Crunchyroll
            </a>
            , a platform for streaming shows and movies,{" "}
            <a className="bold underlined" href="https://github.com/">
              Github
            </a>
            , a platform for creating and sharing code, and{" "}
            <a className="bold underlined" href="https://www.yelp.com/">
              Yelp
            </a>
            , a platform for discovering and reviewing businesses. All three
            allow users to keep track of their favorite shows, projects, and
            businesses (respectively) and filter and sort within their favorited
            items.
          </p>
          <div className="spanImg">
            <div className="spanComponent">
              <h4 className="bold">Crunchyroll</h4>
              <div className="imgContainer ">
                <img
                  className="screenshot"
                  src={Crunchyroll}
                  alt="Crunchyroll favoriting feature"
                ></img>
              </div>
            </div>
            <div className="spanComponent">
              <h4 className="bold">Github</h4>
              <div className="imgContainer ">
                <img
                  className="screenshot"
                  src={Github}
                  alt="Github favoriting feature"
                ></img>
              </div>
            </div>
            <div className="spanComponent">
              <h4 className="bold">Yelp</h4>
              <div className="imgContainer ">
                <img
                  className="screenshot"
                  src={Yelp}
                  alt="Yelp favoriting feature"
                ></img>
              </div>
            </div>
          </div>
          <hr className="spacing" />
          <h3 className="bold">Competitive Comparison Chart</h3>
          <p>
            In order to understand what worked well for each page, I looked at
            the following features related to filtering and sorting.
          </p>
          <div className="spanImg">
            <table>
              <colgroup>
                <col />
              </colgroup>
              <tr>
                <td></td>
                <th>Crunchyroll</th>
                <th>Github</th>
                <th>Yelp</th>
              </tr>
              <tr>
                <td>
                  Includes a button that says “sort by” to indicate sorting
                  functionality.
                </td>
                <td>
                  <span className="bold">No</span>
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
              </tr>
              <tr>
                <td>
                  Adding and removing an item to and from favorites is one step.
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
                <td>
                  <span className="bold">No</span>
                </td>
              </tr>
              <tr>
                <td>Filters displayed by category.</td>
                <td>
                  <span className="bold">No</span>
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
              </tr>
              <tr>
                <td>Has option to reset filters.</td>
                <td>
                  <span className="bold">Yes</span>
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
                <td>
                  <span className="bold">No</span>
                </td>
              </tr>
              <tr>
                <td>
                  Favorite items displayed as list with most recent added on
                  top.
                </td>
                <td>
                  <span className="bold">No</span>
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
              </tr>
              <tr>
                <td>Text changes to indicate selected sort / filter. </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
                <td>
                  <span className="bold">No</span>
                </td>
              </tr>
              <tr>
                <td>
                  Favorited items have same layout as original list items.{" "}
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
                <td>
                  <span className="bold">Yes</span>
                </td>
                <td>
                  <span className="bold">No</span>
                </td>
              </tr>
            </table>
          </div>
          <hr className="spacing" />
          <h3 className="bold">Findings</h3>
          <p>
            When comparing the three pages, I took note of the specific features
            that I liked and why they worked well, and then categorized them
            into the following groups. This helped me focus on what I needed to
            prioritize.
          </p>
          <ul>
            <li>
              <span className="bold">Functionality:</span> Crunchyroll's
              favoriting feature was most easy to use because it allowed users
              to select and deselect in one simple step, without needing to
              refresh or click out. Crunchyroll and Github both had reset
              options, which were convenient for when I needed to search for
              something else.
            </li>
            <li>
              <span className="bold">Layout:</span> Crunchyroll's grid layout
              worked well because its images stood out, allowing for quick
              scanning. All three pages grouped the sort and filter functions
              together in a line, which made it more clear where to look.
            </li>
            <li>
              <span className="bold">Labels:</span> The features with more
              explicit labels, like the "sort by" buttons, the "selected
              filters" text, and the changing headers based on the sort, worked
              well because they were explicit. These labels helped me figure out
              what I needed to click and what I already changed.
            </li>
            <li>
              <span className="bold">Buttons:</span> All websites used icons to
              represent the favoriting function, which looked simple but still
              felt effective in signaling the favorites feature, most likely due
              to convention. Github and Yelp had dropdown buttons for the
              filters, which made it obvious to the user that there are multiple
              options to choose from based on category.
            </li>
          </ul>
          <hr className="spacing" />
          <h3 className="bold">Implementation Plan</h3>
          <p>
            Based on what worked well, I chose to implement the following
            features.
          </p>
          <ul>
            <li>
              <p>A dropdown sort button that is labeled “Sort By”</p>
            </li>
            <li>
              <p>
                Dropdown filter buttons for each filter type (on the same line
                as the sort button)
              </p>
            </li>
            <li>
              <p>A button to clear all filters at once</p>
            </li>
            <li>
              <p>
                Icon to represent the favorite button, which can add and remove
                from the favorite list in one click
              </p>
            </li>
            <li>
              <p>Grid layout to display all items, including the favorites</p>
            </li>
            <li>
              <p>
                A header that changes according to the sort selected, and text
                indicating which filters are selected
              </p>
            </li>
            <li>
              <p>
                Different layout between a favorited item and a list item. Less
                information in the favorited item.
              </p>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>The Solution ✩</h2>
          <hr />
          <h3 className="bold">Goals For My App</h3>
          <p>
            After doing research, I began to focus on my own my movie-tracker
            app and how I wanted it to work. I wanted to include data like the
            title, date of release, rating, duration, and genre tags for each
            movie. Based on this data, I began to put the sorting, filtering,
            and favoriting functions into the context of my app:
          </p>
          <div className="imgContainer">
            <img
              className="screenshot"
              src={MovieGoals}
              alt="goals for my movie tracking app"
            />
          </div>
          <hr className="spacing" />
          <h3>Additional Design Choices</h3>
          <p>
            While the competitive analysis helped me structure the major
            components (filtering, sorting, favoriting), I had to consider other
            design deicions as well, such as layout choices and extra
            functionalities related to movie-tracking specifically. I ended up
            making the following choices while implementing the page:
          </p>
          <ul>
            <li>
              <span class="bold">Favorite List:</span> I chose to display the
              favorites on the top because as the user browses movies and
              scrolls down, they can use the scroll to top button to immediately
              get to the favorites.
            </li>
            <li>
              <p>
                <span class="bold">Favorite Card:</span> I chose to display the
                favorite card differently from the movie card by using a
                horizontal layout because I wanted a clear visual distinction
                between the two types. Plus, the favorite card has less
                information to display.{" "}
              </p>
            </li>
            <li>
              <p>
                <span class="bold">Genre Tags:</span> On each movie card, the
                genre tag is clickable and will automatically filter for all
                movies that fall under that genre. This is to help the user in
                filtering (especially if they don't want to scroll all the way
                up).
              </p>
            </li>
          </ul>
          <hr className="spacing" />
          <h3>My App</h3>
          <p>
            Here is the final page I implemented using React, HTML, and CSS.
          </p>
          <div className="imgContainer">
            <img
              className="screenshot"
              src={MyApp}
              alt="My movie tracker's favoriting feature"
            ></img>
          </div>
          <p>
            To visit the page directly, click{" "}
            <a
              className="bold"
              href="https://development-movie-tracker.vercel.app/"
            >
              here!
            </a>
          </p>
        </div>
        <div className="section">
          <h2>Takeaways ☺</h2>
          <hr />
          <p>
            After working on this project, I can see how important it is to do a
            copmarison between different websites. I found it helpful that I
            could take inspiration from other designs and reuse some feature
            ideas for my own page. As for the implementation process, I thought
            it was challenging because I struggled to keep components
            consistently updated according to the state (like the heart icon,
            for example). However, after working through those issues, I feel
            like a bit more comfortable using React and MaterialUI. If I were to
            build on this project, I might add even more filtering functions,
            like a search by text feature.
          </p>
        </div>
      </div>
    </div>
  );
}

import '../css_files/App.css';
import '../css_files/HomePage.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Project } from "./Project.js"

export function HomePage() {



    return (
        <div id="mainFrame">
            <div id="intro">
                <h1 id="hello"> HI, I'M BEAR</h1>
                <div id="blurb">
                    <p class="blurbText">I'm a student at <a href="https://www.brown.edu/">Brown University</a>, concentrating in Computer Science and Business Economics. </p>
                </div>
                <AnchorLink href='#contact'><button id="introButton">CONTACT ME</button></AnchorLink>
            </div>
            <div id="projects">
                <h1 class="sectionTitle">PROJECTS</h1>
                <Project projectRowStyle={"projectRow"} projectImage={"/spiral_notebook.jpg"} imgAltTag={"Image of the story board."} imgStyleID={"personasImage"} websiteLink={"https://boredbear123.github.io/cs1300-person-storyboard/"} buttonText={"VIEW PROCESS"} projectTitle={"PERSONAS & STORYBOARDING"} description={"Focused on the interface of a dorm microwave. Created personas, to describe potential users, and a storyboard to outline a common interaction  users may have with the interface. "}></Project>

                <Project projectRowStyle={"projectRowReverse"} projectImage={"/Caliente Redesign.jpg"} imgAltTag={"Image of the Caliente Redesign on different screen sizes."} imgStyleID={"calientesImage"} websiteLink={"https://boredbear123.github.io/responsive_redesign_submission/"} buttonText={"VIEW PROCESS"} projectTitle={"CALIENTES REDESIGN"} description={"Created a responsive redesign of the Calientes Mexican Grille website to enhance readability and accessibility. "}></Project>
                <Project projectRowStyle={"projectRow"} projectImage={"/iterativeDesign.jpg"} imgAltTag={"Image of the Novig webstie on a laptop."} imgStyleID={"calientesImage"} websiteLink={"https://www.figma.com/proto/7HOfRo6Q77w6tVwlqVKFxT/Iterative-Design?node-id=1%3A4&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A4"} buttonText={"VISIT WEBSITE"} projectTitle={"ITERATIVE DESIGN"} description={"Iteratively desgined a sports betting website based off feedback from fellow designers."}></Project>
                <Project projectRowStyle={"projectRowReverse"} projectImage={"/developmentImage.jpg"} imgAltTag={"Image of the sneaker website one a laptop."} imgStyleID={"calientesImage"} websiteLink={"https://boredbear123.github.io/development/"} buttonText={"VISIT WEBSITE"} projectTitle={"WEBSITE DEVELOPMENT"} description={"Devloped an interactive online store for Air Jordan Sneakers, where you can filter and sort the products, and even add sneakers to your cart."}></Project>

            </div>
            <div id="aboutMe">
                <h1 class="sectionTitle">ABOUT ME</h1>
                <div id="aboutMeBlock">
                    <div id="aboutMeContent">
                        <img id="aboutMeImg" src="/boredBearAnimation.jpg" />
                        <div id="aboutMeInfo">
                            <p id="aboutMeText">I'M A VISUAL WEB DESIGNER FOCUSED ON CREATING EFFICIENT AND ACCESSIBLE INTERFACES.
                            </p>
                            <p id="aboutMeText2">There is no better feeling then easily naviagating an interface because the
                                information is presented in a visual hierarchy and all the actions of interactive elements are intuitive.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact">
                <h1 class="sectionTitle">CONTACT ME </h1>
                <div id="contactInfo">
                    <p class="blurbText">Email me at <a href="mailto: bored_bear@brown.edu">bored_bear@brown.edu</a></p>
                </div>
            </div>
        </div>
    );
}
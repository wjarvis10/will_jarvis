import '../css_files/App.css';
import '../css_files/HomePage.css';
import '../css_files/Project.css'
import { ButtonToSite } from './ButtonToSite.js'
export function Project({ projectRowStyle, projectImage, imgAltTag, imgStyleID, websiteLink, buttonText, projectTitle, description }) {

    return (
        <div class={projectRowStyle}>
            {/* <iframe class="website" src={websiteLink}></iframe> */}
            <img id={imgStyleID} alt={imgAltTag} src={projectImage}></img>
            <div class="projectDetails">
                <div>
                    <h1 class="projectTitle">{projectTitle}</h1>
                    <p class="projectDescription">{description}</p>
                    <ButtonToSite websiteLink={websiteLink} buttonText={buttonText}></ButtonToSite>
                </div>
            </div>
        </div>
    );
}
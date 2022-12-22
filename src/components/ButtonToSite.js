import '../css_files/App.css';
import '../css_files/HomePage.css';
import '../css_files/ButtonToSite.css';

export function ButtonToSite({ websiteLink, buttonText }) {
    return (
        <a href={websiteLink}>
            <button class="websiteButton">{buttonText}</button>
        </a>
    );
}
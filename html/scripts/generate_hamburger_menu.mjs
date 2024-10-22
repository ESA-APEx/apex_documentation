import {fetchHeaderHTML, prependImageSources, prependLinks, writeToFile} from "./utils.mjs";

export const generateHamburgerMenu = async(url) => {
    const filePath = '../apex-hamburger-menu.html'; // Path to the file where content will be saved

    const headerSelector = '.js-hamburger-menu'; // Replace with your desired selector

    // Fetch the header from the main website
    let headerHTML = await fetchHeaderHTML(url, headerSelector);

    if (headerHTML) {
        // Prepend base URL to image sources
        headerHTML = prependImageSources(headerHTML, url);

        // Prepend base URL to links
        headerHTML = prependLinks(headerHTML, url);

        // Cleanup
        headerHTML = headerHTML.replace(/<\/?(html|head|body)[^>]*>/g, '');

        await writeToFile(headerHTML, filePath);
    } else {
        console.log('No hamburger menu found at the specified URL.');
    }
}

(async () => await generateHamburgerMenu() )();

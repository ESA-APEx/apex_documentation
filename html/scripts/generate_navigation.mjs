import {fetchHeaderHTML, prependImageSources, prependLinks, transformHTML, wrapInDiv, writeToFile} from "./utils.mjs";

export const generateHeader = async() => {
    const url = 'https://apex-esa.drupal.int.vito.be/';
    const title = "APEx Documentation Portal"
    const filePath = '../apex-navigation.html'; // Path to the file where content will be saved

    const headerSelector = '.c-header__bottom'; // Replace with your desired selector

    // Fetch the header from the main website
    const headerHTML = await fetchHeaderHTML(url, headerSelector);

    if (headerHTML) {
        // Set the title in the header
        let transformedHTML = transformHTML(headerHTML, 'a.c-header__logo', title);

        // Prepend base URL to image sources
        transformedHTML = prependImageSources(transformedHTML, url);

        // Prepend base URL to links
        transformedHTML = prependLinks(transformedHTML, url);

        // Wrap the transformed HTML in a div with class "container"
        transformedHTML = wrapInDiv(transformedHTML, 'container');

        // Cleanup
        transformedHTML = transformedHTML.replace(/<\/?(html|head|body)[^>]*>/g, '');

        await writeToFile(transformedHTML, filePath);
    } else {
        console.log('No header found at the specified URL.');
    }
}

// Example usage: Fetch the HTML of the header from a URL
(async () => await generateHeader())();

import {fetchHTML, prependImageSources, prependLinks, transformHTML, wrapInDiv, writeToFile} from "./utils.mjs";

export const generateHeader = async(url) => {
    const title = "APEx Documentation Portal"
    const filePath = '../apex-navigation.html'; // Path to the file where content will be saved

    const headerSelector = '.c-header__bottom'; // Replace with your desired selector

    // Fetch the header from the main website
    const headerHTML = await fetchHTML(url, headerSelector);

    if (headerHTML) {
        // Prepend base URL to image sources
        let transformedHTML = prependImageSources(headerHTML, url);

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

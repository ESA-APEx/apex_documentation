import {fetchHTML, prependImageSources, prependLinks, writeToFile} from "./utils.mjs";

export const generateFooter = async (url) => {

    const filePath = '../apex-footer.html'; // Path to the file where content will be saved

    const headerSelector = '.c-footer'; // Replace with your desired selector

    // Fetch the header from the main website
    let headerHTML = await fetchHTML(url, headerSelector);

    if (headerHTML) {
        // Prepend base URL to image sources
        headerHTML = prependImageSources(headerHTML, url);

        // Prepend base URL to links
        headerHTML = prependLinks(headerHTML, url);

        // Cleanup
        headerHTML = headerHTML.replace(/<\/?(html|head|body)[^>]*>/g, '');

        await writeToFile(headerHTML, filePath);
    } else {
        console.log('No footer found at the specified URL.');
    }
}

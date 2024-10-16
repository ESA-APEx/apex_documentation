import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { promises as fs } from 'fs';


/**
 * Function to fetch the full HTML structure of a header (or any element) from a given URL using Node.js.
 * @param {string} url - The URL of the page to fetch.
 * @param {string} headerSelector - The CSS selector for the header element (e.g., 'header', '#main-header').
 * @returns {Promise<string|null>} - A promise that resolves to the HTML of the header, or null if not found.
 */
async function fetchHeaderHTML(url, headerSelector) {
    try {
        // Fetch the HTML content of the specified URL
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch page: ${response.statusText}`);
        }

        // Load the HTML content into Cheerio
        const htmlText = await response.text();
        const $ = cheerio.load(htmlText);

        // Query for the specified header element
        const headerElement = $(headerSelector);

        if (!headerElement.length) {
            console.warn(`Header element not found for selector: ${headerSelector}`);
            return null;
        }

        // Return the outer HTML of the header element
        return $.html(headerElement);
    } catch (error) {
        console.error('Error fetching or parsing the page:', error);
        return null;
    }
}


/**
 * Function to write content to a file.
 * @param {string} content - The content to write to the file.
 * @param {string} filePath - The path where the file should be written.
 * @returns {Promise<void>}
 */
async function writeToFile(content, filePath) {
    try {
        await fs.writeFile(filePath, content, 'utf8');
        console.log(`File written successfully to ${filePath}`);
    } catch (error) {
        console.error(`Error writing file: ${error.message}`);
    }
}

/**
 * Function to replace the content of elements with a specified class.
 * @param {string} html - The HTML content to transform.
 * @param {string} selector - The selector for the elements whose content will be replaced.
 * @param {string} newContent - The new content to replace the existing content.
 * @returns {string} - The transformed HTML content.
 */
function transformHTML(html, selector, newContent) {
    const $ = cheerio.load(html);

    // Replace the content of elements with the specified class
    $(selector).html(newContent);

    // Return the modified HTML as a string
    return $.html();
}

/**
 * Function to prepend base URL to links that do not start with http or https.
 * @param {string} html - The HTML content to transform.
 * @param {string} baseUrl - The base URL to prepend to relative links.
 * @returns {string} - The transformed HTML content with modified links.
 */
function prependLinks(html, baseUrl) {
    const $ = cheerio.load(html);

    // Prepend base URL to links that do not start with http or https
    $('a').each((index, element) => {
        const href = $(element).attr('href');
        if (href && !/^https?:\/\//i.test(href)) {
            // Prepend base URL if the link is relative
            $(element).attr('href', new URL(href, baseUrl).href);
        }
    });

    // Return the modified HTML as a string
    return $.html();
}

/**
 * Function to prepend base URL to image sources that do not start with http or https.
 * @param {string} html - The HTML content to transform.
 * @param {string} baseUrl - The base URL to prepend to relative image sources.
 * @returns {string} - The transformed HTML content with modified image sources.
 */
function prependImageSources(html, baseUrl) {
    const $ = cheerio.load(html);

    // Prepend base URL to image sources that do not start with http or https
    $('img').each((index, element) => {
        const src = $(element).attr('src');
        if (src && !/^https?:\/\//i.test(src)) {
            // Prepend base URL if the source is relative
            $(element).attr('src', new URL(src, baseUrl).href);
        }
    });

    // Return the modified HTML as a string
    return $.html();
}

/**
 * Function to wrap the HTML content in a div with a specified class.
 * @param {string} html - The HTML content to wrap.
 * @param {string} wrapperClass - The class name for the wrapper div.
 * @returns {string} - The wrapped HTML content.
 */
function wrapInDiv(html, wrapperClass) {
    return `<div class="${wrapperClass}">${html}</div>`;
}


// Example usage: Fetch the HTML of the header from a URL
fetchHeaderHTML('https://apex-esa.drupal.int.vito.be/', '.c-header__bottom')
    .then(headerHTML => {
        if (headerHTML) {
            console.log('Fetched Header HTML:', headerHTML);
        } else {
            console.log('No header found at the specified URL.');
        }
    });

(async () => {
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
})();

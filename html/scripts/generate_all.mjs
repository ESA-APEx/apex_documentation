import {generateHeader} from "./generate_navigation.mjs";
import {generateFooter} from "./generate_footer.mjs";
import {generateHamburgerMenu} from "./generate_hamburger_menu.mjs";

(async () => {

    const url = 'https://apex.esa.int/';

    console.log("Generating APEx header");
    await generateHeader(url);

    console.log("Generating APEx footer");
    await generateFooter(url);

    console.log("Generating APEx hamburger menu");
    await generateHamburgerMenu(url);
})();

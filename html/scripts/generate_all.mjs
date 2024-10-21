import {generateHeader} from "./generate_navigation.mjs";
import {generateFooter} from "./generate_footer.mjs";
import {generateHamburgerMenu} from "./generate_hamburger_menu.mjs";

(async () => {
    console.log("Generating APEx header");
    await generateHeader();

    console.log("Generating APEx footer");
    await generateFooter();

    console.log("Generating APEx hamburger menu");
    await generateHamburgerMenu();
})();

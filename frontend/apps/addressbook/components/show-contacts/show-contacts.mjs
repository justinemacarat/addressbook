/* 
 * (C) 2020 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";

const showContacts = async () => {
    const apiResponse = await apiman.rest(APP_CONSTANTS.API_GET_CONTACTS, "POST", {}, true);
    if(!apiResponse) return router.loadPage(APP_CONSTANTS.MAIN_HTML);
    show_contacts.bindData(apiResponse.results);
}

function register() {
    // convert this all into a WebComponent so we can use it
    monkshu_component.register("show-contacts", `${APP_CONSTANTS.APP_PATH}/components/show-contacts/show-contacts.html`, show_contacts);
}

const trueWebComponentMode = true;	// making this false renders the component without using Shadow DOM

export const show_contacts = { trueWebComponentMode, register, showContacts}
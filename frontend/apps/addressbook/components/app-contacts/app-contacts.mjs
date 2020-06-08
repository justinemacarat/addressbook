/* 
 * (C) 2020 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";

const addContact = async () => {
    const apiPayloads = {
        firstname: app_contacts.shadowRoot.querySelector('#fname').value,
        lastname: app_contacts.shadowRoot.querySelector('#lname').value,
        phone: app_contacts.shadowRoot.querySelector('#phone').value,
        email: app_contacts.shadowRoot.querySelector('#email').value,
    }
    const apiResponse = await apiman.rest(APP_CONSTANTS.API_ADD_CONTACT, "POST", apiPayloads, true);
    if(!apiResponse) return router.loadPage(APP_CONSTANTS.MAIN_HTML);
    router.reload();
    console.log(apiResponse);
}

function register() {
    // convert this all into a WebComponent so we can use it
    monkshu_component.register("app-contacts", `${APP_CONSTANTS.APP_PATH}/components/app-contacts/app-contacts.html`, app_contacts);
}

const trueWebComponentMode = true;	// making this false renders the component without using Shadow DOM

export const app_contacts = { trueWebComponentMode, register, addContact}
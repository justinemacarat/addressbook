/* 
 * (C) 2020 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";

const updateContacts = async () => {
    const apiPayloads = {
        contact_id: update_contacts.shadowRoot.querySelector('#contact_id').value,
        firstname: update_contacts.shadowRoot.querySelector('#fname').value,
        lastname: update_contacts.shadowRoot.querySelector('#lname').value,
        phone: update_contacts.shadowRoot.querySelector('#phone').value,
        email: update_contacts.shadowRoot.querySelector('#email').value,
    }
    const apiResponse = await apiman.rest(APP_CONSTANTS.API_UPDATE_CONTACTS, "POST", apiPayloads, true);
    if(!apiResponse) return router.loadPage(APP_CONSTANTS.MAIN_HTML);
    router.reload();
    console.log(apiResponse);
}

const deleteContacts = async () => {
    const apiPayloads = {
        contact_id: update_contacts.shadowRoot.querySelector('#contact_id').value,
    }
    const apiResponse = await apiman.rest(APP_CONSTANTS.API_DELETE_CONTACTS, "POST", apiPayloads, true);
    if(!apiResponse) return router.loadPage(APP_CONSTANTS.MAIN_HTML);
    router.reload();
    console.log(apiResponse);
}

function register() {
    // convert this all into a WebComponent so we can use it
    monkshu_component.register("update-contacts", `${APP_CONSTANTS.APP_PATH}/components/update-contacts/update-contacts.html`, update_contacts);
}

const trueWebComponentMode = true;	// making this false renders the component without using Shadow DOM

export const update_contacts = { trueWebComponentMode, register, updateContacts, deleteContacts}
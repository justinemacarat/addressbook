/* 
 * (C) 2020 TekMonks. All rights reserved.
 * License: MIT - see enclosed LICENSE file.
 */

// Custom modules
const API_CONSTANTS = require(`${CONSTANTS.APPROOTDIR}/addressbook/apis/lib/constants`);
const db = require(`${API_CONSTANTS.LIB_PATH}/db`);

exports.doService = async jsonReq => {
    // Validate API request and check mandatory payload required
    if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

    try {
        const addedContact = await addContact(jsonReq);
        if (!addedContact) return API_CONSTANTS.API_RESPONSE_FALSE;
        return { result: true, results: { addedContact } };
    } catch (error) {
        console.error(error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

const addContact = async (jsonReq) => {
    try {
        const queryParams = {
            "firstname":jsonReq.firstname,
            "lastname":jsonReq.lastname,
            "phone":jsonReq.phone,
            "email":jsonReq.email
        };
        if(! await db.simpleInsert('contacts', queryParams)) return false;
        return true;
        } catch (error) {
        throw error;
    }
}

const validateRequest = jsonReq => (jsonReq && jsonReq.firstname && jsonReq.lastname && jsonReq.phone && jsonReq.email);

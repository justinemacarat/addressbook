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
        const contacts = await getContact(jsonReq);
        if (!contacts) return API_CONSTANTS.API_RESPONSE_FALSE;
        return { result: true, results: { contacts } };
    } catch (error) {
        console.error(error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

const getContact = async (jsonReq) => {
    try {
        const contacts = await db.simpleSelect('SELECT * FROM contacts WHERE row_status=1');
        if(!contacts) return false;
        return contacts;
        } catch (error) {
        throw error;
    }
}

const validateRequest = jsonReq => (jsonReq);

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
        const contacts = await updateContacts(jsonReq);
        if (!contacts) return API_CONSTANTS.API_RESPONSE_FALSE;
        return { result: true, results: { contacts } };
    } catch (error) {
        console.error(error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

const updateContacts = async (jsonReq) => {
    try {
        const queryParams = [jsonReq.firstname, jsonReq.lastname, jsonReq.phone, jsonReq.email, jsonReq.contact_id];
        const query = `UPDATE contacts SET firstname=?, lastname=?, phone=?, email=? WHERE contact_id=?`;
        const contacts = await db.simpleUpdate(query, queryParams);
        if(!contacts) return false;
        return contacts;
        } catch (error) {
        throw error;
    }
}

const validateRequest = jsonReq => (jsonReq && jsonReq.firstname && jsonReq.lastname && jsonReq.phone && jsonReq.email && jsonReq.contact_id);

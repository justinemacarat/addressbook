/* 
 * (C) 2020 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */
const FRONTEND = "http://localhost:7070";
const BACKEND = "http://localhost:9090";
const APP_NAME = "addressbook";
const APP_PATH = `${FRONTEND}/apps/${APP_NAME}`;

export const APP_CONSTANTS = {
    FRONTEND, BACKEND, APP_PATH, APP_NAME,
    MESSAGE_HTML: APP_PATH + "/message.html",
    RANDOM_HTML: APP_PATH + "/random.html",
    MAIN_HTML: APP_PATH + "/main.html",

    SESSION_NOTE_ID: "com_monkshu_ts",

    API_ADD_CONTACT: `${BACKEND}/apis/add-contact`,
    API_GET_CONTACTS: `${BACKEND}/apis/get-contacts`,
    API_UPDATE_CONTACTS: `${BACKEND}/apis/update-contacts`,
    API_DELETE_CONTACTS: `${BACKEND}/apis/delete-contacts`,

    USERID: "id",
    USER_ROLE: "user",
    GUEST_ROLE: "guest",
    PERMISSIONS_MAP: {
        user: [APP_PATH + "/main.html", $$.MONKSHU_CONSTANTS.ERROR_THTML],
        guest: [APP_PATH + "/main.html", $$.MONKSHU_CONSTANTS.ERROR_THTML]
    },
    API_KEYS: { "*": "uiTmv5YBOZMqdTb0gekD40PnoxtB9Q0k" },
    KEY_HEADER: "X-API-Key"
}
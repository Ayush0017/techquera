var server = "http://localhost:8989";

export default {
    SAVE_USER : server + "/user/saveuser",
    LOGIN_USER : server + "/user/loginuser",
    CHECK_SESSION : server + "/user/checksession",
    LOGOUT : server + "/user/logout",

    ASK : server + "/user/ask",
    LOAD_QUERY : server + "/user/loadquery",
    LOAD_OTHER_QUERY : server + "/user/loadotherquery",

    SEND_ANSWER : server + "/user/sendans",
    UPLOAD_FILE : server + "/user/uploadpic"
}

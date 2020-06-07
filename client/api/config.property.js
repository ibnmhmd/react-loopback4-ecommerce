const USERS_ROOT = "/users";
const BASKET_ROOT = "/basket";
const REGISTER = USERS_ROOT;
const LOGIN = `${USERS_ROOT}/login`;
const GET_PROFILE = `${USERS_ROOT}/getProfile`;
const GET_NAV_MENUS = '/navigation-menus';
const CHECK_JWT = `${USERS_ROOT}/checkJWT`;
const ADD_TO = [`${BASKET_ROOT}/addToCart`, `${BASKET_ROOT}/addToWishlist`, `${BASKET_ROOT}/addToSavedForLater`];
const DELETE_FROM = [`${BASKET_ROOT}/deleteFromCart`, `${BASKET_ROOT}/deleteFromWishlist`, `${BASKET_ROOT}/deleteFromSavedForLater`];
module.exports = {
    USERS_ROOT,
    REGISTER,
    LOGIN,
    GET_PROFILE,
    GET_NAV_MENUS,
    CHECK_JWT,
    ADD_TO,
    DELETE_FROM
}
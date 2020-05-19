const getCustomerProfile = () => {
    const profile = localStorage.getItem("customerProfile");
    if(profile) {
        return JSON.parse(profile);
    }else{
        return {};
    }
}
const isUserLoggedIn = () => {
    const profile = getCustomerProfile();
    if(profile && profile.status && "loggedIn" == profile.status){
        return true;
    }else{
        return false;
    }
}
const signOut = () => {
    clearItem("customerProfile");
    return true;
}
const clearItem = (item) => {
    localStorage.removeItem(item);
}
module.exports = {
    getCustomerProfile,
    isUserLoggedIn,
    signOut
}
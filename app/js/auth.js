function getToken() {
    return localStorage.getItem('graphjs_token');
}

function setToken(token) {
    localStorage.setItem('graphjs_token', token);
}

function clearToken(token) {
    localStorage.clear('graphjs_token');
}

function isLoggedIn() {
    return !! getToken();
}

module.exports = {
    getToken,
    setToken,
    clearToken,
    isLoggedIn,
};

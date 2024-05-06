"use client"
const logout = function () {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.push('/');
}
export default logout;
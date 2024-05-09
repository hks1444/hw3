"use client"
const logout = function () {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role')
    this.router.push('/');
}
export default logout;
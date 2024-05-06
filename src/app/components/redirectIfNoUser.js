"use client"
const redirectIfNoUser = async (router) => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    console.log(username, password);
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    if (response.status !== 200) {
        router.push('/');
    }
};
export default redirectIfNoUser;
"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import renderAddUser from "../components/addUser.data";
import logout from "../components/logout";
import redirectIfNoUser from "../components/redirectIfNoUser";
import renderUpdateStadium from "../components/updateStadium.data";


export default function Home() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState('');
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const bindlogout = logout.bind({ router: router });
    useEffect(() => {
        setUsername(localStorage.getItem('username'));
        setPassword(localStorage.getItem('password'));
        redirectIfNoUser(router)
    }, []);
    const submitAddUser = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('type', selectedOption);
        formData.append('username', username);
        formData.append('password', password);
        const data = Object.fromEntries(formData);
        console.log(password, username);
        try {
            const response = await fetch(`/api/addUser`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.status === 200) {
                window.location.reload();
            } else {
                setError('Cannot add user. Please enter correct information or your credentials are not valid.');
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            setError('An unexpected error occurred');
        }
    };
    const submitStadium = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('username', username);
        formData.append('password', password);
        const data = Object.fromEntries(formData);
        console.log(password, username);
        try {
            const response = await fetch(`/api/updateStadium`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.status === 200) {
                window.location.reload();
            } else {
                setError('Cannot change the name of the stadium. Please enter correct information or your credentials are not valid.');
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            setError('An unexpected error occurred');
        }
    };

    return (
        <main className="main">
            <h1>DB Manager</h1>
            {error && <p>{error}</p>}
            <div className="button">
                <h2>Add User</h2>
                <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="player">player</option>
                    <option value="jury">jury</option>
                    <option value="coach">coach</option>
                </select>
                {renderAddUser(selectedOption, submitAddUser)}
            </div>
            <div className="button">
                {renderUpdateStadium(submitStadium)}
            </div>
            <button onClick={bindlogout}>Log Out</button>
        </main >
    );
}

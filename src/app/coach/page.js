"use client"
import { useRouter } from "next/navigation";
import logout from "../components/logout";
import redirectIfNoUser from "../components/redirectIfNoUser";
import { useEffect, useState } from "react";
import renderCreateSquad from "../components/createSquad.data";
import renderDeleteMatchSession from "../components/deleteMatchSession.data";
import renderAddMatchSession from "../components/addMatchSession.data";


export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSeeStadium, setIsSeeStadium] = useState(false);
  const [Stadiums, setStadiums] = useState('');
  const bindlogout = logout.bind({ router: router });
  useEffect(() => {
    setUsername(localStorage.getItem('username'));
    setPassword(localStorage.getItem('password'));
    redirectIfNoUser(router);
    const role = localStorage.getItem('role');
    if (role !== 'coach') {
      if (role === null) {
        router.push(`/`);
      } else {
        router.push(`/${role}`);
      }
    }
  }, []);
  const seeStadiums = async () => {
    const response = await fetch(`/api/seeStadiums`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role: localStorage.getItem('role') }),
    });
    const data = await response.json();
    const temp = data.stadiums.join(", ");
    setStadiums(temp);
    setIsSeeStadium(true);
  };
  const submitDelete = async (e) => {
    e.preventDefault();
    setIsSeeStadium(false);
    const formData = new FormData(e.target);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('role', localStorage.getItem('role'));
    const data = Object.fromEntries(formData);
    console.log(password, username);
    try {
      const response = await fetch(`/api/deleteMatchSession`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        window.location.reload();
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('An unexpected error occurred');
    }
  }
  const submitAdd = async (e) => {
    e.preventDefault();
    setIsSeeStadium(false);
    const formData = new FormData(e.target);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('role', localStorage.getItem('role'));
    const data = Object.fromEntries(formData);
    console.log(password, username);
    try {
      const response = await fetch(`/api/addMatchSession`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        window.location.reload();
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('An unexpected error occurred');
    }
  }
  const submitSquad = async (e) => {
    e.preventDefault();
    setIsSeeStadium(false);
    const formData = new FormData(e.target);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('role', localStorage.getItem('role'));
    const data = Object.fromEntries(formData);
    console.log(password, username);
    try {
      const response = await fetch(`/api/createSquad`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        window.location.reload();
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('An unexpected error occurred');
    }
  }
  return (
    <main className="main">
      <h1>Coach</h1>
      {error && <p>{error}</p>}
      {renderDeleteMatchSession(submitDelete)}
      {renderAddMatchSession(submitAdd)}
      {renderCreateSquad(submitSquad)}
      <div className="button">
        <button onClick={seeStadiums}>See Stadiums</button>
        {isSeeStadium ? <p>{Stadiums}</p> : <p>...</p>}
      </div>
      <button onClick={bindlogout}>Log Out</button>
    </main >
  );
}

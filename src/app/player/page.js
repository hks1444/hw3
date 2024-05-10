"use client"
import { useRouter } from "next/navigation";
import logout from "../components/logout";
import redirectIfNoUser from "../components/redirectIfNoUser";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [height, setHeight] = useState('');
  const [isSeeHeight, setIsSeeHeight] = useState(false);
  const [others, setOthers] = useState('');
  const [isOthers, setIsOthers] = useState(false);
  const bindlogout = logout.bind({ router: router });
  const [error, setError] = useState('');
  useEffect(() => {
    setUsername(localStorage.getItem('username'));
    setPassword(localStorage.getItem('password'));
    redirectIfNoUser(router);
    const role = localStorage.getItem('role');
    if (role !== 'player') {
      if (role === null) {
        router.push(`/`);
      } else {
        router.push(`/${role}`);
      }
    }
  }, []);
  const seeHeight = async () => {
    const response = await fetch(`/api/seeHeight`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role: localStorage.getItem('role') }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setHeight(data.height);
      setIsSeeHeight(true);
      setIsOthers(false);
      setError('');
    } else {
      setError(data.error);
    }
  };
  const seeOthers = async () => {
    const response = await fetch(`/api/seeOtherPlayers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role: localStorage.getItem('role') }),
    });
    const data = await response.json();
    if (response.status === 200) {
      const temp = data.others.join("\n");
      console.log(temp);
      setOthers(temp);
      setIsSeeHeight(false);
      setIsOthers(true);
      setError('');
    } else {
      setError(data.error);
    }

  };
  return (
    <main className="main">
      <h1>Player</h1>
      {error && <p>{error}</p>}
      <div className="button">
        <button onClick={seeOthers}>See other players played with you</button>
        {isOthers ? <p>{others}</p> : <p>...</p>}
      </div>
      <div className="button">
        <button onClick={seeHeight}>See the height of the player who played with you most</button>
        {isSeeHeight ? <p>{height}</p> : <p>...</p>}
      </div>
      <button onClick={bindlogout}>Log Out</button>
    </main>
  );
}
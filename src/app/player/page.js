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
  useEffect(() => {
    setUsername(localStorage.getItem('username'));
    setPassword(localStorage.getItem('password'));
    redirectIfNoUser(router)
  }, []);
  const seeHeight = async () => {
    const response = await fetch(`/api/seeHeight`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setHeight(data.height);
    setIsSeeHeight(true);
    setIsOthers(false);
  };
  const seeOthers = async () => {
    const response = await fetch(`/api/seeOtherPlayers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    const temp = data.others.join("\n");
    console.log(temp);
    setOthers(temp);
    setIsSeeHeight(false);
    setIsOthers(true);
  };
  return (
    <main className="main">
      <h1>Player</h1>
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
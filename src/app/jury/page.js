"use client"
import { useRouter } from "next/navigation";
import logout from "../components/logout";
import redirectIfNoUser from "../components/redirectIfNoUser";
import { useEffect, useState } from "react";
import renderAddUser from "../components/addUser.data";
import renderRate from "../components/rate.data";



export default function Home() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSeeAvgCount, setIsSeeAvgCount] = useState(false);
  const [Avg, setAvg] = useState('');
  const [Count, setCount] = useState('');
  const bindlogout = logout.bind({ router: router });
  useEffect(() => {
    setUsername(localStorage.getItem('username'));
    setPassword(localStorage.getItem('password'));
    redirectIfNoUser(router)
  }, []);
  const seeAvgCount = async () => {
    const response = await fetch(`/api/seeAvg`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setAvg(data.average);
    setCount(data.count);
    setIsSeeAvgCount(true);
  };
  const submitRating = async (e) => {
    e.preventDefault();
    setIsSeeAvgCount(false);
    const formData = new FormData(e.target);
    formData.append('username', username);
    formData.append('password', password);
    const data = Object.fromEntries(formData);
    console.log(password, username);
    try {
      const response = await fetch(`/api/rate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        window.location.reload();
      } else {
        setError('You cannot rate this session.');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('An unexpected error occurred');
    }
  }
  return (
    <main className="main">
      <h1>Jury</h1>
      {error && <p>{error}</p>}
      <div className="button">
        <button onClick={seeAvgCount}>See Average Rating and Count</button>
        {isSeeAvgCount ? <p>{`Average Rating:${Avg} Number of Matches Rated: ${Count}`}</p> : <p>...</p>}
      </div>
      {renderRate(submitRating)}
      <button onClick={bindlogout}>Log Out</button>
    </main>
  );
}
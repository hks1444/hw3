"use client"
const renderCreateSquad = (handleSubmit) => {
    /*Coaches shall be able to create a squad for his/her newly created session (how-
ever a new session can exist without a declared squad.). All the players that
the coach chooses for his/her squad should be from the coach’s current team.
Coach shall be able to create squad using player names. */
    return (
        <form onSubmit={handleSubmit} className="form">
            <ul className="input">
                <li>
                    <label>
                        Player 1 Name
                        <input required type="text" name="player1" />
                    </label>
                </li>
                <li>
                    <label>
                        Player 1 Position ID
                        <input required type="number" name="player1position" />
                    </label>
                </li>
                <li>
                    <label>
                        Player 2 Name
                        <input required type="text" name="player2" />
                    </label>
                </li>
                <li>
                    <label>
                        Player 2 Position ID
                        <input required type="number" name="player2position" />
                    </label>
                </li>
                <li>
                    <label>
                        Player 3 Name
                        <input required type="text" name="player3" />
                    </label>
                </li>
                <li>
                    <label>
                        Player 3 Position ID
                        <input required type="number" name="player3position" />
                    </label>
                </li>
                <li>
                    <label>
                        Player 4 Name
                        <input required type="text" name="player4" />
                    </label>
                </li>
                <li>
                    <label>
                        Player 4 Position ID
                        <input required type="number" name="player4position" />
                    </label>
                </li>
                <li>
                    <label>
                        Player 5 Name
                        <input required type="text" name="player5" />
                    </label>
                </li>
                <li>
                    <label>
                        Player 5 Position ID
                        <input required type="number" name="player5position" />
                    </label>
                </li>
                <li>
                    <label>
                        Player 6 Name
                        <input required type="text" name="player6" />
                    </label>
                </li>
                <li>
                    <label>
                        Player 6 Position ID
                        <input required type="number" name="player6position" />
                    </label>
                </li>
            </ul>
            <button type="submit">Create Squad</button>
        </form >
    );
};

export default renderCreateSquad;

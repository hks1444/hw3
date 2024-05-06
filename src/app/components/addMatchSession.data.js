"use client"
const renderAddMatchSession = (handleSubmit) => {
    /*Coaches shall be able to add a new match session, he/she can only put his/her
current team ID. Stadium info and date, time, timeslot info are up to the coach’s
choice but they should not be conflicting. You should check for any type of con-
flict with triggers. Also coach can choose(assign) his/her own session’s assigned
jury (by jury’s name and surname). The rating of the newly added session
should be left blank or null at first, till a jury logs in and rates the match. */
    return (
        <form onSubmit={handleSubmit} className="form">
            <ul className="input">
                <li>
                    <label>
                        Team ID
                        <input required type="number" name="teamid" />
                    </label>
                </li>
                <li>
                    <label>
                        Stadium ID
                        <input required type="number" name="stadiumid" />
                    </label>
                </li>
                <li>
                    <label>
                        Date
                        <input required type="text" name="date" />
                    </label>
                </li>
                <li>
                    <label>
                        Timeslot
                        <input required type="number" name="timeslot" />
                    </label>
                </li>
            </ul>
            <button type="submit">Add Session</button>
        </form>
    );
};

export default renderAddMatchSession;

"use client"
const renderUpdateStadium = (handleSubmit) => {
    return (
        <form onSubmit={handleSubmit} className="input">
            <ul className="input">
                <li>
                    <label>
                        Current Stadium Name
                        <input required type="text" name="currentStadiumName" />
                    </label>
                </li>
                <li>
                    <label>
                        New Stadium Name
                        <input required type="text" name="newStadiumName" />
                    </label>
                </li>
            </ul>
            <button type="submit">Update Stadium Name</button>
        </form>
    );
};

export default renderUpdateStadium;

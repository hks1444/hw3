"use client"
const renderRate = (handleSubmit) => {
    return (
        <form onSubmit={handleSubmit} className="form">
            <ul className="input">
                <li>
                    <label>
                        Session ID
                        <input required type="number" name="id" />
                    </label>
                </li>
                <li>
                    <label>
                        Rating
                        <input required type="number" step="0.01" name="rating" />
                    </label>
                </li>
            </ul>
            <button type="submit">Rate Session</button>
        </form>
    );
};

export default renderRate;

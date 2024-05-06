"use client"
const renderDeleteMatchSession = (handleSubmit) => {
    /*Coaches shall be able to delete match sessions by providing session ID. When a
match session is deleted, all data regarding that match session must be deleted
including the rating, date, stadium etc. Also, the squad info of that match
session should be deleted."" */
    return (
        <form onSubmit={handleSubmit} className="form">
            <label>
                Session ID
                <input required type="number" name="id" />
            </label>
            <button type="submit">Delete Session</button>
        </form>
    );
};

export default renderDeleteMatchSession;

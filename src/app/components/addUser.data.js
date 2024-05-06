"use client"
const renderAddUser = (selectedOption, handleSubmit) => {
    switch (selectedOption) {
        case 'player':
            return (
                <form onSubmit={handleSubmit} className="form">
                    <ul className="input">
                        <li>
                            <label>
                                username
                                <input required type="text" name="username" />
                            </label>
                        </li>
                        <li>
                            <label>
                                password
                                <input required type="text" name="password" />
                            </label>
                        </li>
                        <li>
                            <label>
                                name
                                <input required type="text" name="name" />
                            </label>
                        </li>
                        <li>
                            <label>
                                surname
                                <input required type="text" name="surname" />
                            </label>
                        </li>
                        <li>
                            <label>
                                birthdate
                                <input required type="text" name="birthdate" />
                            </label>
                        </li>
                        <li>
                            <label>
                                weight
                                <input required type="number" name="weight" />
                            </label>
                        </li>
                        <li>
                            <label>
                                height
                                <input required type="number" name="height" />
                            </label>
                        </li>
                    </ul>
                    <button type="submit">Add Player</button>
                </form>
            );
        case 'jury':
            return (
                <form onSubmit={handleSubmit} className="form">
                    <ul className="input">
                        <li>
                            <label>
                                username
                                <input required type="text" name="username" />
                            </label>
                        </li>
                        <li>
                            <label>
                                password
                                <input required type="text" name="password" />
                            </label>
                        </li>
                        <li>
                            <label>
                                name
                                <input required type="text" name="name" />
                            </label>
                        </li>
                        <li>
                            <label>
                                surname
                                <input required type="text" name="surname" />
                            </label>
                        </li>
                        <li>
                            <label>
                                nationality
                                <input required type="text" name="nationality" />
                            </label>
                        </li>
                    </ul>
                    <button type="submit">Add Jury</button>
                </form>
            );
        case 'coach':
            return (
                <form onSubmit={handleSubmit} className="form">
                    <ul className="input">
                        <li>
                            <label>
                                username
                                <input required type="text" name="username" />
                            </label>
                        </li>
                        <li>
                            <label>
                                password
                                <input required type="text" name="password" />
                            </label>
                        </li>
                        <li>
                            <label>
                                name
                                <input required type="text" name="name" />
                            </label>
                        </li>
                        <li>
                            <label>
                                surname
                                <input required type="text" name="surname" />
                            </label>
                        </li>
                        <li>
                            <label>
                                nationality
                                <input required type="text" name="nationality" />
                            </label>
                        </li>
                    </ul>
                    <button type="submit">Add Coach</button>
                </form>
            );
        default:
            return null;
    }
};

export default renderAddUser;

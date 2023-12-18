import React, { useState, useEffect } from 'react';

function Repo() {
    const [repo, setRepo] = useState(null);

    useEffect(() => {
        async function fetchRepo() {
            const response = await fetch('https://api.github.com/repos/Niek/chatgpt-web');
            const json = await response.json();
            setRepo(json);
        }

        fetchRepo();
    }, []);

    return <div>{repo && <pre>{JSON.stringify(repo, null, 2)}</pre>}</div>;
}

function Chat() {
    return (
        <div>
            <h1>Chat</h1>
            <Repo />
        </div>
    );
}

export default Chat;
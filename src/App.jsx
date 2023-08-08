import React, { useEffect, useState } from 'react'

const App = () => {

    const [users, setUsers] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        getUsers('https://jsonplaceholder.typicode.com/users')
        getPosts('https://jsonplaceholder.typicode.com/posts')
    }, [])

    const getUsers = (url, options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }) => {
        fetch(url, options)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setUsers(result)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const getPosts = async (url, options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }) => {
        try {

            const response = await fetch(url, options)
            const result = await response.json()

            setPosts(result);

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="container my-4">
                <ul className="list-group">
                    {
                        !!users &&
                        users.map((user) => {
                            return (
                                <li key={user.id} className="list-group-item list-group-item-action">
                                    {user.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="container">
                <ul className="list-group w-50">
                    {
                        !!posts &&
                        posts.map((post) => {
                            return (
                                <li key={post.id} className={"list-group-item list-group-item-action " + (post.id % 2 === 0 ? "bg-danger": "bg-info")}>
                                    {post.body}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default App
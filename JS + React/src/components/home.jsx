import React, { useEffect, useState } from "react"
import '../index.css'
import profile_picture from '../img/img_avatar.png'
import { Link } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/users";

const Home = () => {

    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h2>Users</h2>
            {users.length > 0 && (
                <div className="users-container">
                    {users.map(user => (
                        <div className="user-card" key={user.id}>
                            <img width={250} src={profile_picture} alt="profile_picture" />
                            <p>{user.name}</p>
                            <Link className="link" to={`/user/${user.id}`}>View</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home
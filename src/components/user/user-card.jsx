import { Link, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import profile_picture from '../../img/img_avatar.png'
import '../../index.css'

const UserCard = () => {
    const [user, setUsers] = useState([])
    const { id } = useParams()
    const url = "https://jsonplaceholder.typicode.com/users/" + id;

    const fetchData = () => {
        if (!id) return
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
    },)

    return <>
        <Link to='/'>Back</Link>
        <div className="single">
            <img width={250}
                src={profile_picture} alt="profile_picture" />
            {console.log(user.address)}
            <p>Name: <span>{user.name}</span></p>
            <p>Email :<span>{user.email}</span></p>
            <p>Phone: <span>{user.phone}</span></p>
            <p>City: <span>{user.address?.city}</span></p>
            <p>Street: <span>{user.address?.street}</span></p>
            <p>Suite: <span>{user.address?.suite}</span></p>
            <p>Company: <span>{user.company?.name}</span></p>
        </div>
    </>
}


export default UserCard
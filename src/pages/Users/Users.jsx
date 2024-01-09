
import React, { useEffect, useState } from 'react'
import "./Users.css"
import getUsers from '../../services/users.api'

const Users = () => {
	const [data, setData] = useState([])



	async function getData() {
		const data = await getUsers()
		setData(data)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div >{data.map((users, i) => {
			return (<div key={users.id} className='user-data'>
				<p> {users.name}</p>
				<p>{users.email}</p>
				<p>{users.phone}</p>
				<p>{users.website}</p>
			</div>
			)

		})}</div >
	)
}

export default Users

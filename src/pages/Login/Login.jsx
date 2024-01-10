import React, { useRef } from 'react'
import useLogin from '../../hooks/useLogin'


export const Login = () => {
	const { checkIfUserIsValid } = useLogin()

	const usernameRef = useRef()
	const passwordRef = useRef()

	function handleSubmit(e) {
		e.preventDefault()

		const payload = {
			username: usernameRef.current.value,
			password: passwordRef.current.value

		}

		checkIfUserIsValid(payload)
	}


	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div style={{ display: "flex", flexDirection: "column", width: 500, margin: "0 auto", gap: '2em' }}>
					<h1>Login</h1>
					<label htmlFor="">User Name</label>
					<input ref={usernameRef} type="text" name='username' />
					<label htmlFor="">Password</label>
					<input ref={passwordRef} type="password" name='password' />
					<input type="submit" value="submit" />
				</div>
			</form>
		</div>
	)
}


import React, { useContext, useRef } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import { userDetailsContext } from '../../context/userDetailsContext';

function Contact() {
	const currentPerson = useContext(userDetailsContext)
	const { handleSaveToLocalStorage, name } = useLocalStorage();
	const nameRef = useRef()
	const emailRef = useRef()
	const messageRef = useRef()
	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			message: messageRef.current.value
		}
		handleSaveToLocalStorage(payload);
	}




	return (
		<div>
			<span>This is the current person: {currentPerson}</span>
			<form onSubmit={handleSubmit}>
				<div style={{ display: "flex", flexDirection: "column", width: 500, margin: "0 auto", gap: '2em' }}>
					<label htmlFor="">Name</label>
					<input ref={nameRef} type="text" name='name' />
					<label htmlFor="">Email</label>
					<input ref={emailRef} type="text" name='email' />
					<label htmlFor="">Message</label>
					<input ref={messageRef} type="text" name='message' />
					<input type="submit" value="submit" />
				</div>
			</form>
		</div>
	)
}

export default Contact
import { Navigate, useNavigate } from "react-router";

export default function useLogin() {

	const navigate = useNavigate();
	function checkIfUserIsValid(payload) {
		const username = localStorage.getItem("username");
		const password = localStorage.getItem("password");

		console.log(username, password)

		if (payload.username === username && payload.password === password) {
			navigate('/')
			localStorage.setItem("isLoggedIn", "true")
		} else {
			navigate('/login')
			localStorage.setItem("isLoggedIn", "false")

		}

	}
	return {
		checkIfUserIsValid,
		username: localStorage.getItem("username")
	}

}
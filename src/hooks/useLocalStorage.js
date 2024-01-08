import React from 'react'

const useLocalStorage = () => {
	let name = "manasses"
	function handleSaveToLocalStorage(payload) {
		localStorage.setItem("payload", JSON.stringify(payload));
	}
	return { handleSaveToLocalStorage, name }
}

export default useLocalStorage
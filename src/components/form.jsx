import { useState } from "react";
import { signUp } from "../utils";

export const LogForm = ({ setUser }) => {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [pass, setpass] = useState();

	const submitHandler = (e) => {
		e.preventDefault();
		// console.log(username, email, pass);
		signUp(username, email, pass, setUser);
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username"
			/>
			<input onChange={(e) => setEmail(e.target.value)} />
			<input onChange={(e) => setpass(e.target.value)} />
			<button type="submit">Sign-Up</button>
		</form>
	);
};

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/reducer/reducerGreeting";
import type { RootState } from "../redux/store";

function GreetingComponent() {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const { isLoggedIn, username } = useSelector(
		(state: RootState) => state.user,
	);
	function handleLogin() {
		if (!name) return;
		dispatch(login(name));
		setName("");
	}
	return (
		<div>
			{isLoggedIn ? (
				<div>
					<div>Welcome :{username}</div>
					<button onClick={() => dispatch(logout())}>logout</button>
				</div>
			) : (
				<div>
					{" "}
					لطفا نام خود را وارد کنید
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="  w-full border p-2 rounded m-2 "
						placeholder="exampel zizi"
					/>
					<button onClick={handleLogin}>login </button>
				</div>
			)}
		</div>
	);
}

export default GreetingComponent;

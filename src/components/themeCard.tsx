import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleTheme } from "../redux/reducer/reducerTheme";

function ThemeCardComponent() {
	const mode = useSelector((state: RootState) => state.theme.mode);
	const dispatch = useDispatch();
	return <div className={`flex flex-col gap-4 justify-center items-center ${mode==="light"?"bg-white":'bg-gray-500'}`}>
    
    <button className="border max-w-fit border-amber-400 p-3 cursor-pointer" onClick={()=>dispatch(toggleTheme())}>toggle theme</button>
  </div>;
}

export default ThemeCardComponent;

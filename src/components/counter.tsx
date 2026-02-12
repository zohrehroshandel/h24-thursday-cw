import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../redux/reducer/reducerCounter";
import type { RootState } from "../redux/store";





export default function Counter() {
const count = useSelector((state :RootState) => state.counter.value);
const dispatch = useDispatch();
return (
<div className="flex gap-5 items-center">
<button
className="px-2 py-1 font-bold rounded-sm bg-blue-300"
onClick={() => dispatch(increment())}
>
+
</button>
<button
className="px-2 py-1 font-bold rounded-sm bg-blue-300"
onClick={() => dispatch(decrement())}
>
-
</button>
<button
className="px-2 py-1 font-bold rounded-sm bg-blue-300"
onClick={() => dispatch(reset())}
>
reset
</button>
<button
className="px-2 py-1 font-bold rounded-sm bg-blue-300"
onClick={() => dispatch(incrementByAmount(5))}
>
incrementByAmount
</button>
<div>{count}</div>
</div>
);
}
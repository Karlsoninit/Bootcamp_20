import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "./router";
import { AuthStateChanged } from "./redux/auth/authOpearations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthStateChanged());
  }, []);

  return useRouter();
}

export default App;

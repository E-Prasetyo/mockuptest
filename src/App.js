import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./Auth/AuthProvider";
import AuthRoute from "./Auth/AuthRoute";
import { Home, Login, NotFound, Register } from "./Pages"

function App() {
  const authCtx = useAuth();
  const token = authCtx.token

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('token');
    if(!token && sessionToken){
      const data = JSON.parse(sessionToken)
      authCtx.setToken(data)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])


  return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<AuthRoute/>}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
  );
}

export default App;

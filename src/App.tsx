import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
import { AuthContext } from "./context/AuthContext";
import useAuth from "./hooks/useAuth";
import { useEffect, useState } from "react";
import { User } from "./types/user-type";
import { AppName } from "./constants";
// @ts-ignore
import WOW from "wow.js";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
// import WOW from "wow.js";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function App() {
  useEffect(() => {
    window.document.title = AppName;
    const wow = new WOW({ live: false }); // disables sync requirement
    wow.init();
  }, []);

  let { GetCurrentUser } = useAuth();
  const [currentUser, setCurrentUser] = useState<User | null>(GetCurrentUser());
  //new WOW().init();
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

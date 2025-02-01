import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { generateToken, messaging } from "./services/Firebase";
import { onMessage } from "firebase/messaging";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);

  return (
    <div className="flex-1 h-fit h-100 d-flex flex-column justify-content-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

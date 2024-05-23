import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout.component";
import Home from "./pages/homePage/Home";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectIsLoading } from "./store/loading/loading.selector";
import LoadingModal from "./components/Loader/LoadingModal.component";

function App() {
  const loading = useSelector(selectIsLoading);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      {loading && <LoadingModal />}
      <Toaster />
    </>
  );
}

export default App;

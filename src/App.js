import { HomePage, PostForm, NotFoundPage } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";
import RequiresAuth from "./components/RequiresAuth";
import { HomePageUser } from "./pages/HomePageUser";
import Navbar from "./components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import ContactForm from "./pages/Contact";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  
  return (
    
    <div
      className="bg-cover h-screen w-screen overflow-y-scroll"
      style={{
        backgroundImage: isLoginPage
          ? "none"
          : "url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
      }}
    >
      <PostProvider>
        <Navbar />
        <Routes>
          {/* Public routes */}
          <Route path="signup" exact element={<Signup />} />
          <Route path="login" exact element={<Login />} />
          <Route path="/" exact element={<HomePageUser />} />
          <Route path="/contact" exact element={<ContactForm />} />

          {/* Private routes */}
          <Route element={<RequiresAuth allowedRoles={["admin"]} />}>
            <Route path="/admin" exact element={<HomePage />} />
            <Route path="/posts/:id" element={<PostForm />} />
            <Route path="/new" exact element={<PostForm />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </PostProvider>
    </div>
  );
}

export default App;

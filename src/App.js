import { HomePage, PostForm, NotFoundPage } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";
import RequiresAuth from "./components/RequiresAuth";
import { HomePageUser } from "./pages/HomePageUser";
import Navbar from "./components/Navbar/Navbar";
import ContactForm from "./pages/Contact";
import { Carousel } from "./components/Carousel/Carousel";


function App() {
  return (
    <div className="bg-cover bg-gray-200 h-screen w-screen overflow-y-scroll">
      <PostProvider>
        <Navbar />
        <Carousel />
        <Routes>
          {/* Public routes */}
          <Route path="signup" exact element={<Signup /> } />
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

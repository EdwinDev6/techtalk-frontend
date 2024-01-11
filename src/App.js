import { HomePage, PostForm, NotFoundPage, SubscriptionPage } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";
import RequiresAuth from "./components/RequiresAuth";
import { HomePageUser } from "./pages/HomePageUser";
import Navbar from "./components/Navbar/Navbar";
import ContactForm from "./pages/Contact";
import { DefaultCarousel } from "./components/Carousel/Carousel";
import UserList from "./pages/Users";
import { PostDetailsCard } from "./components/PostDetailsCard";

function App() {
  return (
    <div className="bg-cover bg-gray-200 h-screen w-screen overflow-y-scroll">
      <PostProvider>
        <Navbar />
        
        <Routes>
          {/* Public routes */}
          <Route path="signup" exact element={<Signup /> } />
          <Route path="login" exact element={<Login />} />
          <Route path="/" exact element={<HomePageWithCarousel />} />
          <Route path="/contact" exact element={<ContactForm />} />
          <Route path="/post/:id" exact element={<PostDetailsCard />} />
          <Route path="/subscription" exact element={<SubscriptionPage />} />
          {/* Private routes */}
          <Route element={<RequiresAuth allowedRoles={["moderator"]} />}>
            <Route path="/admin" exact element={<HomePage />} />
            <Route path="/edit/:id" element={<PostForm />} />
            <Route path="/new" exact element={<PostForm />} />
            <Route path="/users" exact element={<UserList />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </PostProvider>
    </div>
  );
}
function HomePageWithCarousel() {
  return (
    <>
      <DefaultCarousel />
      <HomePageUser />
    </>
  );
}
export default App;

import { HomePage, HomeUser, PostForm, NotFoundPage } from "./pages/index";
import { Routes, Route, Navigate } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";
import Signup from './components/signup';
import Login from './components/Login';
import { Link } from "react-router-dom";
import { Proteger } from "./og/Proteger";

  function App() {

  
  return  (
    
    <div className="">
    
        <PostProvider>
        
        <Routes>  

         
           <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/Homeuser" element={<HomeUser />} />
            <Route path="*" element={<NotFoundPage />} />

            <Route element={<Proteger/>}>
            <Route path="/new" element={<PostForm />} /> 
            <Route path="/home" element={<HomePage />} />
          </Route>
            
            
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    
  );
}


export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/new">Create Post</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/About">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/moderator">Moderator</Link>
        </li>
        <li>
          <Link to="/home">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;





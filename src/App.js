import { HomePage, PostForm, NotFoundPage } from "./pages/index";
import { Routes, Route, Navigate } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";
import Signup from './components/signup';
import Login from './components/Login';


function App() {
  
  const user = localStorage.getItem("token")
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10  m-auto">
        <PostProvider>
      <Routes>
        {user && <Route path="/home" exact element={<HomePage/>}/>}
        <Route path="/signup" exact element={<Signup/>}/>
        <Route path ="/" exact element={<Login/>}/>
      <Route path="/new" element={<PostForm />} />
      <Route path="/posts/:id" element={<PostForm />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/home" exact element ={<Navigate replace to ="/"/>}/>
    </Routes>
    <Toaster/>
    </PostProvider>
    
      </div>
    </div>
  );
}

export default App;

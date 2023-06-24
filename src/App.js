import { HomePage, PostForm, NotFoundPage } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";
import Signup from './components/signup';
import Login from './components/Login';
import RequiresAuth from "./components/RequiresAuth";

function App() {
  

  return (
   
      <PostProvider>

        <Routes>
          {/* Public routes */}
          <Route path="signup" exact element={ <Signup/> }/>
          <Route path ="login" exact element={ <Login/> }/>
          
          {/* Private routes */}
          <Route element={<RequiresAuth allowedRoles={["admin"]}/>}>
            <Route path="/" exact element={ <HomePage/>} />
            <Route path="/posts/:id" element={ <PostForm />} />
            <Route path="/new" exact element={ <PostForm/>} />
          </Route>


          <Route element={<RequiresAuth allowedRoles={["user"]}/>}>
           
            
          </Route>

          {/* Catch all */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
        <Toaster/>
      </PostProvider>
    
  );
}

export default App;

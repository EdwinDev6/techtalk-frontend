import { usePosts } from "../context/postContext";
import {VscEmptyWindow} from 'react-icons/vsc'
import { Link } from "react-router-dom"; 
import { PostCard } from "../components/PostCard";
import '../styles/homepage.styles.css' 

export function HomePage() {
  const handleLogout = ()=> {
    localStorage.removeItem("token");
    window.location.reload();
}
 
    const { posts } = usePosts()

    if (posts.length === 0 )
      return (<div className='flex flex-col justify-center items-center'>
        <VscEmptyWindow className='w-48 h-48 text-white'/>
        <h1 className='text-white text-2xl'> there are not posts</h1>
      </div>
      )

  return (
    <div className='text-white'>
        <nav className="navbar">
          <h1>Techtalk</h1>
          <ul className="menu-horizontal">
            <li>
              <p>Options</p>
              <ul className="menu-vertical">
                <li>
                  <button className="bg-white hover:bg-red-700 text-black  py-2  rounded" onClick = {handleLogout}>
                      Logout
                  </button>
                </li>
                <li>
                  <Link to="/new"  className="bg-white  py-2 text-black hover:bg-blue-500">Create new Post</Link>
                </li>
              </ul>

            </li>
            
          </ul>
        </nav>
    
    <header className="flex justify-between">
      <h1 className="text-2xl text-gray-300 font-bold">Post ({posts.length})</h1>
    </header>

    <div className="grid  gap-4 w-25">
    {posts.map(post => (
        <PostCard post={post} key={post._id}/>
     ))}
    </div>
    </div>
  );
}

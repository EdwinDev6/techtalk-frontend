import { usePosts } from "../context/postContext";
import {VscEmptyWindow} from 'react-icons/vsc'
import { Link } from "react-router-dom"; 
import { PostCard } from "../components/PostCard";
export function HomePage() {
 
    const { posts } = usePosts()

    if (posts.length === 0 )
      return (<div className='flex flex-col justify-center items-center'>
        <VscEmptyWindow className='w-48 h-48 text-white'/>
        <h1 className='text-white text-2xl'> there are not posts</h1>
      </div>
      )

  return (
    <div className='text-white'>

    <header className="flex justify-between">
      <h1 className="text-2xl text-gray-300 font-bold">Post ({posts.length})</h1>
    <Link to="/new"  className="bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">Create new Post</Link>
    </header>

    <div className="grid  gap-4">
    {posts.map(post => (
        <PostCard post={post} key={post._id}/>
     ))}
    </div>
    </div>
  );
}

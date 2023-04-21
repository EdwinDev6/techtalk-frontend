import { usePosts } from "../context/postContext";
import {VscEmptyWindow} from 'react-icons/vsc'
import { Link } from "react-router-dom"; 

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

      <Link to="/new">Create new Post</Link>
     {posts.map(post => (
        <div key={post._id}>
            {post.title}          
        </div>
     ))}
    </div>
  );
}

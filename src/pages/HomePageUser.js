import { usePosts } from "../context/postContext";
import {VscEmptyWindow} from 'react-icons/vsc'

import { PostCardUser } from "../components/PostCardUser";

export function HomePageUser() {

    const { posts } = usePosts()

    if (posts.length === 0 )
      return (<div className='flex flex-col justify-center items-center'>
        <VscEmptyWindow className='w-48 h-48 text-white'/>
        <h1 className='text-white text-2xl'> there are not posts</h1>
      </div>
      )

  return (
   
    
   

    <div className="grid  gap-4 w-25">
    {posts.map(post => (
        <PostCardUser post={post} key={post._id}/>
     ))}
    </div>
    
  );
}
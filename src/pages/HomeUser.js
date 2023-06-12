import { usePosts } from "../context/postContext";

import { PostCardUser } from "../components/PostCardUser";

export function HomeUser() {
 
 
    const { posts } = usePosts()

   

  return (
    <div className='text-white'>

    <div className="grid  gap-4 w-25">
    {posts.map(post => (
        <PostCardUser post={post} key={post._id}/>
     ))}
    </div>
    </div>
  );
}

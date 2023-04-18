import { useEffect } from "react";
import { usePosts } from "../context/postContext";

export function HomePage() {
 
    const {getPosts,posts} = usePosts()

    useEffect(()=>{
        getPosts()
    }, [])
  return (
    <div className="text-white">
     {posts.map(post => (
        <div key={post._id}>
            {post.title}
        </div>
     ))}
    </div>
  );
}

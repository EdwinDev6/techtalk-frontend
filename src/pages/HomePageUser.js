import { useEffect } from "react";
import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from 'react-icons/vsc'
import { PostCardUser } from "../components/PostCardUser";

export function HomePageUser() {
    const { posts, getAllPost } = usePosts();
    
    useEffect(() => {
    getAllPost()
    }, [getAllPost])
    if (posts.length === 0)
        return (
            <div className='flex flex-col justify-center items-center'>
                <VscEmptyWindow className='w-48 h-48 text-white'/>
                <h1 className='text-white text-2xl'> There are no posts</h1>
            </div>
        );

    
    const reversedPosts = [...posts].reverse();

    return (
        <div className="grid gap-4 w-25">
            {reversedPosts.map(post => (
                <PostCardUser post={post} key={post._id}/>
            ))}
            
        </div>
       
        
    );
}
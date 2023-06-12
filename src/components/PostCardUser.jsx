

export function PostCardUser({ post }) {
  

  

  return (
    <div
      className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700
        hover:cursor-pointer"
    >
      <div className="px-4 py-7">
    
           
        <div className="flex justify-between uppercase py-2">
          <h3>{post.title}</h3>
          
        </div>
        <p>{post.description}</p>
        <div className=" flex justify-center items-center ">
        {post.image && <img   src={post.image.url} className="w-full h-full object-cover " alt="imagen proporcionada por el Moderador" />}
        </div>
      </div>
    </div>
  );
}


import moment from 'moment';

export function PostCardUser({ post }) {
  const fechaNormal = moment(post.createdAt).format('DD/MM/YYYY');
  return (
    
    <div className="container mx-auto max-w-sm bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500 m-10">
      <div className="flex items-center justify-between px-4">
        <div className="flex justify-between items-center py-4">
          <img className="w-12 rounded-full" src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Alex" />
          <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-800 cursor-pointer">TechTalk</h1>
            <p className="text-sm text-gray-800 hover:underline cursor-pointer"> {fechaNormal}</p>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </div>
      </div>
      {post.image && <img src={post.image.url}  alt="imagen " />}
      <div className="p-6">
        
        <h2 className="text-xl text-gray-800 font-semibold">{post.title}</h2>
        <p className="text-lg font font-thin  text-black">{post.description}</p>
      </div>
    </div>
  
);
};
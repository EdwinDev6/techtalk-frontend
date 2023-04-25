import toast from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";

export function PostCard({ post }) {
  const { deletePost } = usePosts();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            {" "}
            Do you want to Delete? <strong>{id}</strong>
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
              onClick={() => {
                deletePost(id);
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>

            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };

  return (
    <div
      className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700
        hover:cursor-pointer"
    >
      <div className="px-4 py-7">
      <button
            className="bg-sky-400 text-sm px-2 py-1 rounded-sm"
            onClick={() => navigate(`/posts/${post._id}`)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 text-sm px-2 py-1 rounded-sm "
            onClick={() => handleDelete(post._id)}
          >
            Delete
          </button>
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

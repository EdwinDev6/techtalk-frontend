import toast from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import logoImg from "../Images/postimg.jpg";

export function insertMedia(filePath) {
  var extension = filePath.split(".").pop().toLowerCase();

  if (
    extension === "jpg" ||
    extension === "jpeg" ||
    extension === "png" ||
    extension === "gif"
  ) {
    return <img src={filePath} alt="Imagen" />;
  } else if (
    extension === "mp4" ||
    extension === "webm" ||
    extension === "ogv"
  ) {
    return (
      <video src={filePath} alt="Video" controls autoPlay muted loop></video>
    );
  } else {
    return <p>Unsupported file type</p>;
  }
}

export function PostCard({ post }) {
  const { deletePost } = usePosts();
  const navigate = useNavigate();

  const normalDate = moment(post.createdAt).format("DD/MM/YYYY");

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
    <div className="container mx-auto max-w-sm bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500 m-10  animate-fade-down animate-once animate-duration-[500ms] animate-ease-out">
      <div className="flex items-center justify-between px-4">
        <div className="flex justify-between items-center py-4">
          <img className="w-12 rounded-full" src={logoImg} alt="img Logo" />
          <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-800 cursor-pointer">
              TechTalk
            </h1>
            <p className="text-sm text-gray-800 hover:underline cursor-pointer">
              {normalDate}
            </p>
          </div>
        </div>
        <div>
          {" "}
          <button
            className="text-sm px-2 py-1 rounded-sm group relative overflow-hidden  bg-white  shadow m-1"
            onClick={() => navigate(`/posts/${post._id}`)}
          >
            <div class="absolute inset-0 w-0 bg-cyan-300 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span class="relative text-black group-hover:text-white">Edit</span>
          </button>
          <button
            className=" text-sm px-2 py-1 rounded-sm group relative overflow-hidden  bg-white  shadow"
            onClick={() => handleDelete(post._id)}
          >
            <div class="absolute inset-0 w-0 bg-rose-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span class="relative text-black group-hover:text-white">
              Delete
            </span>
          </button>
        </div>
      </div>

      {post.image && insertMedia(post.image.url)}

      <div className="p-6">
        <h2 className="text-xl text-gray-800 font-semibold">{post.title}</h2>
        <p className="text-lg font font-thin  text-black text-justify">
          {post.description}
        </p>
      </div>
    </div>
  );
}

import toast from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export function insertarMedia(rutaArchivo) {
  var extension = rutaArchivo.split('.').pop().toLowerCase();

  if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'gif') {

    return <img src={rutaArchivo} alt="Imagen" />;
  } else if (extension === 'mp4' || extension === 'webm' || extension === 'ogv') {

    return <video src={rutaArchivo} alt="Video" controls autoPlay muted loop></video>;
  } else {

    return <p>Tipo de archivo no compatible</p>;
  }
}

export function PostCard({ post }) {
  const { deletePost } = usePosts();
  const navigate = useNavigate();

  const fechaNormal = moment(post.createdAt).format("DD/MM/YYYY");

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
    <div className="container mx-auto max-w-sm bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500 m-10">
      <div className="flex items-center justify-between px-4">
        <div className="flex justify-between items-center py-4">
          <img
            className="w-12 rounded-full"
            src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="img Logo"
          />
          <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-800 cursor-pointer">
              TechTalk
            </h1>
            <p className="text-sm text-gray-800 hover:underline cursor-pointer">
              {fechaNormal}
            </p>
          </div>
        </div>
        <div>
          {" "}
          <button
            className="bg-sky-400 text-sm px-2 py-1 rounded-sm"
            onClick={() => navigate(`/posts/${post._id}`)}
          >
            Edit
          </button>{" "}
          <button
            className="bg-red-600 text-sm px-2 py-1 rounded-sm "
            onClick={() => handleDelete(post._id)}
          >
            Delete
          </button>
        </div>
      </div>

      {post.image && insertarMedia(post.image.url)}

      <div className="p-6">
        <h2 className="text-xl text-gray-800 font-semibold">{post.title}</h2>
        <p className="text-lg font font-thin  text-black">{post.description}</p>
      </div>
    </div>
  );
}
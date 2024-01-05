import moment from "moment";
import ReactMarkdown from "react-markdown";
import { insertMedia } from "./PostCard";
import logoImg from "../Images/postimg.jpg";
import { Link } from "react-router-dom";
export function PostCardUser({ post }) {
  const normalDate = moment(post.createdAt).format("DD/MM/YYYY");

  return (
    <article className="container mx-auto max-w-2xl bg-white rounded shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500 m-10">
      <header className="flex items-center justify-between px-4">
        <div className="flex justify-between items-center py-4">
          <img className="w-12 rounded-full" src={logoImg} alt="logo" />
          <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-800 cursor-pointer">
              {post.author}
            </h1>
            <p className="text-sm text-gray-800 hover:underline cursor-pointer">
              {normalDate}
            </p>
            <p className="text-blue-400 capitalize "> {post.categories}</p>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
      </header>

      {post.image && insertMedia(post.image.url)}

      <div className="p-6">
        <h2 className="text-xl text-gray-800 font-semibold">{post.title}</h2>
        <ReactMarkdown className="text-lg font font-thin text-black text-justify">
          {post.description
            ? `${post.description.substr(0, 330)}...`
            : "sin descripción"}
        </ReactMarkdown>

        <Link
          to={`/post/${post._id}`}
          className="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          state={{ post}}
          
        >
          Read more
        </Link>
        <h4 className="text-gray-400 capitalize my-2">
          {" "}
          Source: {post.source}
        </h4>
      </div>
    </article>
    
  );
}

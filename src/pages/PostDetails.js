import { useEffect } from "react";
import { useParams } from "react-router-dom"; // Importa useParams de React Router
import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { PostdetailsCard } from "../components/PostDetailsCard";

export function HomePage() {
  const { posts,  getPost } = usePosts();
  const { postId } = useParams(); // Obtén el ID de la ruta

  useEffect(() => {
    
      // Si hay un ID en la ruta, obtén solo ese post
      getPost(postId);
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Asegúrate de ejecutar el efecto cuando cambia el ID

  if (posts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">There are no posts</h1>
      </div>
    );
  }

  

  return (
    <main className="flex flex-row flex-wrap">
      {posts.map((post) => (
        <article key={post._id} className="m-4">
          <PostdetailsCard post={post} />
        </article>
      ))}
    </main>
  );
}

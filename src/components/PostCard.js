export function PostCard({ post }) {
    return (
        <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700
        hover:cursor-pointer">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
        </div>
    );
}

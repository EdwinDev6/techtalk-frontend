import { usePosts} from "../context/postContext";

export function HomePage() {
    const {setPosts} = usePosts()

    return (
        <div> HomePage
          
            <button className="bg-red 100 " onClick={setPosts()}>Join</button>
            </div>
    )
}


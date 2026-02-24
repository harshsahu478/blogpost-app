import { useState, useEffect } from "react";
import { dbService } from "../appwrite";
import { Container, PostCard } from "../components";

function Home() {
  console.log('Home component render');

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbService.getPosts().then((posts) => {
      // console.log("API RESPONSE:", posts);
      // console.log("DOCUMENTS:", posts?.documents);
      if (posts) {
        setPosts(posts.rows);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              No posts yet.
              Be the first to create one!
            </h1>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;

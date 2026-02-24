import { useEffect, useState } from 'react'
import { dbService } from '../appwrite'
import { Container, PostCard } from '../components'

function AllPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        dbService.getPosts([]).then((posts) => {
            console.log(posts);
            console.log(posts.rows);
            if (posts) {
                setPosts(posts.rows)
            }
        })
    }, [])


    return (
        <div className='py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4' >
                            <PostCard {...post} />
                        </div>
                        )
                    )}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
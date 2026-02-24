import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { dbService, storageService } from "../appwrite";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            dbService.getPost(slug).then((post) => {
                if (post) setPost(post)
                else navigate("/")
            })
        } else navigate('/');
    }, [slug, navigate]);

    const deletePost = () => {
        dbService.deletePost(post.$id).then((status) => {
            if (status) {
                storageService.deleteFile(post.featuredImage)
                navigate("/")
            }
        })
    }

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <div className="w-full h-[450px] overflow-hidden rounded-xl">
                        <img
                            src={storageService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {
                        isAuthor && (
                            <div className="absolute right-6 bottom-6">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="mr-3">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )
                    }
                    <div className="w-full mb-6 ml-3">
                        <h1 className="text-2xl font-bold">{post.title}</h1>
                    </div>
                    <div className="browser-css">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}

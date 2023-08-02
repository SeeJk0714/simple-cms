import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ManagePostsAdd() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return (
        <div className="container mx-auto my-5">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h1 className="h1">Add New Post</h1>
            </div>
            <div className="card mb-2 p-4">
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        // 1. get the existing posts from the local storage
                        let posts = JSON.parse(localStorage.getItem("posts"));

                        if (!posts) posts = [];
                        posts.push({
                            id: Math.floor(Math.random() * 100000),
                            title: title,
                            content: content,
                            status: "review",
                        });
                        // save array into local storage
                        localStorage.setItem("posts", JSON.stringify(posts));

                        // redirect back to /manage-posts
                        navigate("/manage-posts");
                    }}
                >
                    <div className="mb-3">
                        <label for="post-title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="post-title"
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="post-content" className="form-label">
                            Content
                        </label>
                        <textarea
                            className="form-control"
                            id="post-content"
                            rows="10"
                            value={content}
                            onChange={(event) => {
                                setContent(event.target.value);
                            }}
                        ></textarea>
                    </div>
                    <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                    </div>
                </form>
            </div>
            <div className="text-center">
                <Link to="/manage-posts" className="btn btn-link btn-sm">
                    <i className="bi bi-arrow-left"></i> Back to Posts
                </Link>
            </div>
        </div>
    );
}

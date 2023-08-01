import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Post from "./pages/post";
import ManagePosts from "./pages/manage-posts";
import ManagePostsAdd from "./pages/manage-posts-add";
import ManagePostsEdit from "./pages/manage-posts-edit";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/post" element={<Post />} />
                <Route path="/manage-posts" element={<ManagePosts />} />
                <Route path="/manage-posts-add" element={<ManagePostsAdd />} />
                <Route
                    path="/manage-posts-edit"
                    element={<ManagePostsEdit />}
                />
            </Routes>
        </Router>
    );
}

export default App;

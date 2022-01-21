import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import PostCard from "./components/PostCard/PostCard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const post = {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--J7cJhbvv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vsjxdb9c18tsrd6kdiau.jpg",
    title: "Git: how can I force pull a distant repository",
    createDate: "Jan 21 (5 hours ago)",
    tags: ["#git", "#github", "#tooling", "#productivity"],
    likeCount: 1,
    ownerUser: {
      name: "Simon",
      profilePhoto:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--MH0Cyq5Z--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/620656/515d8ab8-b9fe-4ff0-b4a4-cff78eec6d53.jpeg",
      location: "Paris",
      joineDate: "25 Nisan 2021",
    },
  };

  function renderPosts() {
    return (
      <div>
        <div className="post-title-area">
          <p className="post-title">Relevant</p>
          <p className="post-title">Latest</p>
          <p className="post-title">Top</p>
        </div>
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="post-container">{renderPosts()}</div>
      </div>
    </div>
  );
}

export default App;

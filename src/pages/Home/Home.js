import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard/PostCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import { fetchArticles } from "../../services";

export default function Home() {
  const [articles, setArticles] = useState({});

  useEffect(() => {
    fetchArticles().then((res) => setArticles(res.data));
  }, []);

  function renderPosts() {
    return articles.map((item) => <PostCard post={item} key={item.id} />);
  }

  return (
    <div className="app-container">
      <Sidebar />
      <div className="post-container">
        <div className="post-title-area">
          <p className="post-title">Relevant</p>
          <p className="post-title">Latest</p>
          <p className="post-title">Top</p>
        </div>
        {articles && renderPosts()}
      </div>
    </div>
  );
}

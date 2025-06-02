import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard.jsx';

function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch('/blogs/index.json')
      .then(res => res.json())
      .then(posts => {
        // Sort by date descending (newest first)
        const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogPosts(sortedPosts);
      })
      .catch(err => console.error('Error loading blog index:', err));
  }, []);

  return (
    <div className="blogs-page">
      {blogPosts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  );
}

export default Blogs;

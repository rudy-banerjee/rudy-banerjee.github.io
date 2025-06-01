import React from 'react';
import BlogPost from '../components/BlogPost.jsx';

function Blogs() {
  // List of blog files in order (most recent first)
  const blogFiles = [
    'blog-1.md'
  ];

  return (
    <div className="blogs-page">
      {blogFiles.map((blogFile, index) => (
        <BlogPost key={index} blogFile={blogFile} />
      ))}
    </div>
  );
}

export default Blogs;

import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost.jsx';

function BlogPostPage() {
  const { filename } = useParams();
  const blogFile = `${filename}.md`;

  return (
    <div className="blog-post-page">
      <BlogPost blogFile={blogFile} />
    </div>
  );
}

export default BlogPostPage;

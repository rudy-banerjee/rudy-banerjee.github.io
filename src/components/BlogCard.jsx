import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  const [excerpt, setExcerpt] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (post.file) {
      fetch(`/blogs/${post.file}`)
        .then(res => res.text())
        .then(content => {
          // Strip basic markdown syntax and truncate
          const plainText = content
            .replace(/^#{1,6}\s+/gm, '') // Remove headers
            .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
            .replace(/\*(.*?)\*/g, '$1') // Remove italic
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
            .replace(/`([^`]+)`/g, '$1') // Remove code ticks
            .replace(/>\s*/g, '') // Remove blockquotes
            .trim();
          
          const truncated = plainText.length > 200 
            ? plainText.substring(0, 200) + '...' 
            : plainText;
          
          setExcerpt(truncated);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error loading blog content:', err);
          setLoading(false);
        });
    }
  }, [post.file]);

  if (loading) {
    return (
      <div className="blog-card loading">
        <h3>{post.title}</h3>
        <p className="date">{post.date}</p>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Link to={`/blog/${post.file.replace('.md', '')}`} className="blog-card-link">
      <article className="blog-card">
        <h3>{post.title}</h3>
        <p className="date">{post.date}</p>
        <p className="excerpt">{excerpt}</p>
        <span className="read-more">Read more →</span>
      </article>
    </Link>
  );
}

export default BlogCard;

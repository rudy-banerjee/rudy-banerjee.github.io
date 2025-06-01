import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function BlogPost({ blogFile }) {
  const [content, setContent] = useState('');
  
  useEffect(() => {
    if (blogFile) {
      fetch(`/blogs/${blogFile}`)
        .then(res => res.text())
        .then(setContent)
        .catch(err => console.error('Error loading blog:', err));
    }
  }, [blogFile]);

  const components = {
    blockquote: ({ children }) => (
      <div className="quote-container">
        <blockquote>{children}</blockquote>
      </div>
    ),
  };

  return (
    <article className="blog-post">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
}

export default BlogPost; 
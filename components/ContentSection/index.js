import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

function Image({ node, ...props }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img {...props} style={{ maxHeight: '100%', width: 'auto' }} />
    </div>
  );
}


const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const ContentSection = ({ content }) => {
  // Merge custom components into a single object
  const components = {
    ...CodeBlock, // Spread the CodeBlock object
    img: Image, // Add the custom Image component for rendering images
  };

  return (
    <ReactMarkdown
      components={components}
      className="markdown-class"
    >
      {content}
    </ReactMarkdown>
  );
};

export default ContentSection;

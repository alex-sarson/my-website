interface ArticleProps {
  children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ children }) => {
  return (
    <article>
      {children}
    </article>
  )
};

export default Article;
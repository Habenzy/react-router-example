import { useEffect, useState } from "react";

function Article(props) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!article) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
        .then((res) => res.json())
        .then((post) => {
          console.log(post)
          setArticle(post);
        });
    }
  });
  console.log(props.id)

  return (
    <div>
      {article ? (
        <div>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Article

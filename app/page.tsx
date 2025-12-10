import Link from "next/link";
import { getArticles } from "@/lib/markdown";

export default function Home() {
  const articles = getArticles();

  return (
    <div>
      <section className="intro">
        <h1>Hi, I'm Andrew</h1>
        <p>
          I'm a developer and creative who loves building things. Welcome to my
          little corner of the internet.
        </p>
      </section>

      <section className="articles">
        <h2>Recent Articles</h2>
        {articles.length === 0 ? (
          <p>No articles yet.</p>
        ) : (
          <ul className="article-list">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link href={`/articles/${article.slug}`}>
                  <h3>{article.title}</h3>
                  <time>{article.date}</time>
                  {article.description && <p>{article.description}</p>}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

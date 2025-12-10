import Link from "next/link";
import { getArticles } from "@/lib/markdown";

export default function Home() {
  const articles = getArticles();

  return (
    <div>
      <section className="intro">
        <h1>tranimal's website</h1>
        <p>I mostly make games and react apps.</p>
      </section>

      <section className="articles">
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

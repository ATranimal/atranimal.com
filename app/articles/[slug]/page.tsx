import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getArticleBySlug, getArticles } from "@/lib/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="article-page">
      <header>
        <h1>{article.title}</h1>
        <time>{article.date}</time>
      </header>
      <div className="markdown-content">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </article>
  );
}

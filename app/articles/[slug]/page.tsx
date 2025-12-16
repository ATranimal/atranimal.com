import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getArticleBySlug, getArticles, extractHeadings, generateHeadingId } from "@/lib/markdown";
import TableOfContents from "@/components/TableOfContents";

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

  const headings = extractHeadings(article.content);

  return (
    <article className="article-page">
      <header>
        <h1>{article.title}</h1>
        <time>{article.date}</time>
      </header>
      <TableOfContents headings={headings} />
      <div className="markdown-content">
        <ReactMarkdown
          components={{
            h1: ({ children }) => {
              const text = String(children);
              const id = generateHeadingId(text);
              return <h1 id={id}>{children}</h1>;
            },
            h2: ({ children }) => {
              const text = String(children);
              const id = generateHeadingId(text);
              return <h2 id={id}>{children}</h2>;
            },
            h3: ({ children }) => {
              const text = String(children);
              const id = generateHeadingId(text);
              return <h3 id={id}>{children}</h3>;
            },
            h4: ({ children }) => {
              const text = String(children);
              const id = generateHeadingId(text);
              return <h4 id={id}>{children}</h4>;
            },
            h5: ({ children }) => {
              const text = String(children);
              const id = generateHeadingId(text);
              return <h5 id={id}>{children}</h5>;
            },
            h6: ({ children }) => {
              const text = String(children);
              const id = generateHeadingId(text);
              return <h6 id={id}>{children}</h6>;
            },
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

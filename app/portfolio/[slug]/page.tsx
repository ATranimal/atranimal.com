import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getPortfolioBySlug, getPortfolioItems } from "@/lib/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const items = getPortfolioItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export default async function PortfolioItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="portfolio-page">
      {item.image && (
        <div className="portfolio-header-image">
          <Image
            src={item.image}
            alt={item.title}
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      )}
      <header>
        <h1>{item.title}</h1>
        {item.tags && <span className="tags">{item.tags}</span>}
        <time>{item.date}</time>
      </header>
      <div className="markdown-content">
        <ReactMarkdown>{item.content}</ReactMarkdown>
      </div>
    </article>
  );
}

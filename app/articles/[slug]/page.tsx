import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import {
  getArticleBySlug,
  getArticles,
  extractHeadings,
  generateHeadingId,
} from "@/lib/markdown";
import TableOfContents from "@/components/TableOfContents";

// Video file extensions to handle
const VIDEO_EXTENSIONS = [".webm", ".mp4", ".mov", ".ogg"];

function isVideoFile(src: string): boolean {
  return VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));
}

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/,
    /youtube\.com\/embed\/([^?&\s]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

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
            img: ({ src, alt }) => {
              if (!src) return null;

              if (isVideoFile(src)) {
                return (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", height: "auto" }}
                  >
                    <source src={src} type={`video/${src.split(".").pop()}`} />
                    {alt}
                  </video>
                );
              }

              return (
                <Image
                  src={src}
                  alt={alt || ""}
                  width={1200}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              );
            },
            a: ({ href, children }) => {
              if (!href) return <a>{children}</a>;

              const youtubeId = getYouTubeVideoId(href);
              if (youtubeId) {
                return (
                  <div className="video-embed">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}`}
                      title={String(children) || "YouTube video"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        width: "100%",
                        aspectRatio: "16/9",
                        border: "none",
                      }}
                    />
                  </div>
                );
              }

              return <a href={href}>{children}</a>;
            },
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

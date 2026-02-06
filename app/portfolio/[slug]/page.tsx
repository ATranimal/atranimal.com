import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown, { Components } from "react-markdown";
import { getPortfolioBySlug, getPortfolioItems } from "@/lib/markdown";

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

const markdownComponents: Components = {
  img: ({ src, alt }) => {
    if (!src || typeof src !== "string") return null;

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
            style={{ width: "100%", aspectRatio: "16/9", border: "none" }}
          />
        </div>
      );
    }

    return <a href={href}>{children}</a>;
  },
};

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
      {/* <header>
        <h1>{item.title}</h1>
        {item.tags && <span className="tags">{item.tags}</span>}
        <time dateTime={item.date}>{item.displayDate || item.date}</time>
      </header> */}
      <div className="markdown-content">
        <ReactMarkdown components={markdownComponents}>
          {item.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

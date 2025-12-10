import Link from "next/link";
import Image from "next/image";
import { getPortfolioItems } from "@/lib/markdown";

export default function PortfolioPage() {
  const portfolioItems = getPortfolioItems();

  return (
    <div>
      <section className="intro">
        <h1>Portfolio</h1>
        <p>A collection of projects I've worked on.</p>
      </section>

      <section className="portfolio">
        {portfolioItems.length === 0 ? (
          <p>No portfolio items yet.</p>
        ) : (
          <ul className="portfolio-list">
            {portfolioItems.map((item) => (
              <li key={item.slug} className="portfolio-card">
                <Link href={`/portfolio/${item.slug}`}>
                  {item.image && (
                    <div className="portfolio-card-image">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={400}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  )}
                  <div className="portfolio-card-content">
                    <h3>{item.title}</h3>
                    {item.tags && <span className="tags">{item.tags}</span>}
                    <time>{item.date}</time>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

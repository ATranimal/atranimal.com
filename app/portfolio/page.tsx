import Link from "next/link";
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
              <li key={item.slug}>
                <Link href={`/portfolio/${item.slug}`}>
                  <h3>{item.title}</h3>
                  {item.tags && <span className="tags">{item.tags}</span>}
                  <time>{item.date}</time>
                  {item.description && <p>{item.description}</p>}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

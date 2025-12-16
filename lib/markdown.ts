import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface ArticleMetadata {
  title: string;
  date: string;
  description?: string;
  slug: string;
}

export interface PortfolioMetadata {
  title: string;
  date: string;
  displayDate?: string;
  description?: string;
  tags?: string;
  image?: string;
  slug: string;
}

export interface Article extends ArticleMetadata {
  content: string;
}

export interface Portfolio extends PortfolioMetadata {
  content: string;
}

export interface Heading {
  level: number;
  text: string;
  id: string;
}

// Helper function to generate consistent IDs from heading text
export function generateHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getArticles(): ArticleMetadata[] {
  const articlesDirectory = path.join(contentDirectory, "articles");
  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(articlesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
      };
    });

  // Sort by date, most recent first
  articles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return articles;
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const filePath = path.join(contentDirectory, "articles", `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      content,
    };
  } catch (error) {
    return null;
  }
}

export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  // Split by any combination of \r\n, \n, or \r
  const lines = markdown.split(/\r?\n/);
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim(); // Trim whitespace and carriage returns
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = generateHeadingId(text);
      
      headings.push({ level, text, id });
    }
  }
  
  return headings;
}

export function getPortfolioItems(): PortfolioMetadata[] {
  const portfolioDirectory = path.join(contentDirectory, "portfolio");
  const filenames = fs.readdirSync(portfolioDirectory);

  const items = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(portfolioDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        displayDate: data["display-date"] || "",
        description: data.description || "",
        tags: data.tags || "",
        image: data.image || "",
      };
    });

  // Sort by date, most recent first
  items.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return items;
}

export function getPortfolioBySlug(slug: string): Portfolio | null {
  try {
    const filePath = path.join(contentDirectory, "portfolio", `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      displayDate: data["display-date"] || "",
      description: data.description || "",
      tags: data.tags || "",
      image: data.image || "",
      content,
    };
  } catch (error) {
    return null;
  }
}

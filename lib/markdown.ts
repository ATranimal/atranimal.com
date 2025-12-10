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
  description?: string;
  tags?: string;
  slug: string;
}

export interface Article extends ArticleMetadata {
  content: string;
}

export interface Portfolio extends PortfolioMetadata {
  content: string;
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
        description: data.description || "",
        tags: data.tags || "",
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
      description: data.description || "",
      tags: data.tags || "",
      content,
    };
  } catch (error) {
    return null;
  }
}

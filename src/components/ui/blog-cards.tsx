import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export interface BlogArticle {
  category: string;
  description: string;
  image: string;
  publishDate: string;
  slug: string;
  title: string;
}

interface BlogCardsProps {
  articles: BlogArticle[];
  title?: string;
  caption?: string;
}

export default function BlogCards({ articles, title = "Blog Articles", caption = "BLOG" }: BlogCardsProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3 border border-border rounded-full px-4 py-1.5">
              {caption}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              {title}
            </h2>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link
                key={index}
                to={`/blog/${article.slug}`}
                className="group block"
              >
                <article className="h-full flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-foreground/80 backdrop-blur-sm text-background text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full">
                        #{article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed flex-1">
                      {article.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
                        <ArrowRight className="h-4 w-4" />
                        Leer más
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.publishDate}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

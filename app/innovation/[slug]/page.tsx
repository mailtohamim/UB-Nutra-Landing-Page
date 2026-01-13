import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all articles to optimize build
export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((p) => p.slug === slug);
    if (!article) return { title: "Article Not Found" };

    return {
        title: `${article.title} | UB Nutraceuticals`,
        description: article.description,
        openGraph: {
            images: [article.image],
        },
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = articles.find((p) => p.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white pb-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full bg-gray-900">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 max-w-5xl mx-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-ub-red text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        {article.title}
                    </h1>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center text-gray-300 gap-4 sm:gap-8 text-sm font-medium tracking-wide">
                        <div className="flex items-center gap-2">
                            <User size={18} className="text-ub-red" />
                            {article.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-ub-red" />
                            {article.publishDate}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-3xl mx-auto px-6 py-16">
                <Link href="/" className="inline-flex items-center text-ub-red font-bold uppercase text-sm tracking-wide mb-12 hover:underline">
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>

                <div
                    className="prose prose-lg prose-headings:font-bold prose-headings:text-swisse-charcoal prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-ub-red marker:text-ub-red"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Footer/Share/CTA area could go here */}
                <div className="mt-16 pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-400 italic">
                        This article is for educational purposes only and is not intended to diagnose, treat, or cure any disease.
                    </p>
                </div>
            </div>
        </article>
    );
}

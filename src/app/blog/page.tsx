import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, User, ArrowRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data/blogData';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Automotive Knowledge Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Car Care Tips & Technical Guides
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Expert insights from master diagnostic mechanics on engine maintenance, AC efficiency, tyre safety, and saving on service costs.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-3">
                  <span className="text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors leading-snug">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">{post.date}</span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

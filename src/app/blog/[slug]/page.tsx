'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, User, ArrowLeft, Calendar, BookOpen, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data/blogData';

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-rose-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        <article className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-b border-slate-100 pb-6">
              <span className="font-semibold text-slate-700">{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4">
            <p className="text-base text-slate-600 font-medium italic">
              {post.excerpt}
            </p>

            <div className="whitespace-pre-line text-slate-700 space-y-4 pt-4">
              {post.content}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Published by <strong>SR Multi Car Tech Engineering Team</strong>
            </div>

            <Link
              href="/book-service"
              className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20"
            >
              Book Inspection For Your Car
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

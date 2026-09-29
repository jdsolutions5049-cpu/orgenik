import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/blogPosts';
import WhatsAppBanner from '../components/common/WhatsAppBanner';
import { ChevronRight, ArrowRight, Calendar, User, Clock, ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  const { navigateTo, pageParams } = useApp();
  const [selectedPostId, setSelectedPostId] = useState(pageParams?.postId || null);

  useEffect(() => {
    if (pageParams?.postId) {
      setSelectedPostId(pageParams.postId);
    }
  }, [pageParams]);

  const activePost = BLOG_POSTS.find(p => p.id === selectedPostId);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EBF5EE] via-[#F4F9F5] to-[#EBF5EE] py-12 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              <span>📖</span> ORGENIK JOURNAL
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F2D1F] font-serif">
              Recipes, Tips & Healthy Living
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Traditional Indian culinary wisdom, nutritional science, and direct farmer stories.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigateTo('home')} className="hover:text-[#2D6A4F]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <button onClick={() => setSelectedPostId(null)} className="hover:text-[#2D6A4F]">Blog</button>
          {activePost && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#143628] font-semibold truncate max-w-xs">{activePost.title}</span>
            </>
          )}
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {activePost ? (
          /* Full Article Reader View */
          <article className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-card space-y-6">
            <button
              onClick={() => setSelectedPostId(null)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D6A4F] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all articles</span>
            </button>

            <div className="space-y-3">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activePost.date}</span>
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {activePost.author}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activePost.readTime}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-bold text-[#0F2D1F] font-serif leading-tight">
                {activePost.title}
              </h1>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-sm">
              <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-emerald max-w-none text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
              <p className="font-medium text-gray-900 text-base">{activePost.excerpt}</p>
              <p>{activePost.content}</p>
              <div className="p-4 bg-[#F4F9F5] rounded-2xl border border-emerald-100 text-sm">
                <h4 className="font-bold text-[#143628] mb-1">Traditional Wellness Tip</h4>
                <p className="text-gray-600">
                  Always soak millets and whole pulses for at least 4 to 6 hours before cooking. This naturally deactivates phytic acid and maximizes your body's absorption of iron and calcium.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => navigateTo('products')}
                className="px-5 py-2.5 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs font-semibold rounded-xl"
              >
                Shop Traditional Ingredients
              </button>
            </div>
          </article>
        ) : (
          /* Grid of Blog Posts */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPostId(post.id)}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-gray-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0F2D1F] group-hover:text-[#2D6A4F] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center text-xs font-bold text-[#2D6A4F]">
                    <span>Read Article →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <WhatsAppBanner />
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group h-full"
    >
      <Link href={`/blog/${post.id}`}>
        <div
          className="bg-white/5 backdrop-blur-sm border border-primary/10 rounded-2xl
                     overflow-hidden hover:border-primary/30 transition-colors duration-300
                     h-full flex flex-col"
        >
          <div className="aspect-[16/10] overflow-hidden flex-shrink-0">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 
                       transition-transform duration-300"
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-4 text-sm text-primary/60">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h2
              className="text-xl font-semibold text-primary group-hover:text-primary/80
                         transition-colors duration-300 mt-4"
            >
              {post.title}
            </h2>

            <p className="text-primary/70 line-clamp-2 mt-4 flex-grow">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-4 mt-4 border-t border-primary/10">
              <div className="text-sm">
                <p className="text-primary/80">{post.author}</p>
                <p className="text-primary/60">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;

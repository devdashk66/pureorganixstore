import AnimatedTitle from "../_components/shared/AnimatedTitle";
import BlogGrid from "./_components/BlogGrid";

export const metadata = {
  title: "Blog | Pure Organix Store",
  description:
    "Explore articles about organic living, sustainable farming, and healthy recipes from Pure Organix Store.",
  keywords:
    "organic blog, healthy living, sustainable farming, organic recipes, Pure Organix",
  openGraph: {
    title: "Blog | Pure Organix Store",
    description:
      "Explore articles about organic living, sustainable farming, and healthy recipes from Pure Organix Store.",
    images: [
      {
        url: "/images/og/blog.jpg",
        width: 1200,
        height: 630,
        alt: "Pure Organix Store Blog",
      },
    ],
    type: "website",
    siteName: "Pure Organix Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Pure Organix Store",
    description:
      "Explore articles about organic living, sustainable farming, and healthy recipes from Pure Organix Store.",
    images: ["/images/og/blog.jpg"],
  },
};

const BlogPage = () => {
  // Example blog data (replace with your data fetching logic)
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Organic Farming",
      excerpt:
        "Discover why organic farming is better for your health and the environment...",
      category: "Farming",
      author: "John Doe",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/images/blog/organic-farming.jpg",
    },
    {
      id: 2,
      title: "Seasonal Vegetables Guide",
      excerpt:
        "Learn about the best vegetables to grow and eat in each season...",
      category: "Guides",
      author: "Jane Smith",
      date: "March 12, 2024",
      readTime: "4 min read",
      image: "/images/blog/seasonal-veggies.jpg",
    },
    // Add more blog posts...
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <AnimatedTitle
          title="Our Blog"
          subtitle="LATEST ARTICLES"
          accent="emerald"
        />

        <div className="mt-8">
          <BlogGrid posts={blogPosts} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

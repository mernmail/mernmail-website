import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { client, urlFor } from "@/sanity/lib/client";
import { format } from "date-fns";
import PropTypes from "prop-types";

const BlogCards = async (props) => {
  "use server";

  // Change in /blog/page/[id] route and in /api/revalidate route too!
  const cardsPerPage = 6;
  const currentPage = props.page;

  const query = `*[_type == 'blog'] | order(_createdAt desc) {
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage,
        _createdAt
    }[${(currentPage - 1) * cardsPerPage}...${currentPage * cardsPerPage}]`;

  const posts = await client.fetch(query, {}, { cache: "no-store" });

  const totalPostsQuery = `count(*[_type == 'blog'])`;
  const totalPosts = await client.fetch(
    totalPostsQuery,
    {},
    { cache: "no-store" }
  );

  const totalPages = Math.ceil(totalPosts / cardsPerPage);

  let begPage = currentPage - 2;
  let endPage = currentPage + 2;
  if (endPage > totalPages) {
    begPage -= endPage - totalPages;
    endPage = totalPages;
  }
  if (begPage < 1) {
    endPage += 1 - begPage;
    begPage = 1;
  }

  return (
    <>
      <section className="w-full flex flex-col md:flex-row md:flex-wrap max-w-6xl mx-auto">
        {posts.map((post, idx) => {
          const formattedDate = format(
            new Date(post._createdAt),
            "MMMM d, yyyy"
          );

          const truncatedDescription =
            post.smallDescription.length > 130
              ? post.smallDescription.substring(0, 130) + "..."
              : post.smallDescription;

          return (
            <div className="overflow-hidden sm:w-1/2 lg:w-1/3 p-4" key={idx}>
              <div className="group text-card-foreground bg-card rounded-lg border-border border">
                <Link href={`/blog/${post.currentSlug}`} className="block">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={
                        post.titleImage
                          ? urlFor(post.titleImage).url()
                          : "/blog-missing.png"
                      }
                      alt={post.title}
                      width={500}
                      height={300}
                      priority
                      className="w-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-row items-center justify-between mb-2 py-2">
                      <h2 className="text-xl font-semibold leading-tight">
                        {post.title}
                      </h2>
                      <div className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 duration-300">
                        <ExternalLink />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {truncatedDescription}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Published on: {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      {
        <div className="flex-center mt-12">
          {totalPages > 1 && (
            <nav className="mx-auto flex w-full justify-center">
              <ul className="flex flex-row items-center gap-1">
                {currentPage > 1 && (
                  <li>
                    <Link
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5"
                      href={`/blog/page/${currentPage - 1}`}
                    >
                      <ChevronLeft />
                    </Link>
                  </li>
                )}
                {Array.from({ length: totalPages > 5 ? 5 : totalPages }).map(
                  (_, i) => (
                    <li key={i}>
                      <Link
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                        href={`/blog/page/${begPage + i}`}
                        isActive={currentPage === begPage + i}
                      >
                        {begPage + i}
                      </Link>
                    </li>
                  )
                )}
                {currentPage < totalPages && (
                  <li>
                    <Link
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5"
                      href={`/blog/page/${currentPage + 1}`}
                    >
                      <ChevronRight />
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      }
    </>
  );
};

BlogCards.propTypes = {
  page: PropTypes.number.isRequired
};

export default BlogCards;

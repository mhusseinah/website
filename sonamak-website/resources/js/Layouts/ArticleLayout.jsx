import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function ArticleLayout({
    pageTitle,
    articleTitle,
    author,
    date,
    children,
    breadcrumb,
}) {
    const page = (
        <>
            <Head title={pageTitle} />

            <div className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        {/* Breadcrumb Navigation */}
                        {breadcrumb && (
                            <div className="mb-4 text-sm">
                                <Link href={breadcrumb.href} className="text-blue-600 hover:underline">
                                    &larr; {breadcrumb.text}
                                </Link>
                            </div>
                        )}

                        {/* Article Header */}
                        <h1 className="text-4xl font-bold text-gray-900">{articleTitle}</h1>
                        <div className="mt-4 flex items-center text-sm text-gray-500">
                            <span>By {author}</span>
                            <span className="mx-2">&bull;</span>
                            <span>{date}</span>
                        </div>

                        {/* Article Body */}
                        <article className="mt-8 prose lg:prose-xl max-w-none">
                            {children}
                        </article>
                    </div>
                </div>
            </div>
        </>
    );

    return <MainLayout children={page} />;
}
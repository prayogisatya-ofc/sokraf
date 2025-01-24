'use client';

import Link from "next/link";

export default function Home() {
	return (
		<div>
			<section className="bg-primary-100 rounded-2xl mt-5">
				<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
					<Link href="/" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-white rounded-full hover:bg-gray-100" role="alert">
						<span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">
              Sokraf is here for your creations
            </span>
						<svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
					</Link>
					<h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            Showcase Your Creativity on So<span className="text-primary-700">kraf</span>
          </h1>
					<p className="mb-8 text-md font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
            Explore a world of art and craftsmanship, find fresh inspiration, or promote your work to a global audience of creative enthusiasts.
          </p>
				</div>
			</section>
		</div>
	);
}
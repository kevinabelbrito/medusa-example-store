"use client"

import { useLatestPost } from "@lib/hooks/use-layout-data";
import PostPreview from "@modules/post/components/post-preview";

const LatestPosts = () => {

    const data = [
        {
            "title": "Hello there",
            "content": "This is a updated example!",
            "id": "post_01H9S8B65RK1JRTNQGRY0420E9",
            "created_at": new Date("2023-09-08T02:01:12.639Z"),
            "updated_at": new Date("2023-09-10T21:54:49.073Z")
        },
        {
            "title": "Another post",
            "content": "This is another post example!",
            "id": "post_01HA0TFQ1D6Q35VC18GHGJZ8BD",
            "created_at": new Date("2023-09-11T00:32:56.362Z"),
            "updated_at": new Date("2023-09-11T00:32:56.362Z")
        },
        {
            "title": "Example post",
            "content": "This is an post example!",
            "id": "post_01HA0TFZBS2P7YDSWW71V93VWE",
            "created_at": new Date("2023-09-11T00:33:04.890Z"),
            "updated_at": new Date("2023-09-11T00:33:04.890Z")
        },
        {
            "title": "Lorem ipsum dolor sit amet",
            "content": "Integer quam justo, interdum ut sapien id, aliquam ullamcorper felis. Suspendisse euismod velit ornare quam ultrices maximus. Sed ligula risus, sodales et vulputate quis, malesuada in turpis. Sed eleifend eros vitae pulvinar tincidunt. Quisque non ullamcorper felis. In cursus risus et ultrices ultricies. Aenean nec mattis arcu. Aliquam non leo at orci porta mattis et sed orci. Phasellus aliquam rhoncus condimentum. Aliquam felis diam, ultricies a tempor ut, eleifend sed nunc. Vestibulum aliquam augue vel bibendum hendrerit. Nulla vel nulla est. Nunc vitae elementum tortor, sit amet auctor ante. Ut sed interdum mauris. Praesent sit amet molestie augue.\n\nNunc commodo massa et velit sagittis sagittis. Duis elit tortor, lobortis sit amet nulla id, sollicitudin faucibus felis. Suspendisse cursus, mauris a ornare ullamcorper, velit lacus venenatis nunc, in lacinia massa augue sit amet odio. Duis viverra ullamcorper nibh, et elementum odio. Fusce at sem sagittis, vulputate nisi non, ultricies erat. Fusce faucibus dapibus molestie. Ut finibus est quis mattis mattis. Etiam non ante urna. Quisque non tempor elit. Donec quis magna ut neque elementum venenatis. Nullam tincidunt ante nec iaculis maximus.",
            "id": "post_01HA23TT088D7QXFJH28NSJDPN",
            "created_at": new Date("2023-09-11T12:35:31.463Z"),
            "updated_at": new Date("2023-09-11T12:35:31.463Z")
        }
    ];
    // const data = useLatestPost();
    // console.log(data);
  return (
    <div className="py-12">
        <div className="content-container py-12">
            <div className="flex flex-col items-center text-center mb-16">
                <span className="text-2xl text-gray-800 font-semibold mb-6">
                    Latest posts
                </span>
            </div>
            <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-6 gap-y-8">
                {data.length > 0
                ? data.map((post) => (
                    <li key={post.id}>
                        <PostPreview {...post} />
                    </li>
                ))
                : (
                    <div className="font-bold text-xl text-center text-gray-800">
                        There are no any posts
                    </div>
                )}
            </ul>
        </div>
    </div>
  )
}

export default LatestPosts
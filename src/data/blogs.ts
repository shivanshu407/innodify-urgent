export interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
}

export const defaultBlogs: BlogPost[] = [
    {
        title: "Build eCommerce Website From Scratch in 9 Easy Steps",
        slug: "build-ecommerce-website",
        excerpt: "A comprehensive guide to launching your first online store, from planning to deployment.",
        content: "Building an eCommerce website can seem daunting, but by following a structured approach, you can launch a professional store in no time. This guide covers everything from choosing a domain to setting up payments and shipping.",
        author: "Team Innodify",
        date: "Dec 20, 2024",
        readTime: "8 min read",
        category: "Development",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    },
    {
        title: "eCommerce UX Audit Checklist: Finding and Fixing UX Issues",
        slug: "ecommerce-ux-audit",
        excerpt: "Learn how to identify and resolve user experience problems that hurt your conversion rate.",
        content: "A UX audit is essential for any online store looking to improve its conversion rate. By systematically reviewing your site's navigation, product pages, and checkout process, you can find and fix friction points that drive customers away.",
        author: "Team Innodify",
        date: "Dec 15, 2024",
        readTime: "6 min read",
        category: "UX Design",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
    },
    {
        title: "Shopify vs Magento: Which Platform Is Right for Your Business?",
        slug: "shopify-vs-magento",
        excerpt: "An in-depth comparison of the two leading eCommerce platforms to help you make the right choice.",
        content: "Choosing between Shopify and Magento depends on your business size, technical expertise, and growth goals. Shopify offers ease of use, while Magento provides unparalleled flexibility and control for large-scale operations.",
        author: "Team Innodify",
        date: "Dec 10, 2024",
        readTime: "10 min read",
        category: "Platforms",
        image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80",
    },
    {
        title: "The Complete Guide to Headless Commerce",
        slug: "complete-guide-to-headless-commerce",
        excerpt: "Everything you need to know about modern headless architecture and composable commerce.",
        content: "Headless commerce decouples the frontend presentation layer from the backend commerce functionality. This allows for faster site performance, greater design flexibility, and a more seamless omnichannel customer experience.",
        author: "Team Innodify",
        date: "Dec 5, 2024",
        readTime: "12 min read",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    },
    {
        title: "How to Improve Your Magento Store's Core Web Vitals",
        slug: "improve-magento-core-web-vitals",
        excerpt: "Practical tips to boost your Magento performance and improve your Google rankings.",
        content: "Google's Core Web Vitals are critical for SEO and user experience. For Magento stores, optimizing Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) is key to maintaining search visibility.",
        author: "Team Innodify",
        date: "Nov 28, 2024",
        readTime: "7 min read",
        category: "Performance",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
        title: "Hyvä Theme: A Game Changer for Magento Performance",
        slug: "hyva-theme-magento-performance",
        excerpt: "Discover how Hyvä themes can dramatically improve your Magento 2 store's speed.",
        content: "Hyvä themes offer a modern toolset for Magento frontend development, replacing the complex Luma stack with Alpine.js and Tailwind CSS. The result is lightning-fast performance and a much better developer experience.",
        author: "Team Innodify",
        date: "Nov 20, 2024",
        readTime: "5 min read",
        category: "Magento",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
        "title": "E-commerce Growth Hacks That Actually Work",
        "slug": "ecommerce-growth-hacks",
        "excerpt": "Discover proven e-commerce growth hacks that drive traffic, boost conversions, and increase repeat sales—no fluff, just strategies that work.",
        "content": "Growth hacking in e-commerce requires a mix of data analysis, creative marketing, and continuous testing. From referral programs to strategic email automation, these hacks are designed to scale your business quickly.",
        "author": "Innodify Admin",
        "date": "Jan 23, 2026",
        "readTime": "7 min read",
        "category": "Technology",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zSRv3D2XGd-GBdY025Oy7yW9sI1jp_vkqA&s"
    },
    {
        "title": "Scaling Online Stores",
        "slug": "scaling-online-stores",
        "excerpt": "Learn proven strategies to scale your online store efficiently—boost traffic, improve conversions, and grow revenue without breaking operations.",
        "content": "Scaling Online Stores\n\nScaling an online store isn’t just about getting more traffic or adding more products. True growth happens when your systems, marketing, operations, and customer experience evolve together. Many stores hit a plateau not because demand disappears, but because their foundation isn’t built to scale.\n\nIn this guide, we’ll break down what it really takes to scale an online store sustainably—without burning ad budgets, breaking operations, or losing brand trust.\n\n1. Build a Strong Foundation Before You Scale\n\nBefore increasing traffic or ad spend, your store must be technically and operationally ready.\nKey fundamentals to check:\nFast page load speed (especially on mobile)\nClean navigation and clear product categories\nSimple checkout with minimal friction\nReliable inventory and order management\n\nMobile-first design\n\nScaling traffic to a slow or confusing website only multiplies problems. Optimization always comes before expansion.\n\n2. Optimize for Conversions, Not Just Traffic\nMore visitors don’t guarantee more sales. Conversion optimization is the fastest way to scale revenue without increasing costs.\nFocus on:\nHigh-quality product images and videos\nClear product descriptions with benefits, not just features\nVisible trust signals (reviews, guarantees, secure payments)\nTransparent pricing, shipping, and return policies\nStrong calls to action\nEven a small increase in conversion rate can dramatically impact revenue as traffic grows.",
        "author": "Innodify Admin",
        "date": "Jan 23, 2026",
        "readTime": "10 min read ",
        "category": "Marketing",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROijDP-7kfXA9Zs-hJFypTS9HUPk_TPAEysQ&s"
    },
];

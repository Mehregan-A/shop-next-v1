export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/login/',
        },
        sitemap: 'https://acme.com/sitemap.xml',
    }
}
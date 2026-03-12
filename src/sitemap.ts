export default function sitemap() {
  return [
    { url: "https://yourdomain.com", priority: 1 }, // change after deployment
    { url: "https://yourdomain.com/services", priority: 0.8 },
    { url: "https://yourdomain.com/about", priority: 0.7 },
    { url: "https://yourdomain.com/contact", priority: 0.7 },
  ];
}
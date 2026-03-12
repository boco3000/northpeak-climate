export default function sitemap() {
  return [
    { url: "https://northpeak-climate.vercel.app/", priority: 1 }, // change after deployment
    { url: "https://northpeak-climate.vercel.app/services", priority: 0.8 },
    { url: "https://northpeak-climate.vercel.app/about", priority: 0.7 },
    { url: "https://northpeak-climate.vercel.app/contact", priority: 0.7 },
  ];
}
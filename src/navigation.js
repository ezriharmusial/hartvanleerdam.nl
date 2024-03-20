import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
  //   {
  //     text: 'Homes',
  //     links: [
  //       {
  //         text: 'SaaS',
  //         href: getPermalink('/homes/saas'),
  //       },
  //       {
  //         text: 'Startup',
  //         href: getPermalink('/homes/startup'),
  //       },
  //       {
  //         text: 'Mobile App',
  //         href: getPermalink('/homes/mobile-app'),
  //       },
  //       {
  //         text: 'Personal',
  //         href: getPermalink('/homes/personal'),
  //       },
  //     ],
  //   },
    {
      text: 'Pages',
      links: [
  //       {
  //         text: 'Features (Anchor Link)',
  //         href: getPermalink('/#features'),
  //       },
  //       {
  //         text: 'Services',
  //         href: getPermalink('/services'),
  //       },
  //       {
  //         text: 'Pricing',
  //         href: getPermalink('/pricing'),
  //       },
        {
          text: 'Over ons',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
  //       {
  //         text: 'Terms',
  //         href: getPermalink('/terms'),
  //       },
  //       {
  //         text: 'Privacy policy',
  //         href: getPermalink('/privacy'),
  //       },
      ],
    },
  //   {
  //     text: 'Landing',
  //     links: [
  //       {
  //         text: 'Lead Generation',
  //         href: getPermalink('/landing/lead-generation'),
  //       },
  //       {
  //         text: 'Long-form Sales',
  //         href: getPermalink('/landing/sales'),
  //       },
  //       {
  //         text: 'Click-Through',
  //         href: getPermalink('/landing/click-through'),
  //       },
  //       {
  //         text: 'Product Details (or Services)',
  //         href: getPermalink('/landing/product'),
  //       },
  //       {
  //         text: 'Coming Soon or Pre-Launch',
  //         href: getPermalink('/landing/pre-launch'),
  //       },
  //       {
  //         text: 'Subscription',
  //         href: getPermalink('/landing/subscription'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Blog',
  //     links: [
  //       {
  //         text: 'Blog List',
  //         href: getBlogPermalink(),
  //       },
  //       {
  //         text: 'Article',
  //         href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
  //       },
  //       {
  //         text: 'Article (with MDX)',
  //         href: getPermalink('markdown-elements-demo-post', 'post'),
  //       },
  //       {
  //         text: 'Category Page',
  //         href: getPermalink('tutorials', 'category'),
  //       },
  //       {
  //         text: 'Tag Page',
  //         href: getPermalink('astro', 'tag'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Widgets',
  //     href: '#',
  //   },
  ],
  actions: [{ text: 'Contact', href: '/contact', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Hart van Leerdam',
      links: [
        { text: 'Over ons', href: '/about' },
        { text: 'Contact', href: '/contact' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/hartvanleerdam/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61557529342145' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://downthewormhole.nl/images/ring.webp)]"></span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://downthewormhole.nl/ez-ict-solutions"> EZ-ICT Solutions</a> · All rights reserved.
  `,
};

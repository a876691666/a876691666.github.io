export const navbarData = {
  homeTitle: '石头博客',
}

export const footerData = {
  author: '石头',
  aboutAuthor: '你好！我是石头，一个技术爱好者、问题解决者和软件工程师。',
  authorInterest:
    '我在Javascript、Typescript、VueJs、Threejs、D3js和Nuxt方面有相当丰富的知识。如果你有有趣的想法，无论是开源项目还是付费项目，让我们联系吧。',
  aboutTheSite:
    '这是一个使用Nuxt3、TailwindCSS、NuxtContent、Nuxt Icon构建的个人博客网站。目前部署在Github Pages上。',
}

export const homePage = {
  title: '欢迎来到我的博客网站',
  description:
    '获取Web开发、Javascript、Typescript、NodeJs、Vue、Threejs、D3js和Nuxt相关的文章、技巧、学习资源等。',
}

export const blogsPage = {
  title: '所有博客',
  description: '在这里你可以找到我在这个网站上写过和发布过的所有博客文章。',
}

export const categoryPage = {
  title: '分类',
  description: '以下分类是从不同博客文章中提到的所有标签生成的',
}

export const aboutPage = {
  title: '石头',
  description: '软件工程师，问题解决者，Web技术爱好者。',
  aboutMe: '你好！我是一个软件工程师，大部分时间都在编写代码。热爱开源和可视化。',
}

export const seoData = {
  title: `石头 | 石头博客`,
  ogTitle: `让我们学习Javascript、Typescript、Vue、Threejs、D3js和问题解决 - 石头博客 | 石头`,
  description: `你好，我是石头。软件工程师，拥有10年以上的软件开发经验。 - 石头博客 | 石头`,
  twitterDescription: `石头博客，我在这里玩转Nuxt、Vue、Threejs、D3js等技术，展示我的博客、资源等 - 石头博客 | 石头`,
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://github.com/a876691666',
  twitterHandle: '@ajia0',
  mailAddress: '928200728@qq.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/a876691666',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]

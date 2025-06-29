import { Feed } from 'feed'

const basePath = 'https://github.com/a876691666'

export default defineEventHandler(async (event) => {
  setHeader(event, 'content-type', 'text/xml')
  const docs = await queryCollection(event, 'content').all()
  const feed = new Feed({
    title: '石头博客',
    description: '石头博客',
    id: basePath,
    link: basePath,
    language: 'en',
    favicon: `${basePath}/favicon.ico`,
    copyright: 'MIT',
    author: {
      name: '石头',
      email: '928200728@qq.com',
      link: basePath,
    },
  })

  // Add the feed items
  docs.forEach((doc) => {
    // console.log(doc)
    feed.addItem({
      title: doc.title || '',
      id: basePath + doc.path,
      link: basePath + doc.path,
      description: doc.description,
      content: doc.description,
      date: new Date(doc.meta?.date as string),
    })
  })

  return feed.rss2()
})

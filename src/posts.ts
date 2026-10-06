import { getCollection } from 'astro:content';

/** 所有非草稿文章，新到舊 */
export const getPosts = async () =>
  (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

export type Post = Awaited<ReturnType<typeof getPosts>>[number];

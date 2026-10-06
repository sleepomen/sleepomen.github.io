// 文章分類：新增分類就在這裡加一行，文章的 category 填 id
export const categories = [
  { id: 'tech', label: '技術', en: 'Tech' },
  { id: 'notes', label: '心得', en: 'Notes' },
  { id: 'life', label: '生活', en: 'Life' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export const categoryIds = categories.map((c) => c.id) as [CategoryId, ...CategoryId[]];

export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!;

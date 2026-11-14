// 文章資料夾：同一個資料夾的文章在文章列表只會顯示成一個資料夾，點進去才看到裡面的文章
// 新增資料夾就在這裡加一行，文章最上面加上 series: 資料夾的 id
export const series = [
  { id: 'selection-116', title: '116特殊選才面試彙整', description: '116 特殊選才各校面試與模擬面試心得。' },
] as const;

export type SeriesId = (typeof series)[number]['id'];

export const seriesIds = series.map((s) => s.id) as [SeriesId, ...SeriesId[]];

export const getSeries = (id: SeriesId) => series.find((s) => s.id === id)!;

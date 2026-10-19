// 推薦：在對應分類的 items 裡加一筆即可
// cover 可放 public/images/recommend/ 底下的路徑（例如 '/images/recommend/xxx.webp'）或外部圖片網址
export interface RecommendItem {
  title: string; // 專輯名 / 歌名 / 樂團名
  creator?: string; // 歌手 / 作者 / 製作公司；寫成「類型 · 國家」時，類型會變成頁面上的 hashtag
  genre?: string; // 想手動指定 hashtag 才填，沒填就用 creator「 · 」前面那段
  year?: string;
  cover?: string;
  note?: string; // 推薦原因
  url?: string; // Spotify、YouTube、巴哈、博客來…
  spotify?: string; // 音樂卡片下方會多一顆「Check On Spotify」按鈕
}

export interface RecommendGroup {
  id: string;
  label: string;
  en: string;
  // 'player' = 淺色播放器卡片（音樂用），子分類會沿用
  style?: 'player';
  items?: RecommendItem[];
  // 子分類，可以一直往下分
  children?: RecommendGroup[];
}

export const recommend: RecommendGroup[] = [
  {
    id: 'music',
    label: '音樂',
    en: 'Music',
    style: 'player',
    children: [
      {
        id: 'metal',
        label: 'Metal',
        en: 'Metal',
        children: [
          {
            id: 'band',
            label: 'BAND',
            en: 'Band',
            items: [
              {
                title: 'Sleep Token',
                creator: 'Alternative Metal · UK',
                cover: '/images/recommend/sleep-token.jpg',
                spotify: 'https://open.spotify.com/artist/2n2RSaZqBuUUukhbLlpnE6',
              },
              {
                title: 'Bad Omens',
                creator: 'Metalcore · US',
                cover: '/images/recommend/bad-omens.jpg',
                spotify: 'https://open.spotify.com/artist/3Ri4H12KFyu98LMjSoij5V?si=pkwmyyo6QCuUZQtYYZ_pyQ'
              },
              {
                title: 'Spiritbox',
                creator: 'Progressive Metal · Canada',
                cover: '/images/recommend/spiritbox.jpg',
                spotify: 'https://open.spotify.com/artist/4MzJMcHQBl9SIYSjwWn8QW?si=5IkQ1lBfRvevHOW7VEr_OA'
              },
              {
                title: 'PlasticSkin',
                creator: 'Alternative Metal · US',
                cover: '/images/recommend/plasticskin.jpg',
                spotify: 'https://open.spotify.com/artist/3bxcq5dtyl81TTFQeqxD7b?si=VOX-tp1OQ5iM8T5Gfzdc5Q'
              },
              {
                title: 'Catch Your Breath',
                creator: 'Metalcore · US',
                cover: '/images/recommend/catchyourbreathe.webp',
                spotify: 'https://open.spotify.com/artist/2fqPOGxG12nEERj8YG7p22?si=ftndLCaHQjuY_kUlo9lz8A'
              },
              {
                title: 'Dayseeker',
                creator: 'Metalcore · US',
                cover: '/images/recommend/dayseeker.webp',
                spotify: 'https://open.spotify.com/artist/5FjQVp1Lb0kltmwIuu5kfj?si=RSEDG9MVTDq9HMXddh7iJg'
              },
              {
                title: 'President',
                creator: 'Metalcore · UK',
                cover: '/images/recommend/president.jpg',
                spotify: 'https://open.spotify.com/artist/40nPYop0FOD9Syyu5y4dAU?si=-J1_B0ukRO21P6LiXqV8IQ'
              },
              {
                title: 'Slaughter to Prevail',
                creator: 'Deathcore · Russia',
                cover: '/images/recommend/stp.jpg',
                spotify: 'https://open.spotify.com/artist/24Oiw7BlvO1BETecDLJt6m?si=mqozP8h5Q-O8SdqWPXTo_w'
              },
              {
                title: 'Orbit Culture',
                creator: 'Death Metal · Sweden',
                cover: '/images/recommend/orbit.jpg',
                spotify: 'https://open.spotify.com/artist/7k29FbDq69ju2fe6zTskxY?si=Vzk1ihbmR2SkGySwRPybWA'
              },
              {
                title: 'Silent Planet',
                creator: 'Progressive Metalcore · US',
                cover: '/images/recommend/silent.jpg',
                spotify: 'https://open.spotify.com/artist/0JGTiwfinlCuANGu4Gq2XU?si=kD3Ns8cGTryu-x-aW2_kkw'
              },
              {
                title: 'Suicide Silence',
                creator: 'Deathcore · US',
                cover: '/images/recommend/silence.webp',
                spotify: 'https://open.spotify.com/artist/6HZr7Fs2VfV1PYHIwo8Ylc?si=0dc3KCb3RFSjEj3SrtiA2A'
              },
              {
                title: 'Brand of Sacrifice',
                creator: 'Deathcore · Canada',
                cover: '/images/recommend/brand.jpg',
                spotify: 'https://open.spotify.com/artist/4d6Rawrese4OLF1zZCztod?si=0HQHSYVUSka25m3oyz8kPg'
              },
              {
                title: 'TSS',
                creator: 'Metalcore · France',
                cover: '/images/recommend/tss.jpg',
                spotify: 'https://open.spotify.com/artist/0hTsRy6iJPc0fgkxhEHzmT?si=ZVB5pKHpQH6bqWsKkloEJw'
              },
              {
                title: 'Immortal Disfigurement',
                creator: 'Symphonic Deathcore · US',
                cover: '/images/recommend/id.webp',
                spotify: 'https://open.spotify.com/artist/7qkUuynmt0X6RkPgvF5ttK?si=zMg_KgcQSwShU9JZysSAYw'
              },
              {
                title: 'Ov Ruin',
                creator: 'Symphonic Deathcore · US',
                cover: '/images/recommend/ov.png',
                spotify: 'https://open.spotify.com/artist/6gdIQiCwQ0KlZTyE2Ldlgm?si=IJ_dPI_NQcGUHJyKrKGYvw'
              },
              {
                title: 'BABYMETAL',
                creator: 'Kawaii Metal · Japan',
                cover: '/images/recommend/baby.jpg',
                spotify: 'https://open.spotify.com/artist/630wzNP2OL7fl4Xl0GnMWq?si=pRVGGjfJTFi6YoyE8iNofw'
              },
              {
                title: 'Synestia',
                creator: 'Symphonic Deathcore · US',
                cover: '/images/recommend/syn.webp',
                spotify: 'https://open.spotify.com/artist/5q6QQFwE4elu0q1HA10HTb?si=zTdaHQdKQQaKuAOWoefn4w'
              },
              {
                title: 'Watain',
                creator: 'Black Metal · Sweden',
                cover: '/images/recommend/watain.jpg',
                spotify: 'https://open.spotify.com/artist/4OpHsZuhfJMU9PZ3zkyUQX?si=HoizfsTLRrOb-Eui2xNTkw'
              },
              {
                title: 'Humanity\'s Last Breath',
                creator: 'Deathcore · Sweden',
                cover: '/images/recommend/human.jpg',
                spotify: 'https://open.spotify.com/artist/7nKz8GVqHk0bUGmBm6wm3E?si=SngRjSPRT0mzX7607HsJlg'
              },
              {
                title: 'Kneel Before the Death',
                creator: 'Symphonic Deathcore · Finland',
                cover: '/images/recommend/death.jpg',
                spotify: 'https://open.spotify.com/artist/3Gd8aErwIatbB6fw735SNK?si=CBsglac0SmGlRsV3A3_Tkg'
              },
              {
                title: 'Meshuggah',
                creator: 'Djent · Sweden',
                cover: '/images/recommend/me.webp',
                spotify: 'https://open.spotify.com/artist/3ggwAqZD3lyT2sbovlmfQY?si=fFTAZv7FTpCJr7jzRSD6cQ'
              },
              {
                title: 'Diepression',
                creator: 'Deathcore · Taiwan',
                cover: '/images/recommend/die.webp',
                spotify: 'https://open.spotify.com/artist/0PNMgEaYbPYmBZETg0gJ2l?si=mjR7N4f9R4ivEO-6SW3-_w'
              },
              {
                title: 'Whitechapel',
                creator: 'Deathcore · US',
                cover: '/images/recommend/white.webp',
                spotify: 'https://open.spotify.com/artist/5274obTQJjzjyycRyJlfml?si=h6MyEKIGRcWAVyaaPKMQiA'
              },
              {
                title: 'Powerwolf',
                creator: 'Power Metal · Germany',
                cover: '/images/recommend/power.jpg',
                spotify: 'https://open.spotify.com/artist/5HFkc3t0HYETL4JeEbDB1v?si=5e74633c8a974ca3'
              },
              {
                title: 'I Prevail',
                creator: 'Metalcore · US',
                cover: '/images/recommend/i.jpg',
                spotify: 'https://open.spotify.com/artist/3Uobr6LgQpBbk6k4QGAb3V?si=4b8faef1172f442a'
              },
              {
                title: 'Lorna Shore',
                creator: 'Symphonic Deathcore · US',
                cover: '/images/recommend/lorna.jpg',
                spotify: 'https://open.spotify.com/artist/6vXYoy8ouRVib302zxaxFF?si=059b2d6b4e0448e9'
              },
              {
                title: 'Holywatr',
                creator: 'Alternative Metal · US',
                cover: '/images/recommend/holy.jpg',
                spotify: 'https://open.spotify.com/artist/0muUUrVzG2eMabJN2UHtZB?si=8b960ae23f754458'
              },
              {
                title: 'Bring Me The Horizon',
                creator: 'Metalcore · US',
                cover: '/images/recommend/bring.jpg',
                spotify: 'https://open.spotify.com/artist/1Ffb6ejR6Fe5IamqA5oRUF?si=3d9ccd68ae8441cc'
              },
              {
                title: 'Falling In Reverse',
                creator: 'Metalcore · US',
                cover: '/images/recommend/falling.webp',
                spotify: 'https://open.spotify.com/artist/2CmaKO2zEGJ1NWpS1yfVGz?si=d482fbad90954870'
              },
              {
                title: 'Jutes',
                creator: 'Alternative Metal · US',
                cover: '/images/recommend/j.jpg',
                spotify: 'https://open.spotify.com/artist/53fzjsJnjEKkA6TdncuIM4?si=85353bc85afd4b38'
              },
              {
                title: '1349',
                creator: 'Black Metal · Norway',
                cover: '/images/recommend/1349.webp',
                spotify: 'https://open.spotify.com/artist/150xbiJGnTy1tSBZ9EFKnT?si=93d0f96bf34848ab'
              },
              {
                title: 'Deviloof',
                creator: 'Black Metal · Japan',
                cover: '/images/recommend/devi.jpg',
                spotify: 'https://open.spotify.com/artist/4gSAE6I87LS39XMZpoQGPG?si=a0ad6ea9e9514a41'
              },
            ],
          },
          {
            id: 'album',
            label: 'ALBUM',
            en: 'Album',
            items: [
              {
                title: 'Take Me Back To Eden',
                creator: 'Sleep Token',
                year: '2023',
                cover: '/images/recommend/take-me-back-to-eden.jpg',
                spotify: 'https://open.spotify.com/album/1gjugH97doz3HktiEjx2vY',
              },
            ],
          },
        ],
      },
      {
        id: 'rnb',
        label: 'R&B',
        en: 'R&B',
        items: [],
      },
    ],
  },
  {
    id: 'anime',
    label: '動漫',
    en: 'Anime',
    items: [],
  },
  {
    id: 'books',
    label: '書籍',
    en: 'Books',
    items: [],
  },
];

// 算某分類（含所有子分類）共有幾筆
export const countItems = (g: RecommendGroup): number =>
  (g.items?.length ?? 0) + (g.children ?? []).reduce((n, c) => n + countItems(c), 0);

// 找某分類底下前幾張封面，拿來當入口預覽
export const previewCovers = (g: RecommendGroup, max = 3): string[] =>
  [
    ...(g.items ?? []).flatMap((it) => (it.cover ? [it.cover] : [])),
    ...(g.children ?? []).flatMap((c) => previewCovers(c, max)),
  ].slice(0, max);

// 把整棵樹攤平成「路徑 → 分類」，每個分類各一頁：/recommend/music/metal/band/
export interface RecommendNode {
  path: string[]; // 例如 ['music', 'metal', 'band']
  trail: RecommendGroup[]; // 從最上層到自己
}

export const recommendNodes = (groups = recommend, trail: RecommendGroup[] = []): RecommendNode[] =>
  groups.flatMap((g) => {
    const t = [...trail, g];
    return [{ path: t.map((x) => x.id), trail: t }, ...recommendNodes(g.children ?? [], t)];
  });

export const recommendHref = (path: string[]) => `/recommend/${path.map((p) => `${p}/`).join('')}`;

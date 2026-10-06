export interface ExperienceItem {
  year: string;
  title: string;
  sub?: string;
  result: string;
}

export interface ExperienceGroup {
  id: string;
  label: string;
  en: string;
  items: ExperienceItem[];
}

export const experience: ExperienceGroup[] = [
  {
    id: 'info',
    label: '資訊',
    en: 'Information',
    items: [
      { year: '2026', title: '全國高中職人工智慧與資訊生活應用創新競賽', sub: '實作技術組', result: '特優' },
      { year: '2026', title: 'AITC 人工智慧高中職進階人才培育', result: '正取 學員' },
      { year: '2026', title: 'DevJam TW 2026 黑客松競賽', sub: 'Google Cloud 組', result: '止步複賽' },
      { year: '2026', title: '2026 iThome 鐵人賽', sub: 'AI Engineering 組', result: '進行中...' },
      { year: '2026', title: 'OSSInt 開源空間資訊於國家韌性應用 黑客松競賽', sub: '組長', result: '提案進行中...' },
      { year: '2026', title: '教育部 AI新世代扎根系列活動', sub: '台北場', result: '特別表現獎,第三' },
      { year: '2026', title: 'TAAI 高中生論文', sub: '人工智慧應用', result: '論文撰寫中...' },
    ],
  },
  {
    id: 'humanities',
    label: '人文',
    en: 'Humanities',
    items: [
      { year: '2026', title: 'Change Maker 高中生社創人才培育計畫', sub: '合作單位:更生少年關懷協會', result: '完成一年之培訓計畫' },
      { year: '2026', title: 'CyberFair 網際博覽會', sub: '紀文豪-大起大落的人生', result: '國際金獎' },
      { year: '2026', title: '全國人文永續行動創新應用競賽', sub: '綜合組', result: '佳作 最佳人氣獎' },
      { year: '2025', title: '高中職生AI淨零新世代創造營', result: '止步決賽' },
      { year: '2025-2026', title: '總統與青年論壇', result: '連續兩屆發表組別' },
      { year: '2026', title: 'TCCA 社會創新教育年會', result: '分享組別' },
      { year: '2026', title: '北二區自主學習聯合成果動態發表競賽', result: '優選' },
      { year: '2026', title: '高雄教育節第七屆自主學習年會', result: '佳作' },
      { year: '2026', title: 'Fustar 未來之星 科學創意挑戰賽', result: '提案' },
      { year: '2025', title: '國民法官 模擬法庭', result: '秘書組/公關組 組長' },
    ],
  },
  {
    id: 'electrical',
    label: '電機',
    en: 'Electrical',
    items: [
      { year: '2025', title: 'AERC 亞洲機器人競賽', sub: 'B02/B05', result: '第一/佳作' },
      { year: '2026', title: 'AERC 亞洲機器人競賽', sub: 'B02/B05', result: '第二/第二' },
      { year: '2026', title: 'AERC 亞洲機器人競賽', sub: 'B02/B05/B13', result: '佳作/第一/佳作' },
    ],
  },
];

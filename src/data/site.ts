import {
  siArduino,
  siCplusplus,
  siCss,
  siDiscord,
  siDocker,
  siEspressif,
  siFastapi,
  siGit,
  siGithub,
  siGmail,
  siHtml5,
  siInstagram,
  siPython,
  siThreads,
  type SimpleIcon,
} from 'simple-icons';

export const site = {
  name: 'Vessel',
  title: 'Vessel',
  description: '116特選牲',
  quote: 'The unexamined life is not worth living',
  quoteBy: 'Socrates',
  slogan: '嘗試不同的人生',
  avatar: '/images/pochi.webp',
  intro:
    '電神們早安，我來自淡江高中人文社會班，目前為116特選牲，喜歡做開發，於資訊、電機、人文社會領域都有相關經驗，這裡可以看我發心得或是分享一些酷東西，可以叫我 Vessel，各位多多指教。',
};

export const nav = [
  { href: '/', label: '首頁', en: 'Home' },
  { href: '/about/', label: '關於', en: 'About' },
  { href: '/experience/', label: '經歷', en: 'Experience' },
  { href: '/blog/', label: '文章', en: 'Blog' },
  { href: '/links/', label: '友站', en: 'Friends' },
];

export const skills: { label: string; icons: SimpleIcon[] }[] = [
  { label: 'Python', icons: [siPython] },
  { label: 'C++', icons: [siCplusplus] },
  { label: 'Docker', icons: [siDocker] },
  { label: 'HTML / CSS', icons: [siHtml5, siCss] },
  { label: 'Git', icons: [siGit] },
  { label: 'FastAPI', icons: [siFastapi] },
  { label: 'Arduino', icons: [siArduino] },
  { label: 'ESP32', icons: [siEspressif] },
];

export const contacts: { label: string; href: string; icon: SimpleIcon }[] = [
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=yileliu2009@gmail.com', icon: siGmail },
  { label: 'GitHub', href: 'https://github.com/sleepomen', icon: siGithub },
  { label: 'Instagram', href: 'https://instagram.com/yile_.09', icon: siInstagram },
  { label: 'Threads', href: 'https://www.threads.net/@vessel_st.dev', icon: siThreads },
  { label: 'Discord', href: 'https://discord.com/users/1203375529928032267', icon: siDiscord },
];

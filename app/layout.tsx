import type { Metadata } from 'next';
import './globals.css';

const description =
  '王志成的个人网站：长期在教育与消费科技领域，把产品、内容与渠道组合起来，记录做过的事、正在探索的问题，以及生活里的故事。';

export const metadata: Metadata = {
  metadataBase: new URL('https://zachsaws.github.io'),
  title: '王志成｜作品、生活与记录',
  description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: '王志成｜在习以为常里，重新找到可能',
    description,
    siteName: '王志成的个人网站',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: '/og-home.png',
        width: 1200,
        height: 630,
        alt: '王志成个人网站：在习以为常里，重新找到可能',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '王志成｜在习以为常里，重新找到可能',
    description,
    images: ['/og-home.png'],
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

import Link from 'next/link';

type CaseNextProps = {
  index: string;
  title: string;
  href: string;
};

export default function CaseNext({ index, title, href }: CaseNextProps) {
  return (
    <nav className="case-next" aria-label="继续浏览作品">
      <Link href="/#projects" className="case-next-all">
        全部作品 ↙
      </Link>
      <Link href={href} className="case-next-link">
        <span>NEXT CASE / {index}</span>
        <strong>{title}</strong>
        <b aria-hidden="true">→</b>
      </Link>
    </nav>
  );
}

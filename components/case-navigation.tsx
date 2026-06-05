import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

type CaseNavigationProps = {
  nextHref: string;
};

export function CaseNavigation({ nextHref }: CaseNavigationProps) {
  return (
    <nav className="case-navigation fade-in" aria-label="Case navigation">
      <Link href="/" className="header-cta header-cta-secondary case-navigation-link">
        <ArrowLeft aria-hidden="true" size={16} strokeWidth={2} />
        <span>На главную</span>
      </Link>
      <Link href={nextHref} className="header-cta header-cta-secondary case-navigation-link">
        <span>Следующий</span>
        <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
      </Link>
    </nav>
  );
}

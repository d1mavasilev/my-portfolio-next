import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return <p className={className ? `tag ${className}` : "tag"}>{children}</p>;
}

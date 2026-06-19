interface TagProps {
  children: React.ReactNode;
  size?: "default" | "small" | "badge" | "index";
}

export default function Tag({
  children,
  size = "default",
}: TagProps) {
  const styles = {
    default:
      "px-3 py-1.5 text-sm border border-border text-muted",

    small:
      "px-2 py-1 text-xs border border-border text-subtle",

    badge:
      "px-2 py-1 text-xs uppercase tracking-[0.15em] border border-border text-subtle",

    index:
      "text-sm text-subtle",
  };

  return (
    <span className={styles[size]}>
      {children}
    </span>
  );
}
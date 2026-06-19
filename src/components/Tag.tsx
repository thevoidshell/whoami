interface TagProps {
  children: React.ReactNode;
  size?: "default" | "small" | "badge" | "index";
}

export default function Tag({
  children,
  size = "default",
}: TagProps) {
  const styles = {
    default: "px-3 py-2 border rounded",
    small: "px-2 py-1 text-sm border rounded",
    badge: "px-2 py-1 text-xs border rounded",
    index: "text-sm text-gray-500",
  };

  return (
    <span className={styles[size]}>
      {children}
    </span>
  );
}
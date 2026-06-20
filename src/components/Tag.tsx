interface TagProps {
  children: React.ReactNode;
  size?: "default" | "index";
}


const styles = {
  default:
    `
        inline-flex
        items-center
        px-3
        py-1.5
        border
        border-border
        text-sm
        text-muted
        `,

  index:
    `
        text-sm
        text-subtle
        `,
} as const;


export default function Tag({
  children,
  size = "default",
}: TagProps) {
  return (
    <span className={styles[size]}>
      {children}
    </span>
  );
}
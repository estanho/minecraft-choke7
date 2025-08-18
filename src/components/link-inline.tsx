interface LinkInlineProps {
  href: string;
  text: string;
  label: string;
}

export function LinkInline({ href, text, label }: LinkInlineProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="underline decoration-lime-800/90 decoration-2 underline-offset-3 transition-colors hover:text-lime-800 dark:hover:text-lime-400"
    >
      {text}
    </a>
  );
}

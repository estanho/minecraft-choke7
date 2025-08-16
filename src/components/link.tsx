export default function Link({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline decoration-lime-800/90 decoration-2 underline-offset-3 transition-colors hover:text-lime-400"
    >
      {text}
    </a>
  );
}

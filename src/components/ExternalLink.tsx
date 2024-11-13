export function ExternalLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4"
    >
      {children}
    </a>
  );
}

export const Section = ({
  id,
  className = "",
  backgroundColor = "theme-blue",
  titleColor = "white",
  children,
  title,
  paddingY = "py-8"
}: {
  id: string;
  className?: string;
  backgroundColor?: string;
  titleColor?: string;
  children: React.ReactNode;
  title?: string;
  paddingY?: string;
}) => (
  <section
    id={id}
    className={`my-20 ${className} scroll-mt-24`}
    aria-labelledby={`${id}-title`}
  >
    {title && (
      <header className={`${paddingY} bg-${backgroundColor} text-${titleColor} grid justify-center`}>
        <h2
          id={`${id}-title`}
          className="text-2xl font-normal tracking-tight text-center"
        >
          <a href={`#${id}`} className="hover:underline">
          {title}
          </a>
        </h2>
      </header>
    )}
    {children}
  </section>
);

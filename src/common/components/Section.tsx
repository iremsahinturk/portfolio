export const Section = ({
  id,
  className = "",
  children,
  title,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
}) => (
  <section
    id={id}
    className={`my-[7.5rem] ${className}`}
    aria-labelledby={`${id}-title`}
  >
    {title && (
      <header className="py-14 bg-mavi text-white grid justify-center">
        <h2
          id={`${id}-title`}
          className="text-5xl font-normal tracking-tight text-center"
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

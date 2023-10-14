import Link from 'next/link';

export default function Home() {
  const icons = ['logo-github', 'logo-linkedin', 'logo-instagram'];
  return (
    <>
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200">
          <Link href={'/'}>Tom Harris</Link>
        </h1>
        <h2 className="text-slate-200 mt-3 tracking-tight font-medium text-lg">
          Software Developer
        </h2>
        <p className="mt-4 max-w-sm">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
        <ul>
          {icons.map((icon) => (
            <li key={icon}>
              <ion-icon name={icon} />
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}

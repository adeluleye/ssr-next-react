import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>SSR in React with Next.js</h1>
    </div>
  );
};

export default Index;

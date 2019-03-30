import Link from 'next/link';

const About = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <h1>About Page</h1>
    </div>
  );
};

export default About;

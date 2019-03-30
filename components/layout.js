import Head from 'next/head';
import NavBar from './navBar';

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Demo SSR React</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
      </Head>
      <NavBar />
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;

import React from 'react';
import Head from 'next/head';

function Layout({ children, title = 'Saint' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}

export default Layout;

import Header from '../components/Header';
import Layout from '../components/Layout';
import Background from '../components/Background';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Layout title="Saint - Home">
        <Background />
        <h1>Hola</h1>
      </Layout>
    </>
  );
}

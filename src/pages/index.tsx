// import Head from 'next/head';
import { useProducts } from '../state'
import { Menu, ProductList, Banner } from '../components';
import { BiFilter } from '../assets/icons';
import { Gradient, Main } from '../styles';

const Home = () => {
	const { products } = useProducts();

	return <>
		{/* <Head>
			<title>LB Digital - Inicio</title>
			<meta name="description" content="Encuentra los mejores productos de LB Digital aquí" />
			<meta name="og:title" content="LB Digital - Inicio" />
			<meta name="og:description" content="Encuentra los mejores productos de LB Digital aquí" />
		</Head> */}
		<Gradient>
			<Menu />
			<Main>
				<Banner />
				<ProductList category="Todos los productos" icon={<BiFilter />} products={products} />
			</Main>
		</Gradient>
	</>
}

export default Home;
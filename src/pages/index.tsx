// import Head from 'next/head';
import { useProducts } from '../hooks'
import { Menu, ProductList, Banner, FullScreenLoading } from '../components';
import { BiFilter } from '../assets/icons';
import { Gradient, Main } from '../styles';

const Home = () => {
	const { data: products, isLoading } = useProducts({key: "products", path: "/products"});
	
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
				{isLoading
					? <FullScreenLoading />
					: <ProductList category="Todos los productos" icon={<BiFilter />} products={products ?? []} />
				}
			</Main>
		</Gradient>
	</>
}

export default Home;
// import Head from 'next/head';
import { Main } from '../../styles';
import { Menu } from '../index';

interface ILayout {
	children: JSX.Element | JSX.Element[];
	title: string;
	description: string;
	imageFullUrl?: string;
}

export const LayoutApp = ({ children, title, description, imageFullUrl }: ILayout) => (
	<>
		{/* <Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			{imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
		</Head> */}

		<Menu />
		<Main>
			{children}
		</Main>
	</>
);


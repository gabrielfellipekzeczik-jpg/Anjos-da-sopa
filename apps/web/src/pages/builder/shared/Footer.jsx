import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridShape from '@/components/builder/elements/GridShape';
import GridTextBox from '@/components/builder/elements/GridTextBox';

/* ── Logos compactos para a faixa "Na mídia" do rodapé ── */
const MIDIA_LOGOS = [
	{
		id: 'redetv',
		nome: 'Rede TV',
		logo: '/images/tv-logos/redetv.png',
		url: 'https://youtu.be/S-7PctzJn80?si=Tf0poyhOVCjYfqSG',
	},
	{
		id: 'globo',
		nome: 'Globo',
		logo: '/images/tv-logos/globo.png',
		url: 'https://www.youtube.com/shorts/ikUv9mMcAjU',
	},
	{
		id: 'sbt',
		nome: 'SBT',
		logo: '/images/tv-logos/sbt.png',
		url: 'https://www.youtube.com/watch?v=1oiCqmawVdY',
	},
	{
		id: 'tvcultura',
		nome: 'TV Cultura',
		logo: '/images/tv-logos/tvcultura.png',
		url: 'https://www.youtube.com/watch?v=FakjTpGs050',
	},
	{
		id: 'redevida',
		nome: 'Rede Vida',
		logo: '/images/tv-logos/redevida.png',
		url: 'https://www.youtube.com/watch?v=dnPI9m5Hwzw',
	},
	{
		id: 'papoamigo',
		nome: 'Papo de Amigo TV',
		logo: null,
		url: 'https://www.youtube.com/live/L94hoEJTTaY',
	},
	{
		id: 'tvsocial',
		nome: 'TV Social',
		logo: null,
		url: 'https://www.youtube.com/@tvsocial381',
	},
	{
		id: 'redevida2',
		nome: 'Rede Vida',
		logo: '/images/tv-logos/redevida.png',
		url: 'https://www.youtube.com/@vidamelhoroficial',
	},
];

function MidiaLogoItem({ item }) {
	const [hovered, setHovered] = React.useState(false);

	return (
		<a
			href={item.url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Ver reportagem: ${item.nome}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '36px',
				padding: '0 4px',
				opacity: hovered ? 1 : 0.55,
				transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
				transition: 'opacity 0.2s ease, transform 0.2s ease',
				textDecoration: 'none',
				flexShrink: 0,
			}}
		>
			{item.logo ? (
				<img
					src={item.logo}
					alt={item.nome}
					style={{
						maxHeight: '28px',
						maxWidth: '72px',
						objectFit: 'contain',
						filter: 'brightness(0) invert(1)',
					}}
					loading="lazy"
				/>
			) : (
				<span
					style={{
						color: '#fdf8f3',
						fontFamily: 'Hanken Grotesk, sans-serif',
						fontSize: '11px',
						fontWeight: 700,
						letterSpacing: '0.08em',
						textTransform: 'uppercase',
						whiteSpace: 'nowrap',
					}}
				>
					{item.nome}
				</span>
			)}
		</a>
	);
}

export default function Footer() {
	return (
		<>
			{/* ── Faixa "Na mídia" ── */}
			<div
				style={{
					background: '#1e0f06',
					borderTop: '1px solid rgba(253,248,243,0.07)',
					padding: '20px 24px',
				}}
			>
				<div
					style={{
						maxWidth: '1224px',
						margin: '0 auto',
						display: 'flex',
						alignItems: 'center',
						gap: '24px',
						flexWrap: 'wrap',
					}}
				>
					{/* Label */}
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							flexShrink: 0,
						}}
					>
						<div
							style={{
								width: '28px',
								height: '2px',
								background: '#eb9b25',
								borderRadius: '2px',
							}}
						/>
						<span
							style={{
								color: 'rgba(253,248,243,0.5)',
								fontFamily: 'Hanken Grotesk, sans-serif',
								fontSize: '11px',
								fontWeight: 600,
								letterSpacing: '0.18em',
								textTransform: 'uppercase',
								whiteSpace: 'nowrap',
							}}
						>
							Na mídia
						</span>
					</div>

					{/* Divisor vertical */}
					<div
						style={{
							width: '1px',
							height: '24px',
							background: 'rgba(253,248,243,0.12)',
							flexShrink: 0,
						}}
					/>

					{/* Logos */}
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '20px',
							flexWrap: 'wrap',
						}}
					>
						{MIDIA_LOGOS.map((item) => (
							<MidiaLogoItem key={item.id} item={item} />
						))}
					</div>
				</div>
			</div>

			{/* ── Rodapé principal (BlockLayout original) ── */}
			<BlockLayout
				blockId={"footer"}
				htmlId={"footer"}
				blockClassName={"block"}
				className={"block-layout block-layout--layout"}
				style={{
					"--cols": "12",
					"--rows": 3,
					"--width": "1224px",
					"--m-rows": "1",
					"--col-gap": "24px",
					"--row-gap": "16px",
					"--row-size": "48px",
					"--column-gap": "24px",
					"--block-padding-top": "16px",
					"--block-padding": "16px 0 16px 0",
					"--block-padding-right": "0",
					"--block-padding-bottom": "16px",
					"--block-padding-left": "0",
					"--m-block-padding": "40px 16px",
					"--m-grid-template-rows": "8.89vw auto 3.61vw auto 6.67vw auto 2.22vw auto 6.67vw auto 6.67vw auto 4.17vw auto 2.22vw auto 32px",
					"--t-grid-template-rows": "minmax(32px, auto) minmax(3px, auto) minmax(13px, auto) minmax(151px, auto) minmax(24px, auto) minmax(20px, auto) minmax(8px, auto) minmax(112px, auto) minmax(24px, auto) minmax(166px, auto) minmax(24px, auto) minmax(1px, auto) minmax(15px, auto) minmax(79px, auto) minmax(8px, auto) minmax(39px, auto) 1fr",
					"--small-desktop-grid-template-rows": "minmax(3.92vw, auto) minmax(0.25vw, auto) minmax(1.39vw, auto) minmax(1.63vw, auto) minmax(0.98vw, auto) minmax(8.09vw, auto) minmax(1.06vw, auto) minmax(1.80vw, auto) minmax(1.96vw, auto) minmax(0.08vw, auto) minmax(1.23vw, auto) minmax(1.63vw, auto) minmax(3.19vw, auto) 1.96vw",
					"--grid-template-rows": "minmax(48px, auto) minmax(3px, auto) minmax(17px, auto) minmax(20px, auto) minmax(12px, auto) minmax(99px, auto) minmax(13px, auto) minmax(22px, auto) minmax(24px, auto) minmax(1px, auto) minmax(15px, auto) minmax(20px, auto) minmax(39px, auto) 1fr",
					"--m-grid-template-columns": "100.00%",
					"--grid-template-columns": "6.54% 3.92% 25.49% 4.90% 16.67% 1.31% 4.90% 6.54% 21.24% 3.27% 5.23%",
					"--m-block-min-height": "auto",
					"--t-block-min-height": "751px",
					"--small-desktop-block-min-height": "auto",
					"--block-min-height": "357px"
				}}
				background={{
					color: "#2c1a0e",
					current: "color",
					isTransparent: false
				}}
			>
				<LayoutElement
					elementId={"g3O09M"}
					className={"layout-element layout-element--layout transition transition--fade"}
					style={{
						"--z-index": 1,
						"--grid-row": "2/3",
						"--grid-column": "2/3",
						"--m-grid-row": "2/3",
						"--m-grid-column": "1/2"
					}}
					hasRotationFrame={false}
					hasEntranceAnimation={true}
				>
					<GridShape
						id={"g3O09M"}
						svg={"<svg preserveAspectRatio=\"none\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"><path d=\"M0 0H80V80H0V0Z\"></path></svg>"}
						color={"#eb9b25"}
						shape={"rectangle"}
						height={3}
						className={"layout-element__component layout-element__component--GridShape"}
					/>
				</LayoutElement>
				<LayoutElement
					elementId={"pxvqF-"}
					className={"layout-element layout-element--layout transition transition--fade"}
					style={{
						"--z-index": 2,
						"--grid-row": "10/11",
						"--grid-column": "2/10",
						"--m-grid-row": "12/13",
						"--m-grid-column": "1/2"
					}}
					hasRotationFrame={false}
					hasEntranceAnimation={true}
				>
					<GridShape
						id={"pxvqF-"}
						svg={"<svg preserveAspectRatio=\"none\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"><path d=\"M0 0H80V80H0V0Z\"></path></svg>"}
						color={"#fdf8f3"}
						shape={"rectangle"}
						height={1}
						className={"layout-element__component layout-element__component--GridShape"}
					/>
				</LayoutElement>
				<LayoutElement
					elementId={"htMoE9"}
					className={"layout-element layout-element--layout transition transition--fade"}
					style={{
						"--text": "left",
						"--m-text": "center",
						"--z-index": 3,
						"--grid-row": "4/7",
						"--grid-column": "2/4",
						"--m-grid-row": "4/5",
						"--m-grid-column": "1/2"
					}}
					hasRotationFrame={false}
					hasEntranceAnimation={true}
				>
					<GridTextBox
						id={"htMoE9"}
						content={"<h3 dir=\"auto\" style=\"color: rgb(253, 248, 243); margin-bottom: 10px;\">Anjos da Sopa</h3><p dir=\"auto\" class=\"body\" style=\"color: rgb(253, 248, 243); opacity: 0.85;\">Alimentando vidas e devolvendo dignidade na Rua Javri, 449 em Santo André.</p>"}
						textAlign={"left"}
						textAlignMobile={"center"}
						className={"layout-element__component layout-element__component--GridTextBox"}
					/>
				</LayoutElement>
				<LayoutElement
					elementId={"G1yBBl"}
					className={"layout-element layout-element--layout transition transition--fade"}
					style={{
						"--text": "left",
						"--m-text": "center",
						"--z-index": 4,
						"--grid-row": "4/5",
						"--grid-column": "5/8",
						"--m-grid-row": "6/7",
						"--m-grid-column": "1/2"
					}}
					hasRotationFrame={false}
					hasEntranceAnimation={true}
				>
					<GridTextBox
						id={"G1yBBl"}
						content={"<p dir=\"auto\" class=\"body-small\" style=\"color: rgb(235, 155, 37); letter-spacing: 0.16em; text-transform: uppercase;\">Navegação</p>"}
						textAlign={"left"}
						textAlignMobile={"center"}
						className={"layout-element__component layout-element__component--GridTextBox"}
					/>
				</LayoutElement>
				<LayoutElement
					elementId={"Ao4GRy"}
					className={"layout-element layout-element--layout transition transition--fade"}
					style={{
						"--text": "left",
						"--m-text": "center",
						"--z-index": 5,
						"--grid-row": "6/8",
						"--grid-column": "5/8",
						"--m-grid-row": "8/9",
						"--m-grid-column": "1/2"
					}}
					hasRotationFrame={false}
					hasEntranceAnimation={true}
				>
					<GridTextBox
						id={"Ao4GRy"}
						content={"<p dir=\"auto\" class=\"body-small\" style=\"color: rgb(253, 248, 243); opacity: 0.85; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px;\">Início</p><p dir=\"auto\" class=\"body-small\" style=\"color: rgb(253, 248, 243); opacity: 0.85; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px;\">Quem Somos</p><p dir=\"auto\" class=\"body-small\" style=\"color: rgb(253, 248, 243); opacity: 0.85; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px;\">Galeria e Impacto</p><p dir=\"auto\" class=\"body-small\" style=\"color: rgb(253, 248, 243); opacity: 0.85; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px;\">Como Ajudar</p>"}
						textAlign={"left"}
						textAlignMobile={"center"}
						className={"layout-element__component layout-element__component--GridTextBox"}
					/>
				</LayoutElement>
				<LayoutElement
					elementId={"3_MTQa"}
					className={"layout-element layout-element--layout transition transition--fade"}
					style={{
						"--text": "left",
						"--m-text": "center",
						"--z-index": 6,
						"--grid-row": "4/9",
						"--grid-column": "9/11",
						"--m-grid-row": "10/11",
						"--m-grid-column": "1/2"
					}}
					hasRotationFrame={false}
					hasEntranceAnimation={true}
				>
					<GridTextBox
						id={"3_MTQa"}
						content={"<p dir=\"auto\" class=\"body-small\" style=\"color: rgb(235, 155, 37); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 10px; text-align: left;\">Sede Institucional</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(253, 248, 243); opacity: 0.85; text-align: left; margin-bottom: 4px;\">Rua Javri, 449 - Vila Assunção</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(253, 248, 243); opacity: 0.85; text-align: left; margin-bottom: 4px;\">Santo André - SP, CEP 09030-380</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(253, 248, 243); opacity: 0.85; text-align: left; margin-bottom: 4px;\">contato@anjosdasopa.org.br</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(253, 248, 243); opacity: 0.85; text-align: left; margin-bottom: 4px;\">Atendimento e entregas semanais</p>"}
						textAlign={"left"}
						textAlignMobile={"center"}
						className={"layout-element__component layout-element__component--GridTextBox"}
					/>
				</LayoutElement>
				<LayoutElement
					elementId={"66FJ6P"}
					className={"layout-element layout-element--layout transition transition--fade"}
					style={{
						"--text": "left",
						"--m-text": "center",
						"--z-index": 7,
						"--grid-row": "12/14",
						"--grid-column": "2/6",
						"--m-grid-row": "14/15",
						"--m-grid-column": "1/2"
					}}
					hasRotationFrame={false}
					hasEntranceAnimation={true}
				>
					<GridTextBox
						id={"66FJ6P"}
						content={"<p dir=\"auto\" class=\"body-small\" style=\"color: rgb(253, 248, 243); opacity: 0.7; text-align: left;\">© 2026 Anjos da Sopa<span style=\"color: rgb(235, 155, 37); opacity: 0.85; margin: 0 10px;\">-</span>Servindo refeições com dignidade e transparência desde a fundação por Gisele Capelli.</p>"}
						textAlign={"left"}
						textAlignMobile={"center"}
						className={"layout-element__component layout-element__component--GridTextBox"}
					/>
				</LayoutElement>
				<LayoutElement
					elementId={"FWkCvx"}
					className={"layout-element layout-element--layout transition transition--fade"}
					style={{
						"--text": "right",
						"--m-text": "center",
						"--z-index": 8,
						"--grid-row": "12/13",
						"--grid-column": "7/11",
						"--m-grid-row": "16/17",
						"--m-grid-column": "1/2"
					}}
					hasRotationFrame={false}
					hasEntranceAnimation={true}
				>
					<GridTextBox
						id={"FWkCvx"}
						content={"<p dir=\"auto\" class=\"body-small\" style=\"color: rgb(235, 155, 37); letter-spacing: 0.16em; text-transform: uppercase; text-align: right;\">Ação Comunitária em Santo André</p>"}
						textAlign={"right"}
						textAlignMobile={"center"}
						className={"layout-element__component layout-element__component--GridTextBox"}
					/>
				</LayoutElement>
			</BlockLayout>
		</>
	);
}

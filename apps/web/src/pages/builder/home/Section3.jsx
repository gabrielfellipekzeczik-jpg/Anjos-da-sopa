import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridImage from '@/components/builder/elements/GridImage';
import GridButton from '@/components/builder/elements/GridButton';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section3() {
	return (
		<BlockLayout
			blockId={"Hykl-V"}
			htmlId={"historia"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--cols": "12",
				"--rows": 12,
				"--width": "1224px",
				"--m-rows": "1",
				"--col-gap": "24px",
				"--row-gap": "16px",
				"--row-size": "48px",
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "14.44vw auto 3.33vw auto 3.33vw auto 3.33vw auto 3.33vw auto 3.33vw auto 64px",
				"--t-grid-template-rows": "minmax(52px, auto) minmax(48px, auto) minmax(12px, auto) minmax(148px, auto) minmax(12px, auto) minmax(188px, auto) minmax(12px, auto) minmax(188px, auto) minmax(12px, auto) minmax(48px, auto) minmax(12px, auto) minmax(437px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(5.88vw, auto) minmax(1.88vw, auto) minmax(3.92vw, auto) minmax(0.98vw, auto) minmax(11.44vw, auto) minmax(0.98vw, auto) minmax(10.78vw, auto) minmax(0.98vw, auto) minmax(10.78vw, auto) minmax(0.98vw, auto) minmax(4.33vw, auto) minmax(1.96vw, auto) 5.88vw",
				"--grid-template-rows": "minmax(72px, auto) minmax(23px, auto) minmax(48px, auto) minmax(12px, auto) minmax(140px, auto) minmax(12px, auto) minmax(132px, auto) minmax(12px, auto) minmax(132px, auto) minmax(12px, auto) minmax(53px, auto) minmax(24px, auto) 1fr",
				"--m-grid-template-columns": "27.13% 45.73% 27.13%",
				"--grid-template-columns": "6.54% 13.24% 28.27% 1.96% 50.00%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1233px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "744px"
			}}
			background={{
				color: "#fdf8f3",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"NsiZs4"}
				className={"layout-element layout-element--layout"}
				style={{
					"--z-index": 1,
					"--grid-row": "2/13",
					"--grid-column": "5/6",
					"--m-grid-row": "12/13",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridImage
					id={"NsiZs4"}
					src={"/images/gisele.jpg"}
					srcset={"/images/gisele.jpg 375w, /images/gisele.jpg 768w, /images/gisele.jpg 1024w, /images/gisele.jpg 1440w"}
					alt={"Gisele Capelli, fundadora do Anjos da Sopa, na cozinha com a camiseta do projeto"}
					objectFit={"cover"}
					desktopWidth={612}
					desktopHeight={600}
					mobileWidth={328}
					desktopBorderRadius={"8px"}
					mobileBorderRadius={"8px"}
					className={"layout-element__component layout-element__component--GridImage"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"94FmBd"}
				className={"layout-element layout-element--layout hover--lift"}
				style={{
					"--z-index": 2,
					"--grid-row": "11/12",
					"--grid-column": "2/3",
					"--m-grid-row": "10/11",
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridButton
					id={"94FmBd"}
					text={"Conheça Mais"}
					type={"primary"}
					href={"/quem-somos"}
					target={"_self"}
					borderRadius={8}
					borderWidth={0}
					backgroundColor={"#2c1a0e"}
					fontColor={"#ffffff"}
					borderColor={"#2c1a0e"}
					backgroundColorHover={"#56473e"}
					fontColorHover={"#ffffff"}
					borderColorHover={"#56473e"}
					mobileWidthVw={"41.666666666666664vw"}
					mobileHeightVw={"13.333333333333334vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"QmTgWp"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 3,
					"--grid-row": "3/4",
					"--grid-column": "2/4",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"QmTgWp"}
					content={"<span class=\"body-small\" dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Nossa Fundadora</span>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"-grHy1"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 4,
					"--grid-row": "5/6",
					"--grid-column": "2/4",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"-grHy1"}
					content={"<h2 dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Gisele Capelli: Uma Visão de Acolhimento</h2>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"FkqwxD"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 5,
					"--grid-row": "7/8",
					"--grid-column": "2/4",
					"--m-grid-row": "6/7",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"FkqwxD"}
					content={"<p dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Gisele Capelli fundou Anjos da Sopa com a convicção de que a dignidade começa com um prato de comida quente e um ouvido atento. Sua jornada em Santo André transformou a Rua Javri em um ponto de esperança.</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ZbiMVJ"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 6,
					"--grid-row": "9/10",
					"--grid-column": "2/4",
					"--m-grid-row": "8/9",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"ZbiMVJ"}
					content={"<p dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Desde o início, o foco tem sido a construção de uma comunidade unida, onde cada voluntário e doador se sente parte essencial dessa missão de alimentar vidas e restaurar a esperança.</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}

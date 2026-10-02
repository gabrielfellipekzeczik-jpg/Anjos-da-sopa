import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridButton from '@/components/builder/elements/GridButton';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"hHY9SF"}
			htmlId={"hero"}
			blockClassName={"block block--desktop-first-visible block--mobile-first-visible"}
			className={"block-layout block-layout--layout"}
			style={{
				"--cols": "12",
				"--rows": 9,
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
				"--m-grid-template-rows": "25.56vw auto 3.33vw auto 3.33vw auto 3.33vw auto 104px",
				"--t-grid-template-rows": "minmax(92px, auto) minmax(48px, auto) minmax(12px, auto) minmax(164px, auto) minmax(12px, auto) minmax(132px, auto) minmax(12px, auto) minmax(48px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(8.50vw, auto) minmax(3.92vw, auto) minmax(0.98vw, auto) minmax(14.22vw, auto) minmax(0.98vw, auto) minmax(6.21vw, auto) minmax(0.98vw, auto) minmax(4.33vw, auto) 8.50vw",
				"--grid-template-rows": "minmax(104px, auto) minmax(48px, auto) minmax(12px, auto) minmax(174px, auto) minmax(12px, auto) minmax(76px, auto) minmax(12px, auto) minmax(53px, auto) 1fr",
				"--m-grid-template-columns": "19.21% 61.28% 19.51%",
				"--grid-template-columns": "13.81% 26.88% 17.89% 26.96% 14.46%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "624px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "595px"
			}}
			background={{
				path: "kcich2-qFnLfVdkzm9yADuC.png",
				origin: "assets",
				current: "image",
				imagePath: "kcich2-qFnLfVdkzm9yADuC.png",
				isTransparent: true,
				"overlay-opacity": "0.50",
				src: "https://horizons-cdn.hostinger.com/57d892b2-45cf-40f8-9d10-3ffd92ae8b3f/kcich2-qFnLfVdkzm9yADuC.png?width=1440&fit=crop",
				srcset: "https://horizons-cdn.hostinger.com/57d892b2-45cf-40f8-9d10-3ffd92ae8b3f/kcich2-qFnLfVdkzm9yADuC.png?width=375&fit=crop 375w, https://horizons-cdn.hostinger.com/57d892b2-45cf-40f8-9d10-3ffd92ae8b3f/kcich2-qFnLfVdkzm9yADuC.png?width=768&fit=crop 768w, https://horizons-cdn.hostinger.com/57d892b2-45cf-40f8-9d10-3ffd92ae8b3f/kcich2-qFnLfVdkzm9yADuC.png?width=1024&fit=crop 1024w, https://horizons-cdn.hostinger.com/57d892b2-45cf-40f8-9d10-3ffd92ae8b3f/kcich2-qFnLfVdkzm9yADuC.png?width=1440&fit=crop 1440w, https://horizons-cdn.hostinger.com/57d892b2-45cf-40f8-9d10-3ffd92ae8b3f/kcich2-qFnLfVdkzm9yADuC.png?width=1920&fit=crop 1920w, https://horizons-cdn.hostinger.com/57d892b2-45cf-40f8-9d10-3ffd92ae8b3f/kcich2-qFnLfVdkzm9yADuC.png?width=2560&fit=crop 2560w"
			}}
		>
			<LayoutElement
				elementId={"8Dzu2v"}
				className={"layout-element layout-element--layout transition transition--fade hover--lift"}
				style={{
					"--z-index": 1,
					"--grid-row": "8/9",
					"--grid-column": "3/4",
					"--m-grid-row": "8/9",
					"--m-grid-column": "2/3",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridButton
					id={"8Dzu2v"}
					text={"Fazer Doação Agora"}
					type={"primary"}
					href={"/como-ajudar"}
					target={"_self"}
					borderRadius={8}
					borderWidth={0}
					backgroundColor={"#eb9b25"}
					fontColor={"#000000"}
					borderColor={"#eb9b25"}
					backgroundColorHover={"#bc7c1d"}
					fontColorHover={"#000000"}
					borderColorHover={"#bc7c1d"}
					mobileWidthVw={"55.833333333333336vw"}
					mobileHeightVw={"13.333333333333334vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"ydZ8c2"}
				className={"layout-element layout-element--layout transition transition--fade"}
				style={{
					"--text": "center",
					"--m-text": "center",
					"--z-index": 2,
					"--grid-row": "2/3",
					"--grid-column": "2/5",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/4",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"ydZ8c2"}
					content={"<span class=\"body-small\" dir=\"auto\" style=\"color: rgb(244, 206, 150);\">Alimentando Vidas em Santo André</span>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"_GEilN"}
				className={"layout-element layout-element--layout transition transition--rise"}
				style={{
					"--text": "center",
					"--m-text": "center",
					"--z-index": 3,
					"--grid-row": "4/5",
					"--grid-column": "2/5",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/4",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"_GEilN"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(253, 248, 243);\"><span style=\"color: rgb(235, 155, 37);\"><strong>Dignidade</strong></span> em Cada Prato Quente</h1>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"NFzHzU"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "center",
					"--m-text": "center",
					"--z-index": 4,
					"--grid-row": "6/7",
					"--grid-column": "2/5",
					"--m-grid-row": "6/7",
					"--m-grid-column": "1/4",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"NFzHzU"}
					content={"<p dir=\"auto\" style=\"color: rgb(253, 248, 243);\">Na Rua Javri, 449, transformamos doações em refeições nutritivas e acolhimento humano, com total transparência.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}

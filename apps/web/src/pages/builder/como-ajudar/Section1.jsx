import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridButton from '@/components/builder/elements/GridButton';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"2YF0IH"}
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
				"--m-grid-template-rows": "22.22vw auto 3.33vw auto 3.33vw auto 3.33vw auto 92px",
				"--t-grid-template-rows": "minmax(80px, auto) minmax(48px, auto) minmax(12px, auto) minmax(164px, auto) minmax(12px, auto) minmax(104px, auto) minmax(12px, auto) minmax(48px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(8.50vw, auto) minmax(3.92vw, auto) minmax(0.98vw, auto) minmax(14.22vw, auto) minmax(0.98vw, auto) minmax(3.92vw, auto) minmax(0.98vw, auto) minmax(4.33vw, auto) 8.50vw",
				"--grid-template-rows": "minmax(104px, auto) minmax(48px, auto) minmax(12px, auto) minmax(174px, auto) minmax(12px, auto) minmax(48px, auto) minmax(12px, auto) minmax(53px, auto) 1fr",
				"--m-grid-template-columns": "29.57% 40.55% 29.88%",
				"--grid-template-columns": "6.54% 11.68% 74.59% 7.19%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "572px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "567px"
			}}
			background={{
				color: "#fdf8f3",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"MamzkI"}
				className={"layout-element layout-element--layout transition transition--fade hover--lift"}
				style={{
					"--z-index": 1,
					"--grid-row": "8/9",
					"--grid-column": "2/3",
					"--m-grid-row": "8/9",
					"--m-grid-column": "2/3",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridButton
					id={"MamzkI"}
					text={"Doar Agora"}
					type={"primary"}
					href={"#"}
					target={"_self"}
					borderRadius={12}
					borderWidth={0}
					backgroundColor={"#2c1a0e"}
					fontColor={"#ffffff"}
					borderColor={"#2c1a0e"}
					backgroundColorHover={"#56473e"}
					fontColorHover={"#ffffff"}
					borderColorHover={"#56473e"}
					mobileWidthVw={"36.94444444444444vw"}
					mobileHeightVw={"13.333333333333334vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"SNnaSQ"}
				className={"layout-element layout-element--layout transition transition--fade"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 2,
					"--grid-row": "2/3",
					"--grid-column": "2/4",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/4",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"SNnaSQ"}
					content={"<span class=\"body-small\" dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Sua Ajuda Transforma</span>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"qGhhtA"}
				className={"layout-element layout-element--layout transition transition--rise"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 3,
					"--grid-row": "4/5",
					"--grid-column": "2/4",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/4",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"qGhhtA"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Cada Doação, Uma Refeição, <strong>Uma Vida</strong>.</h1>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"9g1Un5"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 4,
					"--grid-row": "6/7",
					"--grid-column": "2/4",
					"--m-grid-row": "6/7",
					"--m-grid-column": "1/4",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"9g1Un5"}
					content={"<p dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Sua contribuição alimenta vidas e devolve a dignidade em Santo André. Transparência total, impacto local.</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}

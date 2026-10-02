import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridButton from '@/components/builder/elements/GridButton';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section5() {
	return (
		<BlockLayout
			blockId={"p6UIQa"}
			htmlId={"doar-cta"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--cols": "12",
				"--rows": 8,
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
				"--m-grid-template-rows": "25.56vw auto 3.33vw auto 3.33vw auto 104px",
				"--t-grid-template-rows": "minmax(92px, auto) minmax(148px, auto) minmax(12px, auto) minmax(132px, auto) minmax(12px, auto) minmax(48px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(8.50vw, auto) minmax(11.44vw, auto) minmax(0.98vw, auto) minmax(6.21vw, auto) minmax(0.98vw, auto) minmax(4.33vw, auto) 8.50vw",
				"--grid-template-rows": "minmax(104px, auto) minmax(140px, auto) minmax(12px, auto) minmax(76px, auto) minmax(12px, auto) minmax(53px, auto) 1fr",
				"--m-grid-template-columns": "27.13% 45.73% 27.13%",
				"--grid-template-columns": "21.08% 21.98% 13.24% 21.98% 21.73%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "548px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "501px"
			}}
			background={{
				color: "#d95d1e",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"1sKi50"}
				className={"layout-element layout-element--layout hover--lift"}
				style={{
					"--z-index": 1,
					"--grid-row": "6/7",
					"--grid-column": "3/4",
					"--m-grid-row": "6/7",
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridButton
					id={"1sKi50"}
					text={"Doar via Pix"}
					type={"primary"}
					href={"/como-ajudar"}
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
				elementId={"M71BKB"}
				className={"layout-element layout-element--layout transition transition--slide-left"}
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
					id={"M71BKB"}
					content={"<h2 dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Sua Ajuda Transforma Vidas Hoje</h2>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"vfMtXM"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "center",
					"--m-text": "center",
					"--z-index": 3,
					"--grid-row": "4/5",
					"--grid-column": "2/5",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"vfMtXM"}
					content={"<p dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Com uma doação via Pix, você garante mais um prato quente e a esperança de um futuro digno para nossa comunidade.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}

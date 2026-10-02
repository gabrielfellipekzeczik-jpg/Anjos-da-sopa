import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section3() {
	return (
		<BlockLayout
			blockId={"oFJKwG"}
			htmlId={"manifesto"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--cols": "12",
				"--rows": 7,
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
				"--t-grid-template-rows": "minmax(92px, auto) minmax(48px, auto) minmax(12px, auto) minmax(148px, auto) minmax(12px, auto) minmax(118px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(8.50vw, auto) minmax(3.92vw, auto) minmax(0.98vw, auto) minmax(11.44vw, auto) minmax(0.98vw, auto) minmax(4.82vw, auto) 8.50vw",
				"--grid-template-rows": "minmax(104px, auto) minmax(48px, auto) minmax(12px, auto) minmax(140px, auto) minmax(12px, auto) minmax(59px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "21.08% 57.19% 21.73%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "534px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "479px"
			}}
			background={{
				color: "#d95d1e",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"vOYS2o"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "center",
					"--m-text": "center",
					"--z-index": 1,
					"--grid-row": "2/3",
					"--grid-column": "2/3",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"vOYS2o"}
					content={"<span class=\"body-small\" dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Compromisso Público</span>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"YXBbnE"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "center",
					"--m-text": "center",
					"--z-index": 2,
					"--grid-row": "4/5",
					"--grid-column": "2/3",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"YXBbnE"}
					content={"<h2 dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Transparência total e respeito humano</h2>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"8pZHaZ"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "center",
					"--m-text": "center",
					"--z-index": 3,
					"--grid-row": "6/7",
					"--grid-column": "2/3",
					"--m-grid-row": "6/7",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"8pZHaZ"}
					content={"<p class=\"body-small\" dir=\"auto\" style=\"color: rgb(44, 26, 14);\">O impacto local é construído com responsabilidade diária. Cada refeição entregue na Vila Assunção reflete a seriedade do nosso trabalho comunitário e a confiança de doadores e parceiros.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}

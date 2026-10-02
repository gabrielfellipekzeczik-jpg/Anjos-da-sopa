import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section4() {
	return (
		<BlockLayout
			blockId={"yJkiVy"}
			htmlId={"contato"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--cols": "12",
				"--rows": 11,
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
				"--m-grid-template-rows": "14.44vw auto 3.33vw auto 3.33vw auto 3.33vw auto 64px",
				"--t-grid-template-rows": "minmax(52px, auto) minmax(48px, auto) minmax(12px, auto) minmax(148px, auto) minmax(12px, auto) minmax(188px, auto) minmax(12px, auto) minmax(592px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(5.88vw, auto) minmax(4.90vw, auto) minmax(3.92vw, auto) minmax(0.98vw, auto) minmax(16.34vw, auto) minmax(0.98vw, auto) minmax(13.07vw, auto) minmax(4.90vw, auto) 5.88vw",
				"--grid-template-rows": "minmax(72px, auto) minmax(60px, auto) minmax(48px, auto) minmax(12px, auto) minmax(200px, auto) minmax(12px, auto) minmax(160px, auto) minmax(60px, auto) 1fr",
				"--m-grid-template-columns": "100.00%",
				"--grid-template-columns": "6.54% 35.38% 0.98% 49.92% 7.19%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1128px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "696px"
			}}
			background={{
				color: "#fdf8f3",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"NRJ9zI"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 2,
					"--grid-row": "3/4",
					"--grid-column": "2/3",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"NRJ9zI"}
					content={"<span class=\"body-small\" dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Mão na Massa</span>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"BUj0qh"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 3,
					"--grid-row": "5/6",
					"--grid-column": "2/3",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"BUj0qh"}
					content={"<h2 dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Junte-se à Nossa Equipe de Voluntários</h2>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"S65jB-"}
				className={"layout-element layout-element--layout"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 4,
					"--grid-row": "7/8",
					"--grid-column": "2/3",
					"--m-grid-row": "6/7",
					"--m-grid-column": "1/2"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={false}
			>
				<GridTextBox
					id={"S65jB-"}
					content={"<p dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Seja parte da nossa missão em Santo André. Preencha o formulário para agendar a entrega de doações presenciais ou inscrever-se para o voluntariado na cozinha comunitária da Vila Assunção.</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}

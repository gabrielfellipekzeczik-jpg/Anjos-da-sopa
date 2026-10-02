import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridImage from '@/components/builder/elements/GridImage';
import GridButton from '@/components/builder/elements/GridButton';
import GridTextBox from '@/components/builder/elements/GridTextBox';

export default function Section1() {
	return (
		<BlockLayout
			blockId={"eym5JQ"}
			htmlId={"hero"}
			blockClassName={"block block--desktop-first-visible block--mobile-first-visible"}
			className={"block-layout block-layout--layout"}
			style={{
				"--cols": "12",
				"--rows": 13,
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
				"--m-grid-template-rows": "22.22vw auto 3.33vw auto 3.33vw auto 3.33vw auto 3.33vw auto 92px",
				"--t-grid-template-rows": "minmax(80px, auto) minmax(48px, auto) minmax(12px, auto) minmax(164px, auto) minmax(12px, auto) minmax(160px, auto) minmax(12px, auto) minmax(48px, auto) minmax(12px, auto) minmax(437px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(8.50vw, auto) minmax(4.41vw, auto) minmax(3.92vw, auto) minmax(0.98vw, auto) minmax(20.51vw, auto) minmax(0.98vw, auto) minmax(8.50vw, auto) minmax(0.98vw, auto) minmax(4.33vw, auto) minmax(4.41vw, auto) 8.50vw",
				"--grid-template-rows": "minmax(104px, auto) minmax(54px, auto) minmax(48px, auto) minmax(12px, auto) minmax(251px, auto) minmax(12px, auto) minmax(104px, auto) minmax(12px, auto) minmax(53px, auto) minmax(54px, auto) 1fr",
				"--m-grid-template-columns": "23.17% 53.66% 23.17%",
				"--grid-template-columns": "6.54% 15.52% 25.98% 1.96% 50.00%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "1077px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "808px"
			}}
			background={{
				color: "#fdf8f3",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"vfUENm"}
				className={"layout-element layout-element--layout transition transition--blur transition--root-hidden"}
				style={{
					"--z-index": 1,
					"--grid-row": "2/11",
					"--grid-column": "5/6",
					"--m-grid-row": "10/11",
					"--m-grid-column": "1/4",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridImage
					id={"vfUENm"}
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
				elementId={"huZtrn"}
				className={"layout-element layout-element--layout transition transition--fade hover--lift"}
				style={{
					"--z-index": 2,
					"--grid-row": "9/10",
					"--grid-column": "2/3",
					"--m-grid-row": "8/9",
					"--m-grid-column": "2/3",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridButton
					id={"huZtrn"}
					text={"Conhecer a Sede"}
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
					mobileWidthVw={"48.888888888888886vw"}
					mobileHeightVw={"13.333333333333334vw"}
					className={"layout-element__component layout-element__component--GridButton"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"Ss7sju"}
				className={"layout-element layout-element--layout transition transition--fade"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 3,
					"--grid-row": "3/4",
					"--grid-column": "2/4",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/4",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"Ss7sju"}
					content={"<span class=\"body-small\" dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Fundação e Liderança</span>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"G2gEG_"}
				className={"layout-element layout-element--layout transition transition--rise"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 4,
					"--grid-row": "5/6",
					"--grid-column": "2/4",
					"--m-grid-row": "4/5",
					"--m-grid-column": "1/4",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"G2gEG_"}
					content={"<h1 dir=\"auto\" style=\"color: rgb(44, 26, 14);\"><strong>Gestão transparente</strong> na Vila Assunção</h1>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"4gYeOu"}
				className={"layout-element layout-element--layout transition transition--slide"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 5,
					"--grid-row": "7/8",
					"--grid-column": "2/4",
					"--m-grid-row": "6/7",
					"--m-grid-column": "1/4",
					"--user-animation-delay": "0.1s"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"4gYeOu"}
					content={"<p dir=\"auto\" style=\"color: rgb(44, 26, 14);\">Sob a liderança de Gisele Capelli, a Anjos da Sopa organiza o preparo e a distribuição semanal de refeições nutritivas diretamente da nossa sede na Rua Javri.</p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}

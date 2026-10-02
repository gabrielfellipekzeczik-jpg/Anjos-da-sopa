import React from 'react';
import BlockNavigation from '@/components/builder/blocks/BlockNavigation';

export default function Header() {
	return (
		<BlockNavigation
			logoSrc={"https://horizons-cdn.hostinger.com/57d892b2-45cf-40f8-9d10-3ffd92ae8b3f/chatgpt-image-17-de-set.-de-2026-10_53_24-Ji8dR8DRigNv2Kus.png?width=768&fit=scale-down"}
			logoText={"Home"}
			logoHref={"/"}
			logoHeightDesktop={134}
			logoHeightMobile={69}
			isLogoVisible
			layout={"desktop-1"}
			mobileLayout={"mobile-1"}
			mobileLinksAlignment={"right"}
			isSticky
			cartIconSize={"24px"}
			style={{
				"--width": "1240px",
				"--padding-top": "30px",
				"--padding": "30px 16px 30px 16px",
				"--padding-right": "16px",
				"--padding-bottom": "30px",
				"--padding-left": "16px",
				"--m-padding-top": "24px",
				"--m-padding": "24px 16px 24px 16px",
				"--m-padding-right": "16px",
				"--m-padding-bottom": "24px",
				"--m-padding-left": "16px",
				"--logo-width": "166px",
				"--cartIconSize": "24px",
				"--link-spacing": "40px",
				"--m-logo-width": "86px",
				"--m-link-spacing": "64px",
				"--element-spacing": "64px",
				"--contrastBackgroundColor": "rgb(198, 207, 219)",
				"--nav-bg": "#fdf8f3",
				"--nav-link-color": "rgb(0, 0, 0)",
				"--nav-link-text-color": "rgb(0, 0, 0)",
				"--nav-link-color-hover": "rgb(0, 0, 0)",
				"--nav-link-text-color-hover": "rgb(0, 0, 0)"
			}}
			nav={[
				{
					id: "home",
					href: "/",
					text: "Início",
					isHidden: false,
					hasDropdown: false
				},
				{
					id: "about",
					href: "/quem-somos",
					text: "Quem Somos",
					isHidden: false,
					hasDropdown: false
				},
				{
					id: "impact",
					href: "/galeria-e-impacto",
					text: "Galeria e Impacto",
					isHidden: false,
					hasDropdown: false
				},
				{
					id: "donate",
					href: "/como-ajudar",
					text: "Como Ajudar",
					isHidden: false,
					hasDropdown: false
				}
			]}
		/>
	);
}

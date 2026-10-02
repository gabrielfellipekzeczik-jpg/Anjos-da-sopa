import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import ScrollToTop from '@/components/ScrollToTop';
import CustomSiteCode from '@/components/builder/CustomSiteCode';
import CookieConsent from '@/components/builder/CookieConsent';
import WhatsAppBubble from '@/components/builder/WhatsAppBubble';
import HomePage_system_home from "@/pages/builder/home/HomePage";
import QuemSomosPage_system_about from "@/pages/builder/quem-somos/QuemSomosPage";
import ComoAjudarPage_system_donate from "@/pages/builder/como-ajudar/ComoAjudarPage";
import GaleriaEImpactoPage_system_impact from "@/pages/builder/galeria-e-impacto/GaleriaEImpactoPage";
import '@/components/builder/styles/global.css';

function App() {
	return (
		<TooltipProvider>
			<Router>
				<ScrollToTop />
				<CustomSiteCode />
				<CookieConsent />
				<WhatsAppBubble />
				<Routes>
				<Route path={"/"} element={<HomePage_system_home />} />
				<Route path={"/quem-somos"} element={<QuemSomosPage_system_about />} />
				<Route path={"/como-ajudar"} element={<ComoAjudarPage_system_donate />} />
				<Route path={"/galeria-e-impacto"} element={<GaleriaEImpactoPage_system_impact />} />
				</Routes>
			</Router>
			<Toaster />
		</TooltipProvider>
	);
}

export default App;

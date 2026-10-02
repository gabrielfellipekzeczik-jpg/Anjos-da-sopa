import React, { useState, useEffect, useCallback } from 'react';

const EMISSORAS = [
	{
		id: 'redetv',
		nome: 'Rede TV',
		logo: '/images/tv-logos/redetv.png',
		url: 'https://youtu.be/S-7PctzJn80?si=Tf0poyhOVCjYfqSG',
		embedId: 'S-7PctzJn80',
		tipo: 'youtube',
	},
	{
		id: 'papoamigo',
		nome: 'Papo de Amigo TV',
		logo: null,
		url: 'https://www.youtube.com/live/L94hoEJTTaY',
		embedId: 'L94hoEJTTaY',
		tipo: 'youtube',
	},
	{
		id: 'globo',
		nome: 'Globo',
		logo: '/images/tv-logos/globo.png',
		url: 'https://www.youtube.com/shorts/ikUv9mMcAjU',
		embedId: 'ikUv9mMcAjU',
		tipo: 'youtube',
	},
	{
		id: 'sbt',
		nome: 'SBT',
		logo: '/images/tv-logos/sbt.png',
		url: 'https://www.youtube.com/watch?v=1oiCqmawVdY',
		embedId: '1oiCqmawVdY',
		tipo: 'youtube',
	},
	{
		id: 'redevida',
		nome: 'Rede Vida',
		logo: '/images/tv-logos/redevida.png',
		url: 'https://www.youtube.com/watch?v=dnPI9m5Hwzw',
		embedId: 'dnPI9m5Hwzw',
		tipo: 'youtube',
	},
	{
		id: 'tvsocial',
		nome: 'TV Social',
		logo: null,
		url: 'https://www.youtube.com/@tvsocial381',
		embedId: null,
		tipo: 'youtube',
	},
	{
		id: 'tvcultura',
		nome: 'TV Cultura',
		logo: '/images/tv-logos/tvcultura.png',
		url: 'https://www.youtube.com/watch?v=FakjTpGs050',
		embedId: 'FakjTpGs050',
		tipo: 'youtube',
	},
	{
		id: 'redevida2',
		nome: 'Rede Vida',
		logo: '/images/tv-logos/redevida.png',
		url: 'https://www.youtube.com/@vidamelhoroficial',
		embedId: null,
		tipo: 'youtube',
	},
];

function VideoModal({ emissora, onClose }) {
	const handleBackdropClick = useCallback(
		(e) => {
			if (e.target === e.currentTarget) onClose();
		},
		[onClose]
	);

	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleKey);
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', handleKey);
			document.body.style.overflow = '';
		};
	}, [onClose]);

	if (!emissora) return null;

	// Canal sem vídeo direto — abre no YouTube
	if (emissora.tipo === 'channel' || !emissora.embedId) {
		window.open(emissora.url, '_blank', 'noopener,noreferrer');
		onClose();
		return null;
	}

	const isShort = emissora.url.includes('/shorts/');
	const embedUrl = isShort
		? `https://www.youtube.com/embed/${emissora.embedId}?autoplay=1&rel=0`
		: `https://www.youtube.com/embed/${emissora.embedId}?autoplay=1&rel=0`;

	return (
		<div
			onClick={handleBackdropClick}
			role="dialog"
			aria-modal="true"
			aria-label={`Reportagem: ${emissora.nome}`}
			style={{
				position: 'fixed',
				inset: 0,
				zIndex: 9999,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'rgba(0, 0, 0, 0.88)',
				padding: '16px',
			}}
		>
			<div
				style={{
					position: 'relative',
					width: '100%',
					maxWidth: isShort ? '380px' : '860px',
					background: '#1a1a1a',
					borderRadius: '16px',
					overflow: 'hidden',
					boxShadow: '0 32px 64px rgba(0,0,0,0.6)',
				}}
			>
				{/* Header do modal */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: '16px 20px',
						background: '#2c1a0e',
						borderBottom: '2px solid #eb9b25',
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#eb9b25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<polygon points="23 7 16 12 23 17 23 7"></polygon>
							<rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
						</svg>
						<span style={{ color: '#fdf8f3', fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '15px', fontWeight: 600 }}>
							{emissora.nome}
						</span>
					</div>
					<button
						onClick={onClose}
						aria-label="Fechar vídeo"
						style={{
							background: 'rgba(253,248,243,0.12)',
							border: 'none',
							borderRadius: '50%',
							width: '36px',
							height: '36px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							transition: 'background 0.2s',
							color: '#fdf8f3',
						}}
						onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(235,155,37,0.3)')}
						onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(253,248,243,0.12)')}
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</button>
				</div>

				{/* Player */}
				<div
					style={{
						position: 'relative',
						paddingBottom: isShort ? '177.77%' : '56.25%',
						height: 0,
						overflow: 'hidden',
					}}
				>
					<iframe
						src={embedUrl}
						title={`Reportagem ${emissora.nome}`}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							border: 'none',
						}}
					/>
				</div>
			</div>
		</div>
	);
}

function GenericLogo({ nome, hovered }) {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '5px',
			}}
		>
			{/* Ícone de TV */}
			<svg
				width="28"
				height="22"
				viewBox="0 0 28 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="1"
					y="1"
					width="26"
					height="17"
					rx="3"
					stroke={hovered ? '#eb9b25' : 'rgba(253,248,243,0.6)'}
					strokeWidth="1.8"
					fill="none"
				/>
				<rect
					x="5"
					y="5"
					width="18"
					height="9"
					rx="1"
					fill={hovered ? 'rgba(235,155,37,0.15)' : 'rgba(253,248,243,0.08)'}
				/>
				<line
					x1="10" y1="20"
					x2="18" y2="20"
					stroke={hovered ? '#eb9b25' : 'rgba(253,248,243,0.4)'}
					strokeWidth="1.8"
					strokeLinecap="round"
				/>
				<line
					x1="14" y1="18"
					x2="14" y2="20"
					stroke={hovered ? '#eb9b25' : 'rgba(253,248,243,0.4)'}
					strokeWidth="1.8"
					strokeLinecap="round"
				/>
			</svg>
			{/* Nome curto */}
			<span
				style={{
					color: hovered ? '#2c1a0e' : 'rgba(253,248,243,0.55)',
					fontFamily: 'Hanken Grotesk, sans-serif',
					fontSize: '9px',
					fontWeight: 700,
					letterSpacing: '0.1em',
					textTransform: 'uppercase',
					textAlign: 'center',
					lineHeight: 1.2,
					maxWidth: '80px',
					transition: 'color 0.25s ease',
				}}
			>
				{nome}
			</span>
		</div>
	);
}

function EmissoraCard({ emissora, onClick }) {
	const [hovered, setHovered] = useState(false);

	return (
		<button
			onClick={() => onClick(emissora)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			aria-label={`Ver reportagem: ${emissora.nome}`}
			style={{
				background: hovered ? '#fdf8f3' : 'rgba(253,248,243,0.06)',
				border: `2px solid ${hovered ? '#eb9b25' : 'rgba(253,248,243,0.12)'}`,
				borderRadius: '14px',
				padding: '20px 16px 16px',
				cursor: 'pointer',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '12px',
				transition: 'all 0.25s ease',
				transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
				boxShadow: hovered
					? '0 12px 32px rgba(235,155,37,0.2)'
					: '0 2px 8px rgba(0,0,0,0.2)',
				minWidth: '130px',
				minHeight: '120px',
				flex: '1 1 130px',
				maxWidth: '170px',
			}}
		>
			{/* Logo ou SVG */}
			<div
				style={{
					width: '90px',
					height: '52px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexShrink: 0,
					filter: hovered ? 'none' : 'brightness(0.85) saturate(0.7)',
					transition: 'filter 0.25s ease',
				}}
			>
				{emissora.logo ? (
					<img
						src={emissora.logo}
						alt={emissora.nome}
						style={{
							maxWidth: '100%',
							maxHeight: '100%',
							objectFit: 'contain',
						}}
						loading="lazy"
					/>
				) : emissora.logoSvg ? (
					<div style={{ width: '100%', height: '100%' }}>{emissora.logoSvg}</div>
				) : (
					<GenericLogo nome={emissora.nome} hovered={hovered} />
				)}
			</div>

			{/* Nome + ícone play */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
				<span
					style={{
						color: hovered ? '#2c1a0e' : 'rgba(253,248,243,0.75)',
						fontFamily: 'Hanken Grotesk, sans-serif',
						fontSize: '12px',
						fontWeight: 600,
						letterSpacing: '0.04em',
						textTransform: 'uppercase',
						transition: 'color 0.25s ease',
					}}
				>
					{emissora.nome}
				</span>
				<svg
					width="12"
					height="12"
					viewBox="0 0 24 24"
					fill={hovered ? '#eb9b25' : 'rgba(253,248,243,0.4)'}
					style={{ transition: 'fill 0.25s ease', flexShrink: 0 }}
				>
					<polygon points="5 3 19 12 5 21 5 3" />
				</svg>
			</div>
		</button>
	);
}

export default function NaMidia() {
	const [modalEmissora, setModalEmissora] = useState(null);

	const handleOpen = useCallback((emissora) => {
		setModalEmissora(emissora);
	}, []);

	const handleClose = useCallback(() => {
		setModalEmissora(null);
	}, []);

	return (
		<>
			<section
				aria-labelledby="namidia-titulo"
				style={{
					background: '#1e0f06',
					borderTop: '1px solid rgba(253,248,243,0.08)',
					padding: '56px 24px 64px',
				}}
			>
				<div
					style={{
						maxWidth: '1224px',
						margin: '0 auto',
					}}
				>
					{/* Cabeçalho da seção */}
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '12px',
							marginBottom: '40px',
						}}
					>
						<div
							style={{
								width: '40px',
								height: '3px',
								background: '#eb9b25',
								borderRadius: '2px',
								flexShrink: 0,
							}}
						/>
						<h2
							id="namidia-titulo"
							style={{
								color: '#fdf8f3',
								fontFamily: 'Young Serif, serif',
								fontSize: '28px',
								fontWeight: 400,
								lineHeight: 1.2,
								margin: 0,
							}}
						>
							Na mídia
						</h2>
						<p
							style={{
								color: 'rgba(253,248,243,0.5)',
								fontFamily: 'Hanken Grotesk, sans-serif',
								fontSize: '14px',
								margin: 0,
								marginLeft: '4px',
							}}
						>
							— O projeto Anjos da Sopa na TV
						</p>
					</div>

					{/* Grid de logos */}
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '16px',
							alignItems: 'stretch',
							justifyContent: 'flex-start',
						}}
					>
						{EMISSORAS.map((emissora) => (
							<EmissoraCard
								key={emissora.id}
								emissora={emissora}
								onClick={handleOpen}
							/>
						))}
					</div>

					{/* Rodapé da seção */}
					<p
						style={{
							color: 'rgba(253,248,243,0.35)',
							fontFamily: 'Hanken Grotesk, sans-serif',
							fontSize: '12px',
							marginTop: '32px',
							letterSpacing: '0.04em',
						}}
					>
						Clique em uma emissora para assistir à reportagem
					</p>
				</div>
			</section>

			{/* Modal de vídeo */}
			{modalEmissora && (
				<VideoModal emissora={modalEmissora} onClose={handleClose} />
			)}
		</>
	);
}

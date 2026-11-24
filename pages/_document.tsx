import {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script';
import React from "react";

const SITE_URL = "https://husseinbouik-github-io.vercel.app";
const DESCRIPTION = "Hussein Bouik — Software Engineer building enterprise .NET microservices and immersive 3D web experiences (React Three Fiber), integrating AI services into production workflows. Currently at NTT DATA on the UN Volunteers platform. Tangier, Morocco.";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/*
				Author: Hussein Bouik
				GitHub: https://github.com/husseinbouik/husseinbouik.github.io/
				License: MIT License
				*/}
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				{/* eslint-disable-next-line @next/next/no-title-in-document-head */}
				<title>Hussein Bouik — Software Engineer</title>
				<meta name="description" content={DESCRIPTION}/>
				<meta name="author" content="Hussein Bouik"/>
				<meta name="robots" content="index, follow"/>
				<link rel="canonical" href={SITE_URL}/>

				<meta name="theme-color" content="#0b0e13"/>
				<meta name="mobile-web-app-capable" content="yes"/>
				<meta name="apple-mobile-web-app-capable" content="yes"/>
				<meta name="apple-mobile-web-app-title" content="Hussein Bouik"/>
				<meta name="format-detection" content="telephone=no"/>

				<link rel="icon" href="/favicon/favicon-org.ico" type="image/x-icon"/>
				<link rel="shortcut icon" href="/favicon/favicon-org.ico" type="image/x-icon"/>
				<link rel="apple-touch-icon" href="/img/logo_rounded.png"/>
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#6ea8ff"/>
				<link rel="manifest" href="/manifest.json"/>

				<meta property="og:title" content="Hussein Bouik — Software Engineer" key="title"/>
				<meta property="og:description" content={DESCRIPTION}/>
				<meta property="og:image" content={`${SITE_URL}/og-image.jpg`}/>
				<meta property="og:image:width" content="1200"/>
				<meta property="og:image:height" content="630"/>
				<meta property="og:image:alt" content="Hussein Bouik — Software Engineer"/>
				<meta property="og:url" content={SITE_URL}/>
				<meta property="og:type" content="website"/>
				<meta property="og:site_name" content="Hussein Bouik"/>
				<meta property="og:locale" content="en_US"/>

				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:title" content="Hussein Bouik — Software Engineer"/>
				<meta name="twitter:description" content={DESCRIPTION}/>
				<meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`}/>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Hussein Bouik",
          "jobTitle": "Software Engineer",
          "url": "${SITE_URL}",
          "image": "${SITE_URL}/og-image.jpg",
          "address": { "@type": "PostalAddress", "addressLocality": "Tangier", "addressCountry": "MA" },
          "sameAs": [
            "https://github.com/husseinbouik",
            "https://www.linkedin.com/in/hussein-bouik/"
          ]
        }`
					}}
				/>

				{/* Theme: apply stored/system theme before first paint. Two themes only (dark/light). */}
				<Script id="theme.util.jsx" strategy="beforeInteractive">
					{`
				let themeLocalStorage = localStorage.getItem('theme')
				if (themeLocalStorage === 'unicorn') themeLocalStorage = 'dark'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? 'dark'
				`}
				</Script>
			</Head>

			<body>
			<Main/>
			<NextScript/>
			</body>
		</Html>
	)
}

import Head from 'next/head';
import React from 'react';

const SITE_URL = 'https://husseinbouik-github-io.vercel.app';
const TITLE = 'Hussein Bouik — Software Engineer';
const DESCRIPTION =
	'Hussein Bouik — Software Engineer specializing in Enterprise .NET Microservices, Immersive 3D Web (React Three Fiber), and AI-Powered Systems. Currently at NTT DATA building the UN Volunteers platform.';

export default function TitleIndex() {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            <title>{TITLE}</title>

            <meta name="application-name" content="Hussein Bouik" />
            <meta name="description" content={DESCRIPTION} />
            <meta name="title" content={TITLE}/>

            <meta property="og:title" content={TITLE} />
            <meta property="og:description" content={DESCRIPTION} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={SITE_URL} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={TITLE} />
            <meta name="twitter:description" content={DESCRIPTION} />

        </Head>
    );
}


import {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script';
import React from "react";


export default function Document() {
	return (
		<Html lang="en">

            <Head>
                {/*
				Author: Hussein Bouik
                 GitHub: Visit the GitHub repository at https://github.com/husseinbouik/husseinbouik.github.io/ for more details.
                 license: MIT License
                  */}
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <title>Hussein Bouik</title>
                <meta name="description"
                      content="Hussein Bouik - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AL/ML, and Design. Join my journey."/>

                {/*These are need for PWA*/}
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
                <meta name="apple-mobile-web-app-title" content="Hussein Bouik"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
                <meta name="msapplication-tap-highlight" content="no"/>

                <meta name="theme-color" content="#000000"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="revisit-after" content="1 days"/>
                <link rel="canonical" href="https://husseinbouik.tech"/>
                <meta name="license" content="MIT License"/>
                <meta httpEquiv="content-language" content="en-us"/>

                <link rel="preconnect" href="https://husseinbouik.tech"/>

                <link rel="dns-prefetch" href="https://husseinbouik.tech"/>

                <meta name="author" content="Hussein Bouik"/>

                <link rel="alternate" hrefLang="en" href="https://husseinbouik.tech"/>

                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta name="bingbot" content="index, follow"/>

                <link rel="apple-touch-icon" href="/img/logo_rounded.png"/>

                <link rel="apple-touch-icon" sizes="180x180" href="/img/logo_rounded.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg"/>
                <link rel="icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>
                <link rel="shortcut icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>

                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <link rel="manifest" href="/manifest.json"/>


                <meta property="og:title" content="Hussein Bouik" key="title"/>
                <meta property="og:description"
                      content="Hussein Bouik - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey."/>
                <meta property="og:image" content="https://raw.githubusercontent.com/husseinbouik/images/main/elbacha-hussein.jpg"/>
                <meta property="og:image:secure_url" content="https://raw.githubusercontent.com/husseinbouik/images/main/elbacha-hussein.jpg"/>
                <meta property="og:image:type" content="image/jpeg"/>
                <meta property="og:image:alt" content="Hussein Bouik"/>
                <meta property="og:image:width" content="300"/>
                <meta property="og:image:height" content="300"/>
                <meta property="og:url" content="https://www.husseinbouik.tech"/>
                <meta property="og:type" content="website"/>
                <meta property="og:profile" content="https://github.com/husseinouik"/>
                <meta property="og:site_name" content="Hussein Bouik"/>
                <meta property="og:locale" content="en_US"/>


                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="https://twitter.com/"/>
                <meta name="twitter:title" content="Hussein Bouik"/>
                <meta name="twitter:description"
                      content="Hussein Bouik - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey."/>
                <meta name="twitter:image" content="https://raw.githubusercontent.com/husseinbouik/images/main/elbacha-hussein.jpg"/>
                <meta name="twitter:creator" content="https://twitter.com/husseinbouik_"/>
                <meta name="twitter:domain" content="https://husseinbouik.tech"/>


                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='2048x2732'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1668x2224'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1536x2048'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1125x2436'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1242x2208'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='750x1334'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='640x1136'/>

                {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
                <meta name="keywords" content="
    Hussein Bouik, Full Stack Engineer, Full Stack Developer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, Hussein Bouik Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, Hussein Bouik Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, Hussein Bouik Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    Hussein Bouik DevOps, IT Portfolio, Web Developer Portfolio, Hussein Bouik Developer,
    Full Stack Engineer Hussein Bouik, Hussein Bouik Coding, Hussein Bouik IT,
    Hussein Bouik Full Stack Developer, Hussein Bouik Software Engineer, Hussein Bouik DevOps Engineer,
    Hussein Bouik Programming, Hussein Bouik Software Development, Hussein Bouik Coding Projects,
    Hussein Bouik Tech Portfolio, Hussein Bouik IT Portfolio, Hussein Bouik Software Engineer Portfolio,
    Hussein Bouik Web Developer Portfolio, Hussein Bouik DevOps Portfolio, Hussein Bouik Full Stack Engineer,
    Hussein Bouik Full Stack Developer Portfolio, Hussein Bouik Coding Portfolio, Hussein Bouik Programming Portfolio,
    Hussein Bouik Software Development Portfolio, Hussein Bouik Technology Projects,
    Hussein Bouik Computer Science, Hussein Bouik Cloud Computing, Hussein Bouik IT Professional,
    Hussein Bouik Technology Enthusiast, Hussein Bouik Computer Programmer, Hussein Bouik Code Portfolio,
    Hussein Bouik Technology Student, Hussein Bouik Software Architect,bouik,bouik portfolio,bouik devops,bouik devops engineer,
    bouik devops portfolio,bouik devops projects,bouik devops specialist,bouik devops professional,bouik devops engineer portfolio,
    bouik devops engineer projects,bouik devops engineer specialist,bouik devops engineer professional,bouik devops engineer coding,
    bouik devops engineer coding projects,bouik devops engineer coding portfolio,bouik devops engineer coding specialist,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,

"/>
                {/*use your own ads sense code here*/}
		    <meta name="google-adsense-account" content="ca-pub-2040560600290490"/>
		     <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2040560600290490`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
         
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Hussein Bouik",
          "url": "https://husseinbouik.tech",
          "sameAs": [
            "https://github.com/husseinbouik",
            "https://www.linkedin.com/in/hussein-bouik-",
            "https://medium.com/@husseinbouik",
            "https://twitter.com/husseinbouik_",
            "https://dev.to/husseinbouik"
          ]
        }`
                    }}
                />


                {/*Edit this to your according FAQ */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What additional training have you undertaken to enhance your skillset?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": " I completed a comprehensive training program at Solicode Training Center in Tangier, Morocco, earning both a Solicode Certificate and an OFPPT Certificate, as well as a certificate from Simplon. This program significantly expanded my skills in data analysis, data visualization, and the fundamentals of machine learning. The practical applications we covered solidified my understanding of data-driven insights and analysis, equipping me with valuable tools for data-informed decision-making."
                }
              },
              {
                "@type": "Question",
                "name": "How do you stay current with the latest advancements in technology?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I am currently looking for jobs and I have also done several open-source projects as well."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Hussein Bouik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hussein Bouik is a Full Stack Developer specializing in Cloud, DevOps, ML/AI, and Design. He is passionate about programming, innovation, and shaping the future. With expertise in various technologies and a strong background in software development, Hussein Bouik strives to create innovative solutions and contribute to the advancement of technology. His skill set includes proficiency in cloud computing, DevOps practices, AI-powered solutions/Data insights, and design principles. Hussein Bouik is dedicated to staying up-to-date with the latest industry trends and leveraging his knowledge to drive impactful and transformative projects."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Hussein Bouik from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hussein Bouik is from Tangier ,Morocco."
                }
              },
              {
                "@type": "Question",
                "name": "What does Hussein Bouik do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hussein Bouik leverages Cloud, DevOps, ML/AI, Design, and web/mobile apps to benefit people with optimized operations and user-friendly experiences."
                }
              }
            ]
          }
        `,
                }}/>

                {/*Edit this to your according to your website*/}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://husseinbouik.tech/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Docs",
              "item": "https://husseinbouik.tech/docs"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "Articles",
              "item": "https://husseinbouik.tech/articles"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://husseinbouik.tech/projects"
            },{
              "@type": "ListItem",
              "position": 5,
              "name": "Sign In",
              "item": "https://husseinbouik.tech/signin"
            }]
          }
        `
                }}/>

                {/*Edit this to your according to your website*/}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "NeuroLink",
            "description": "NeuroLink is a Python package that aims to provide various AI capabilities, including a chatbot, image processing, audio processing, Django support, and more. It utilizes TensorFlow and other related technologies for natural language processing and AI tasks.",
            "alternateName": "neurolink",
            "url": "https://github.com/husseinbouik/neurolink",
            "logo": "https://private-user-images.githubusercontent.com/75434191/242214243-82fbf702-43e2-46e6-8e01-11758fa26310.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ4NTE2ODksIm5iZiI6MTY5NDg1MTM4OSwicGF0aCI6Ii83NTQzNDE5MS8yNDIyMTQyNDMtODJmYmY3MDItNDNlMi00NmU2LThlMDEtMTE3NThmYTI2MzEwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTE2VDA4MDMwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3NjJmNzA5MGU5NWY4NTUxZTcxYmVmNzNlZTYzOTViN2FjNzE1YTM2MjM1OTNlOGIxNzk0ODE1NDczMDMzNGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ay5bRLRoojQ33ZJLFnvjyq6Dq4qZfDY7quvv4WmgRLI",
             "sameAs": [
            "https://www.linkedin.com/in/hussein-bouik/"
        ]          }
        `
                }}/>
                {/*theme*/}
                <Script id="theme.util.jsx" strategy="beforeInteractive">
                    {`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
                </Script>

                {/* Google Analytics */}
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X"/>
                <Script
                    id='google-analytics'
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SDJ0K1Y70X', {
            page_path: window.location.pathname,
          });
        `,
                    }}
                />
            </Head>

            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

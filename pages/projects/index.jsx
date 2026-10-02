
const GitRecentProjects   = dynamic(import ('../../src/components/sections/projects/recent'));
const FeaturedProjects  = dynamic(import ( '../../src/components/sections/projects/featured'));
import dynamic from "next/dynamic";

import Color from '../../src/components/utils/page.colors'
import Section from '../../src/components/structure/section';
import Container from '../../src/components/structure/container';
import Link from 'next/link';

import settings from '../../src/content/_settings.json'
import colors from '../../src/content/projects/_colors.json'
import TitleProjects from "./title.projects";

// this is the project page
export default function Projects({ user, repos, apiError }) {
	return (
		<>
			<TitleProjects/>
		<Color colors={colors} />
		<FeaturedProjects />
		{apiError ? (
			<Section>
				<Container spacing={['verticalXXXLrg']}>
					<h3>Recent Projects</h3>
					<p className="subtitle">
						GitHub is rate-limiting requests right now, so the live repository list
						couldn&apos;t be loaded. Please try again in a little while — or head
						back <Link href="/">home</Link> to see featured work.
					</p>
				</Container>
			</Section>
		) : (
			<GitRecentProjects user={user} repos={repos} />
		)}
		</>
	)
}

export async function getServerSideProps({ res }) {
	{/*This gets called on every request*/}
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	try {
		const [ gitUserRes, gitReposRes] = await Promise.all( [
			fetch(`https://api.github.com/users/${settings.username.github}`),
			fetch(`https://api.github.com/users/${settings.username.github}/repos`),
		] )

		if (!gitUserRes.ok || !gitReposRes.ok) {
			throw new Error(`GitHub API responded with ${gitUserRes.status}/${gitReposRes.status}`);
		}

		let [ user, repos] = await Promise.all( [
			gitUserRes.json(),
			gitReposRes.json(),
		] )

		if (user.login) {
			user = [user].map(
				({ login, name, avatar_url, html_url }) => ({ login, name, avatar_url, html_url })
			)
		}

		if (repos.length) {
			repos = repos.map(
				({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, pushed_at, topics }) => {
					const timestamp = Math.floor(new Date(pushed_at) / 1000)
					return ({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, timestamp, topics, pushed_at })
				}
			)

			repos.sort( (a, b) => b.timestamp - a.timestamp )

			repos = repos.filter( (e, i) => {
				if ( i < 8 && ! e.fork && ! e.topics.includes('github-config')) return e
				return false
			})
		}

		if (!repos || !user) { throw new Error('Empty GitHub API response'); }

		return { props: { repos, user, apiError: false } }
	} catch (e) {
		console.error('Projects page GitHub fetch failed:', e);
		return { props: { repos: [], user: [], apiError: true } }
	}
}

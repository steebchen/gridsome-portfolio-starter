<template>
	<div
		class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen"
		:class="theme"
	>
		<header class="border-t-14 border-primary">
			<nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
				<div>
					<g-link
						v-if="theme === 'theme-light'"
						to="/"
					>
						<g-image
							src="../../static/logo.svg"
							class="w-40"
							alt="logo"
						/>
					</g-link>
					<g-link
						v-else
						to="/"
					>
						<g-image
							src="../../static/logo_dark_mode.svg"
							class="w-40"
							alt="logo"
						/>
					</g-link>
				</div>

				<!-- mobile menu icon -->
				<div class="block lg:hidden">
					<button
						@click="toggle"
						class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
					>
						<svg
							class="current-color h-3 w-3"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
								fill="gray"
							/>
						</svg>
					</button>
				</div>
				<ul
					class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
					:class="isOpen ? 'block': 'hidden'"
				>
					<li class="mr-8 mb-6 lg:mb-0">
						<search-input/>
					</li>
					<li class="mr-8 mb-6 lg:mb-0">
						<theme-switcher
							:theme="theme"
							@themeChanged="updateTheme"
						/>
					</li>
					<li>
						<g-link
							to="/blog"
							class="text-copy-primary hover:text-gray-600"
						>Blog
						</g-link>
					</li>
				</ul>
			</nav>
		</header>

		<div class="flex-grow">
			<slot/>
		</div>
		<footer class="bg-primary text-white">
			<div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
				<div class="mb-8 lg:mb-0">
					<div>Copyright 2019. All rights reserved.</div>
					<div>
						<!--suppress HtmlUnknownTarget -->
						<a
							href="sitemap.xml"
							class="text-white hover:text-gray-400 font-normal"
						>
							Sitemap
						</a>
					</div>
				</div>
				<ul class="flex items-center">
					<li class="mr-8">
						<a
							href="mailto:me@example.com"
							class="text-white hover:text-gray-400"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</footer>
	</div>
</template>

<static-query>
	query {
		metaData {
			siteName
		}
	}
</static-query>

<script>
	import SearchInput from '../components/SearchInput'
	import ThemeSwitcher from '../components/ThemeSwitcher'

	export default {
		components: {
			SearchInput,
			ThemeSwitcher,
		},
		mounted() {
			this.theme = localStorage.getItem('theme') || 'theme-light'
		},
		data() {
			return {
				isOpen: false,
				theme: '',
			}
		},
		methods: {
			toggle() {
				this.isOpen = !this.isOpen
			},
			updateTheme(theme) {
				this.theme = theme
			},
		},
	}
</script>

<style src="../main.css"/>

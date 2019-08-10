<template>
	<div class="relative">
		<search-focus @keyup="focusSearch"></search-focus>

		<div class="relative w-80">
			<input
				@blur="searchResultsVisible = false"
				@focus="searchResultsVisible = true"
				@input="softReset"
				@keydown.down.prevent="highlightNext"
				@keydown.up.prevent="highlightPrev"
				@keyup="performSearch"
				@keyup.enter="gotoLink"
				@keyup.esc="searchResultsVisible = false"
				class="bg-background-form border border-gray-500 rounded-full px-4 pl-10 py-2 outline-none focus:border-green-500 w-80"
				placeholder="Search (Press  &quot;/&quot; to focus)"
				ref="search"
				type="text"
				v-model="query"
			>
			<div
				class="absolute top-0 ml-3"
				style="top:10px"
			>
				<svg
					class="text-gray-500 h-5 w-5"
					fill="currentColor"
					height="24"
					viewBox="0 0 24 24"
					width="24"
				>
					<path
						class="heroicon-ui"
						d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
					></path>
				</svg>
			</div>
			<div
				@click="reset"
				class="absolute top-0 right-0 text-2xl mr-3 cursor-pointer text-gray-600 hover:text-gray-800"
				style="top:2px;"
				v-if="query.length > 0"
			>
				&times;
			</div>
		</div>
		<transition name="fade">
			<div
				class="normal-case absolute border left-0 right-0 w-108 text-left mb-4 mt-2 rounded-lg shadow overflow-hidden z-10 overflow-y-auto"
				style="max-height: 32rem"
				v-if="query.length > 0 && searchResultsVisible"
			>
				<div
					class="flex flex-col"
					ref="results"
				>
					<a
						:class="{ 'search-highlighted' : index === highlightedIndex }"
						:href="post.item.path"
						:key="index"
						@click="reset"
						class="bg-background-form border-b border-gray-400 text-xl cursor-pointer p-4 search-hover"
						v-for="(post, index) in results"
					>
						{{ post.item.title }}

						<span class="block font-normal text-copy-primary text-sm my-1">{{ post.item.summary }}</span>
					</a>

					<div
						class="bg-background-form font-normal w-full border-b cursor-pointer p-4"
						v-if="results.length === 0"
					>
						<p class="my-0">No results for '<strong>{{ query }}</strong>'</p>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>


<static-query>
	{
		metaData{
			pathPrefix
		}
	}
</static-query>

<script>
	import axios from 'axios'
	import SearchFocus from './SearchFocus'

	export default {
		components: {
			SearchFocus,
		},
		created() {
			axios(this.$static.metaData.pathPrefix + '/search.json').then(response => {
				this.posts = response.data
				console.log(this.posts)
			}).catch(error => {
				console.log(error)
			})
		},
		data() {
			return {
				query: '',
				results: [],
				posts: [],
				highlightedIndex: 0,
				searchResultsVisible: false,
				options: {
					shouldSort: true,
					includeMatches: true,
					threshold: 0.5,
					location: 0,
					distance: 500,
					maxPatternLength: 32,
					minMatchCharLength: 1,
					keys: ['title', 'summary'],
				},
			}
		},
		methods: {
			reset() {
				this.query = ''
				this.highlightedIndex = 0
			},
			softReset() {
				this.highlightedIndex = 0
				this.searchResultsVisible = true
			},
			performSearch() {
				this.$search(this.query, this.posts, this.options).then(results => {
					this.results = results
				})
			},
			highlightPrev() {
				if (this.highlightedIndex > 0) {
					this.highlightedIndex = this.highlightedIndex - 1
					this.scrollIntoView()
				}
			},
			highlightNext() {
				if (this.highlightedIndex < this.results.length - 1) {
					this.highlightedIndex = this.highlightedIndex + 1
					this.scrollIntoView()
				}
			},
			scrollIntoView() {
				this.$refs.results.children[this.highlightedIndex].scrollIntoView({ block: 'nearest' })
			},
			gotoLink() {
				if (this.results[this.highlightedIndex]) {
					window.location = this.results[this.highlightedIndex].item.path
				}
			},
			focusSearch(e) {
				if (e.key === '/') {
					this.$refs.search.focus()
				}
			},
		},
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .2s;
	}

	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>


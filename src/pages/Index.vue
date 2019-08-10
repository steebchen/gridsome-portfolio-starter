<template>
	<Layout>
		<div class="hero container mx-auto flex flex-col sm:flex-row justify-between py-16">
			<div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
				<div class="leading-tight">
					Gridsome Portfolio Starter
				</div>
				<div class="text-primary leading-tight mt-2">
					This is a description
				</div>
			</div>
			<div class="mt-8 sm:mt-0 max-w-xs">
				<g-image
					src="../../static/404.svg"
					alt="hero"
					class="mx-auto sm:mx-0"
				/>
			</div>
		</div>

		<div class="container mx-auto mb-16">
			<p class="text-lg sm:text-xl">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos dolores ducimus et, eum facere ipsum laboriosam maxime mollitia nemo omnis perferendis perspiciatis quisquam quos, rem, sequi veritatis. Aliquid, eum?
			</p>
		</div>

		<div class="border-gray-200 border-b">
			<div class="container mx-auto text-xl pb-16 relative">
				<div
					class="absolute left-0"
					style="transform: translateX(-100%);"
				>
					<img
						height="170"
						src="../../static/patterns/object.svg"
						svg-inline
						svg-sprite
						width="170"
					/>
				</div>

				<h2
					class="font-bold mb-6"
					id="about"
				>
					Get to know me:
				</h2>

				<div class="text-lg sm:text-xl">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.
				</div>

				<ul class="text-lg sm:text-xl mt-8">
					<li class="checkmark mb-6">
						<div>Project One</div>
						<div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
					</li>
					<li class="checkmark mb-6">
						<div>Project Two</div>
						<div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="overflow-x-hidden">
			<div class="contact-me bg-background-secondary pt-16">
				<div class="container mx-auto text-xl pb-4 relative">
					<h2
						class="font-bold mb-6"
						id="contact"
					>
						Contact me:
					</h2>

					<div
						class="absolute right-0 top-0"
						style="transform: translate(100%);"
					>
						<img
							height="170"
							src="../../static/patterns/object.svg"
							style="transform: rotate(180deg);"
							svg-inline
							svg-sprite
							width="170"
						/>
					</div>

					<p class="mb-12">
						Static sites cannot submit forms on their own. However, services like
						<a href="https://www.netlify.com/docs/form-handling">Netlify Forms</a>
						or
						<a href="https://formspree.io">FormSpree</a>
						can help you do this without a backend.
					</p>

					<div class="text-lg sm:text-lg mb-16">
						<form
							action="#"
							class="mb-12"
						>
							<div class="flex flex-wrap mb-6 -mx-4">
								<div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
									<label
										class="block mb-2 text-copy-primary"
										for="name"
									>
										Name
									</label>

									<input
										type="text"
										name="name"
										id="name"
										placeholder="Jon Snow"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-primary mb-2 p-4"
										required
									>
								</div>

								<div class="w-full px-4 md:w-1/2">
									<label
										class="block text-copy-primary mb-2"
										for="email"
									>
										Email Address
									</label>

									<input
										type="email"
										name="email"
										id="email"
										placeholder="email@example.com"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-primary mb-2 p-4"
										required
									>
								</div>
							</div>

							<div class="w-full mb-12">
								<label
									class="block text-copy-primary mb-2"
									for="message"
								>
									Message
								</label>

								<textarea
									id="message"
									rows="5"
									name="message"
									class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-primary mb-2 px-4 py-4"
									placeholder="Enter your message here."
									required
								></textarea>
							</div>

							<div class="flex justify-end w-full">
								<input
									type="submit"
									value="Submit"
									class="block bg-primary hover:bg-primary-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
								>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<div class="newsletter bg-background-tertiary">
			<div class="container mx-auto py-16 pb-8 text-center textl-xl">
				<h2 class="text-2xl font-bold mb-8">
					Join my Newsletter
				</h2>

				<div class="w-4/5 mx-auto mb-8">
					<p class="mb-8 text-lg sm:text-xl">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum. Quam, deleniti nulla.
					</p>

					<form action="#">
						<div class="flex flex-col sm:flex-row">
							<input
								type="email"
								name="email"
								placeholder="Your email address"
								class="flex-1 bg-background-form rounded sm:rounded-r-none px-4 py-4 leading-normal border border-border-color-primary sm:border-r-0 shadow outline-none focus:border-primary z-10"
								required
							>

							<button
								data-element="submit"
								class="flex-2 w-40 uppercase bg-primary text-white rounded sm:rounded-l-none text-lg py-3 px-8 tracking-wide shadow focus:outline-none hover:bg-primary-800 focus:bg-primary-800 z-10 w-full sm:w-auto mt-4 sm:mt-0"
							>
								<span>
									Subscribe
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>

			<div class="container-inner mx-auto -mt-32 pb-4 overflow-x-hidden">
				<img
					src="../../static/patterns/background.svg"
					svg-inline
				/>
			</div>
		</div>

	</Layout>
</template>

<script>
	export default {
		metaInfo: {
			title: 'Home',
		},
	}
</script>


<template>
	<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
	<!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
	<main>
		<img src="../assets/goos.jpg" />
		<h1>Hjönk, World!</h1>
		<p>
			hjönkbot is a silly goose with the ability to enter your Voice Chat or
			slide into your DMs and hjönk away.
		</p>
		<div class="btn">
			<router-link to="/discord">Invite to your Discord Server</router-link>
		</div>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

	export default defineComponent({
		name: 'Home',
		// components: {
		//   HelloWorld,
		// },
	});
</script>

<style lang="scss" scoped>
	main {
		h1 {
			font-family: 'Gloria Hallelujah', sans-serif;
			text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
		}
		img {
			box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
			height: 8em;
			border-radius: 50%;
			margin-top: 1em;
		}
	}
	@media only screen and (max-width: 872px) {
		main {
			padding: 1em 1em;
		}
	}
</style>

<template>
	<main>
		<h1>No such page.</h1>
		<p>Sorry dude, no luck. 🤔</p>
		<div class="btn">
			<router-link to="/">Go back</router-link>
		</div>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'NotFound',
	});
</script>

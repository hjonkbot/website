<template>
	<nav>
		<router-link to="/discord">discord</router-link>
		<!-- <router-link to="/twitter" class="disabled">twitter</router-link> -->
		<a class="disabled" style="user-select: none">twitter</a>
		<router-link
			to="/"
			style="display:flex;align-items:center;line-height:1em;filter: drop-shadow(2px 2px 15px rgba(0,0,0,.3))"
			v-on:click="playhonk"
		>
			<img src="./assets/goose.svg" />
		</router-link>
		<!-- <router-link to="/messenger" class="disabled">messenger</router-link> -->
		<a class="disabled" style="user-select:none">messenger</a>
		<router-link to="/github">github</router-link>
	</nav>
	<router-view />
</template>

<script>
	export default {
		methods: {
			// eslint-disable-next-line
			playhonk() {
				let audio = new Audio(require('@/assets/honk1.wav'));
				audio.play();
			},
		},
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
	:root {
		--primary: #f7630c;
	}
	* {
		margin: 0;
	}
	body {
		font-family: 'Gloria Hallelujah', sans-serif;
		font-size: 20px;
		nav {
			// background-color: #c0c0c0;
			padding: 0.2em 8em;
			display: flex;
			align-items: center;
			justify-content: center;
			a {
				font-size: 1.4em;
				margin: 0 1em;
				color: inherit;
				text-decoration: inherit;
				transform: 0.2s all ease;
				text-rendering: geometricPrecision;
				// &:first-of-type {
				// 	// margin-right: 3em
				// }
				&.disabled {
					opacity: 0.5;
				}
				&:hover {
					transform: scale(1.1);
				}
			}
		}
		main {
			font-family: 'Architects Daughter', sans-serif;
			padding: 1em 14em;
			.btn {
				a {
					margin: 1.2em;
					display: inline-block;
					background-color: var(--primary);
					padding: 0.6em;
					border-radius: 6px;
					color: white;
					text-decoration: inherit;
					box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
					transition-duration: 0.2s;
					&:hover,
					&:focus {
						background-color: #fff;
						color: #000;
						box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
					}
				}
			}
		}
	}
	@media only screen and (max-width: 872px) {
		body {
			nav {
				transform: scale(0.45);
			}
		}
	}
</style>

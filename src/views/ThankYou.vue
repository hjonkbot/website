<template>
	<main>
		<div>
			<img src="../assets/goos.jpg" class="goos" />
			<div class="plus">+</div>
			<img src="../assets/discord.svg" class="discord" />
		</div>
		<h1>Thank you for inviting hjönkbot!</h1>
	</main>
</template>

<style lang="sass" scoped>
main
	font-family: 'Architects Daughter', sans-serif
	padding: 1em 14em
	display: flex
	justify-content: center
	flex-direction: column
	div
		display: flex
		justify-content: center
		margin-top: 5em
	.plus
		font-family: sans-serif
		font-size: 6em
		margin: 0 0.75em
		display: flex
		align-items: center
		color: #00000030
	h1
		font-family: 'Gloria Hallelujah', sans-serif
		text-shadow: 2px 2px 15px rgba(0,0,0,.3)
		text-align: center
		margin-top: 1em
	.goos
		box-shadow: 2px 2px 15px rgba(0,0,0,.3)
		height: 8em
		border-radius: 50%
	.discord
		filter: drop-shadow(2px 2px 15px rgba(0,0,0,.3))
		height: 8em
</style>

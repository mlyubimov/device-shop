<template>
	<div class="information-container" v-show="this.showInfo === 'feedback'">
		<h2 class="information__title font-gilroy-eb">Отзывы</h2>
		<p class="information__text font-sans-300">Этот обычный, на первый взгляд, квадрокоптер оснащен мощным лазером, замаскированным под стандартную камеру.</p>
	</div>
</template>

<script>
export default {
	props: ['product', 'showInfo']
}
</script>

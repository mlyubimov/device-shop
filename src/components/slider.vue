<template>
	<div class="product-card__img-container">
		<div class="slider">
			<button @click="prevPhoto" class="product-card__mini-img product-card__mini-img-btn">&and;</button>
			<div class="slider__list">
				<ul class="slider__track product-card__mini-img-container">
					<li v-for="(photo, index) in arr" :key="photo.path" class="slider__item product-card__mini-img" :style="'background-image: url(' + require(`@/assets/img/${photo.path}`) + '); transform: translateY(' + ((80 * index) + ((80 * count) - 4) + (4 * index) + 2) + 'px)'"></li>
				</ul>
			</div>
			<button @click="nextPhoto" class="product-card__mini-img product-card__mini-img-btn">&or;</button>
		</div>
		<div :class="['product-card__img product__img-container', opacityOn ? 'product-card__img--opacity' : '']" :style="'background-image: url(' + require(`@/assets/img/${photoPath}`) + ')'"></div>
	</div>
</template>

<script>
export default {
	props: ['product'],
	data () {
		return {
			arr: this.product.photos,
			photoPath: this.product.photos[0].path,
			count: 0,
			opacityOn: false
		}
	},
	methods: {
		prevPhoto () {
			this.opacityOn = true
			this.count = -1
			for (var i = 0; i < 1; i++) {
				this.arr.unshift(this.arr.pop())
			}
			setTimeout(() => {
				this.count = 0
			}, 0)
			setTimeout(() => {
				this.photoPath = this.arr[0].path
				this.opacityOn = false
			}, 300)
		},
		nextPhoto () {
			this.opacityOn = true
			this.count = -1
			setTimeout(() => {
				for (var i = 1; i > 0; i--) {
					this.arr.push(this.arr.shift())
				}
				this.photoPath = this.arr[0].path
				this.count = 0
				this.opacityOn = false
			}, 300)
		}
	}
}
</script>

<style lang="scss" scoped>
.slider {
	display: flex;
	flex-direction: column;
	position: relative;
	height: 504px;
	margin-right: 20px;

	&__list {
		overflow: hidden;
		flex: 1;
	}

	&__track {
		position: relative;
		height: 100%;
	}

	&__item {
		position: absolute;
		transition: .3s ease-in-out;
	}
}
</style>

<template>
	<article class="product__article">
		<div :class="['product__img-container', product.newProduct ? 'product__img-new' : '']" tabindex="0" :style="`background-image: url(${this.imgPath})`">
			<div class="product__link-container">
				<button class="btn product__btn font-gilroy-eb"
					aria-label="Добавить товар в корзину">В корзину</button>
				<button class="product__link-comparison font-sans-300"
					aria-label="Добавить товар в список сравнения">Добавить к сравнению</button>
			</div>
		</div>
		<div class="product__article-text">
			<router-link :to="`/catalog/${this.productLink}/${product.id}`">
				<h3 class="font-gilroy-eb">{{ product.brand }} {{ product.name }}</h3>
			</router-link>
			<p class="product__article-paragraph font-gilroy-l">{{ product.price }} руб.</p>
		</div>
	</article>
</template>

<script>
export default {
	name: 'ProductList',
	props: ['product'],
	data () {
		return {
			imgPath: ''
		}
	},
	created () {
		this.product.price = String(this.product.price).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')
		const str = (this.product.brand + ' ' + this.product.name).replace(/ /g, '-').split('-')
		this.imgPath = require('@/assets/img/' + this.$route.path.split('/')[2] + '/' + str.shift() + '/' + str.join('-') + '/main-photo.jpg')
	},
	computed: {
		productLink () {
			return this.$route.path.split('/')[2]
		}
	}
}
</script>

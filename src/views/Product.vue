<template>
	<main class="main product-card site-wrapper">
		<div :class="['product-card__header',this.showPageInfo === true ? 'product-card__header--show' : '']">
			<div class="product-card__header-container site-wrapper">
				<p class="product-card__header-text font-gilroy-eb">{{ product.brand }} {{ product.name }}</p>
				<div class="product-card__header-btn-container">
					<h2 class="product-card__header-price product-card__price font-gilroy-eb">{{ product.price }} руб.</h2>
					<button class="btn product__btn product-card__btn product-card__btn--header font-gilroy-eb" aria-label="Добавить товар в корзину">Купить</button>
				</div>
			</div>
		</div>
		<div class="site-wrapper breadcrumbs catalog__breadcrumbs">
			<h1 class="catalog__title font-gilroy-eb">{{ product.brand }} {{ product.name }}</h1>
			<ul class="breadcrumbs__list">
				<li class="breadcrumbs__item">
					<router-link class="breadcrumbs__link font-sans-300" to="/" aria-label="Перейти на главную страницу">Главная</router-link>
				</li>
				<li class="breadcrumbs__item">
					<router-link class="breadcrumbs__link font-sans-300" to="/catalog" aria-label="Открыть каталог товаров">Каталог товаров</router-link>
				</li>
				<li class="breadcrumbs__item">
					<router-link class="breadcrumbs__link font-sans-300" :to="`/catalog/${this.$route.path.split('/')[2]}`">{{ this.pageName }}</router-link>
				</li>
				<li class="breadcrumbs__item">
					<p class="breadcrumbs__link font-sans-300">{{ product.brand }} {{ product.name }}</p>
				</li>
			</ul>
		</div>
		<div class="product-card__content-container">
			<Slider :product="product"/>
			<div :class="['product-card__price-container', product.newProduct === true ? 'product__img-new' : '']">
				<div class="product-card__price-container">
					<h2 class="product-card__price font-gilroy-eb" id="price">{{ product.price }} руб.</h2>
					<div class="product-card__btn-container">
						<button class="btn product__btn product-card__btn font-gilroy-eb" aria-label="Добавить товар в корзину">В корзину</button>
						<button class="product-card__link-comparison product__link-comparison font-sans-300" aria-label="Добавить товар в список сравнения">Добавить к сравнению</button>
					</div>
				</div>
			</div>
		</div>
		<div class="product-card__info-container">
			<ul class="main-tabs">
				<li class="main-tabs__item">
					<input class="main-tabs__input visually-hidden" type="radio" name="info" id="description" checked>
					<label @click="infoCheck('description')" class="main-tabs__label font-gilroy-eb" for="description">Описание</label>
				</li>
				<li class="main-tabs__item">
					<input class="main-tabs__input visually-hidden" type="radio" name="info" id="specifications">
					<label @click="infoCheck('specifications')" class="main-tabs__label font-gilroy-eb" for="specifications">Характеристики</label>
				</li>
				<li class="main-tabs__item">
					<input class="main-tabs__input visually-hidden" type="radio" name="info" id="feedback">
					<label @click="infoCheck('feedback')" class="main-tabs__label font-gilroy-eb" for="feedback">Отзывы</label>
				</li>
			</ul>
			<div :class="['information', infoOpacity ? 'information--opacity' : '']">
				<component v-bind:is="description" :product="product" :showInfo="showInfo"></component>
				<component v-bind:is="specifications" :product="product" :showInfo="showInfo"></component>
				<component v-bind:is="feedback" :product="product" :showInfo="showInfo"></component>
			</div>
		</div>
	</main>
</template>

<script>
import Slider from '@/components/slider.vue'

export default {
	name: 'Product',
	data () {
		return {
			showInfo: 'description',
			infoOpacity: false,
			showPageInfo: false
		}
	},
	components: {
		Slider
	},
	created () {
		if (!this.product) {
			this.$router.push({ name: 'PageNotFound' })
		}
		this.product.price = String(this.product.price).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')

		let lock = true
		window.addEventListener('scroll', () => {
			if (lock === true && document.querySelector('#price').getBoundingClientRect().y < 0) {
				lock = false
				this.showPageInfo = true
			} else if (lock === false && document.querySelector('#price').getBoundingClientRect().y > 0) {
				lock = true
				this.showPageInfo = false
			}
		})

		// const func = import(`@/assets/pages/${this.product.brand}/${this.product.name.replace(/ /g, '-')}/description.vue`)

		// console.log(func.then(response => console.log(response)).catch(err => console.log(err)))

		// if (func) {
		// 	console.log(this.product.name.replace(/ /g, '-'))
		// }
	},
	computed: {
		product () {
			const arr = this.$route.path.split('/')[2].split('-')
			for (let i = 0; i < arr.length; i++) {
				arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
			}
			return this.$store.state.catalog[arr.join('')].find(item => item.id === this.$route.path.split('/')[3])
		},
		pageName () {
			const arr = this.$route.path.split('/')[2].split('-')
			for (let i = 0; i < arr.length; i++) {
				arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
			}
			return 	arr[0] === 'VirtualReality' ? 'Виртуальная реальность' : '' ||
					arr[0] === 'Monopods' ? 'Моноподы для селфи' : '' ||
					arr[0] === 'ActionCameras' ? 'Экшн-камеры' : '' ||
					arr[0] === 'FitnessTrackers' ? 'Фитнес-браслеты' : '' ||
					arr[0] === 'Smartwatch' ? 'Умные часы' : '' ||
					arr[0] === 'Quadcopters' ? 'Квадракоптеры' : ''
		},
		description () {
			return () => import(`@/assets/pages/${this.product.brand}/${this.product.name.replace(/ /g, '-')}/description.vue`)
		},
		specifications () {
			return () => import(`@/assets/pages/${this.product.brand}/${this.product.name.replace(/ /g, '-')}/specifications.vue`)
		},
		feedback () {
			return () => import(`@/assets/pages/${this.product.brand}/${this.product.name.replace(/ /g, '-')}/feedback.vue`)
		}
	},
	methods: {
		infoCheck (checkedValue) {
			this.infoOpacity = true
			setTimeout(() => {
				this.showInfo = checkedValue
				this.infoOpacity = false
			}, 300)
		}
	}
}
</script>

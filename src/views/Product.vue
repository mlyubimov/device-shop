<template>
	<main class="main product-card site-wrapper">
		<div :class="['product-card__header',this.showPageInfo === true ? 'product-card__header--show' : '']">
			<div class="product-card__header-container site-wrapper">
				<p class="product-card__header-text font-gilroy-eb">{{ product.brand }} {{ product.name }}</p>
				<div class="product-card__header-btn-container">
					<h2 class="product-card__header-price product-card__price font-gilroy-eb">{{ product.price }} руб.</h2>
					<button class="btn product__btn product-card__btn product-card__btn--header font-gilroy-eb" aria-label="Добавить товар в корзину">В корзину</button>
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
			<splide :options="secondaryOptions" ref="secondary" class="product-card__mini-img-container">
				<splide-slide v-for="photo in product.photos" :key="photo.path">
					<img :src="require(`@/assets/img/${photo.path}`)" style="position: relative; top: 50%; left: 50%; max-width: 100%; max-height: 100%; transform: translate(-50%, -50%)">
				</splide-slide>
			</splide>
			<splide :options="primaryOptions" ref="primary" class="product-card__img">
				<splide-slide v-for="photo in product.photos" :key="photo.path">
					<img :src="require(`@/assets/img/${photo.path}`)" style="position: relative; top: 50%; left: 50%; max-width: 100%; max-height: 100%; transform: translate(-50%, -50%)">
				</splide-slide>
			</splide>
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
					<input class="main-tabs__input visually-hidden" @click="infoCheck('description')" :disabled="this.showInfo === 'description'" type="radio" name="info" id="description" checked>
					<label class="main-tabs__label font-gilroy-eb" for="description">Описание</label>
				</li>
				<li class="main-tabs__item">
					<input class="main-tabs__input visually-hidden" @click="infoCheck('specifications')" :disabled="this.showInfo === 'specifications'" type="radio" name="info" id="specifications">
					<label class="main-tabs__label font-gilroy-eb" for="specifications">Характеристики</label>
				</li>
				<li class="main-tabs__item">
					<input class="main-tabs__input visually-hidden" @click="infoCheck('feedback')" :disabled="this.showInfo === 'feedback'" type="radio" name="info" id="feedback">
					<label class="main-tabs__label font-gilroy-eb" for="feedback">Отзывы ({{ this.feedbackCount }})</label>
				</li>
			</ul>
			<div :class="['information', infoOpacity ? 'information--opacity' : '']">
				<component v-if="descriptionShow" v-bind:is="description" :product="product" :showInfo="showInfo"></component>
				<div v-else v-show="this.showInfo === 'description'">
					<h2 class="information__title information__title--empty font-gilroy-eb">Упс! <br> Кажется, мы забыли добавить описание... &#128543;</h2>
				</div>

				<div class="information-container" v-if="specificationsShow" v-show="this.showInfo === 'specifications'">
					<h2 class="information__title font-gilroy-eb">Характеристики</h2>
					<div class="information-container--table">
						<div class="information__table-container" v-for="(table, index) in product.specification" :key="index">
							<h3 class="information__table-name font-gilroy-eb">{{ table.tableName }}</h3>
							<table class="information__table">
								<tr class="information__table-row" v-for="(data, index) in table.data" :key="index">
									<th class="information__table-title font-gilroy-eb">{{ data.title }}</th>
									<td class="information__table-info font-sans-300">
										<p class="information__table-text" v-html="data.info.text"></p>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div v-else v-show="this.showInfo === 'specifications'">
					<h2 class="information__title information__title--empty font-gilroy-eb">Упс! <br> Кажется, мы забыли добавить харакеристики... &#128543;</h2>
				</div>

				<div class="information" v-show="this.showInfo === 'feedback'">
					<h2 class="information__title font-gilroy-eb">Отзывы</h2>
					<ul class="feedback">
						<li class="feedback__item" v-for="(item, index) in this.product.feedback.reverse()" :key="index">
							<p class="feedback__date font-sans-400" v-if="new Date((new Date() - new Date(item.date))).getUTCFullYear() - 1970 > 0">Больше года назад</p>

							<p class="feedback__date font-sans-400" v-else-if="new Date((new Date() - new Date(item.date))).getUTCMonth() > 0">
								<template v-if="new Date((new Date() - new Date(item.date))).getUTCMonth() === 1">
									{{ new Date((new Date() - new Date(item.date))).getUTCMonth() }} месяц назад
								</template>
								<template v-else-if="new Date((new Date() - new Date(item.date))).getUTCMonth() === 2 || new Date((new Date() - new Date(item.date))).getUTCMonth() === 3 || new Date((new Date() - new Date(item.date))).getUTCMonth() === 4">
									{{ new Date((new Date() - new Date(item.date))).getUTCMonth() }} месяца назад

								</template>
								<template v-else>
									{{ new Date((new Date() - new Date(item.date))).getUTCMonth() }} месяцев назад
								</template>
							</p>

							<p class="feedback__date font-sans-400" v-else>
								<template v-if="Number((new Date((new Date() - new Date(item.date))).getUTCDate() - 1).toString().split('').pop()) > 4 && Number((new Date((new Date() - new Date(item.date))).getUTCDate() - 1).toString().split('').pop()) < 21">
									{{ new Date((new Date() - new Date(item.date))).getUTCDate() - 1 }} дней назад
								</template>
								<template v-else-if="Number((new Date((new Date() - new Date(item.date))).getUTCDate() - 1).toString().split('').pop()) === 1">
									{{ new Date((new Date() - new Date(item.date))).getUTCDate() - 1 }} день назад
								</template>
								<template v-else-if="Number((new Date((new Date() - new Date(item.date))).getUTCDate() - 1).toString().split('').pop()) === 2 || Number((new Date((new Date() - new Date(item.date))).getUTCDate() - 1).toString().split('').pop()) === 3 || Number((new Date((new Date() - new Date(item.date))).getUTCDate() - 1).toString().split('').pop()) === 4">
									{{ new Date((new Date() - new Date(item.date))).getUTCDate() - 1 }} дня назад
								</template>
								<template v-else>
									{{ new Date((new Date() - new Date(item.date))).getUTCDate() - 1 }} дней назад
								</template>
							</p>

							<div class="feedback__content">
								<h3 class="feedback__name font-gilroy-eb">{{ item.name }}</h3>
								<p class="feedback__comment information__text font-sans-400">{{ item.comment }}</p>
							</div>
							<div class="feedback__rating" :data-rating="item.rating"></div>
						</li>
					</ul>
					<div class="information__form-container">
						<form class="information__form" action="https://echo.htmlacademy.ru" method="post">
							<div class="information__form-header">
								<h3 class="information__form-title font-gilroy-eb">Оставить отзыв</h3>
								<div class="rating-form">
									<input class="visually-hidden" type="radio" name="rating" value="five" id="rating-one" checked>
									<label class="rating-form__label" for="rating-one"></label>
									<input class="visually-hidden" type="radio" name="rating" value="four" id="rating-two">
									<label class="rating-form__label" for="rating-two"></label>
									<input class="visually-hidden" type="radio" name="rating" value="three" id="rating-three">
									<label class="rating-form__label" for="rating-three"></label>
									<input class="visually-hidden" type="radio" name="rating" value="two" id="rating-four">
									<label class="rating-form__label" for="rating-four"></label>
									<input class="visually-hidden" type="radio" name="rating" value="one" id="rating-five">
									<label class="rating-form__label" for="rating-five"></label>
								</div>
							</div>
							<div class="information__user-info-container">
								<div class="information__input-container">
									<label class="information__label font-gilroy-eb" for="name">Ваше имя:</label>
									<input class="information__input" type="text" name="personalName" id="name" placeholder="Имя Фамилия" maxlength="60" required>
								</div>
								<div class="information__input-container">
									<label class="information__label font-gilroy-eb" for="email">Ваш e-mail:</label>
									<input class="information__input" type="email" name="personalEmail" id="email" placeholder="email@example.com" maxlength="60" required>
								</div>
							</div>
							<label class="information__label font-gilroy-eb" for="comment">Ваш комментарий:</label>
							<textarea class="information__textarea" type="text" name="personalComment" id="comment" placeholder="В свободной форме" maxlength="1500" required></textarea>
							<button class="btn" type="submit">Отправить</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'

export default {
	name: 'Product',
	data () {
		return {
			showInfo: 'description',
			infoOpacity: false,
			showPageInfo: false,
			lock: true,
			descriptionShow: false,
			specificationsShow: false,
			feedbackShow: false,
			feedbackCount: 0,
			primaryOptions: {
				type: 'fade',
				keyboard: false,
				drag: false,
				fixedWidth: 504,
				fixedHeight: 504,
				heightRatio: 0.5,
				pagination: false,
				arrows: false
			},
			secondaryOptions: {
				rewind: true,
				keyboard: false,
				fixedWidth: 80,
				fixedHeight: 80,
				isNavigation: true,
				height: 408,
				gap: 4,
				focus: 'center',
				pagination: false,
				direction: 'ttb',
				// autoplay: true,
				breakpoints: {
					600: {
						fixedWidth: 40,
						fixedHeight: 40
					}
				}
			}
		}
	},
	created () {
		if (!this.product) {
			this.$router.push({ name: 'PageNotFound' })
		}
		this.product.price = String(this.product.price).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')

		window.addEventListener('scroll', this.scrollFunction)

		import(`@/assets/pages/${this.product.brand}/${this.product.name.replace(/ /g, '-')}/description.vue`).then(response => {
			this.descriptionShow = true
		}).catch(() => {
			this.descriptionShow = false
		})

		if (this.product.specification) {
			this.specificationsShow = true
		}

		if (this.product.feedback) {
			this.feedbackShow = true
			this.feedbackCount = this.product.feedback.length
		} else {
			this.feedbackCount = 0
		}
	},

	mounted () {
		this.$refs.primary.sync(this.$refs.secondary.splide)
	},

	destroyed () {
		window.removeEventListener('scroll', this.scrollFunction)
	},

	computed: {
		product () {
			const arr = this.$route.path.split('/')[2].split('-')
			for (let i = 0; i < arr.length; i++) {
				arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
			}
			console.log(arr)
			return this.$store.state.catalog[arr.join('')].find(item => item.id === this.$route.path.split('/')[3])
		},
		pageName () {
			const arr = this.$route.path.split('/')[2].split('-')
			for (let i = 0; i < arr.length; i++) {
				arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
			}
			// switch (arr[0]) {
			// case 'VirtualReality': {
			// 	return 'Виртуальная реальность'
			// }
			// case 'Monopods': {
			// 	return 'Моноподы для селфи'
			// }
			// case 'ActionCameras': {
			// 	return 'Экшн-камеры'
			// }
			// case 'FitnessTrackers': {
			// 	return 'Фитнес-браслеты'
			// }
			// case 'Smartwatch': {
			// 	return 'Умные часы'
			// }
			// case 'Quadcopters': {
			// 	return 'Квадракоптеры'
			// }
			// default: {
			// 	return ''
			// }
			// }
			return 	arr[0] === 'VirtualReality' ? 'Виртуальная реальность' : '' ||
					arr[0] === 'Monopods' ? 'Моноподы для селфи' : '' ||
					arr[0] === 'ActionCameras' ? 'Экшн-камеры' : '' ||
					arr[0] === 'FitnessTrackers' ? 'Фитнес-браслеты' : '' ||
					arr[0] === 'Smartwatch' ? 'Умные часы' : '' ||
					arr[0] === 'Quadcopters' ? 'Квадракоптеры' : ''
		},
		description () {
			return () => import(`@/assets/pages/${this.product.brand}/${this.product.name.replace(/ /g, '-')}/description.vue`)
		}
	},
	methods: {
		infoCheck (checkedValue) {
			this.infoOpacity = true
			setTimeout(() => {
				this.showInfo = checkedValue
				this.infoOpacity = false
			}, 300)
		},

		scrollFunction () {
			if (this.lock === true && document.querySelector('#price').getBoundingClientRect().y < 0) {
				this.lock = false
				this.showPageInfo = true
			} else if (this.lock === false && document.querySelector('#price').getBoundingClientRect().y > 0) {
				this.lock = true
				this.showPageInfo = false
			}
		}
	}
}
</script>

<style lang="scss">
	.product-card {
		&__img {
			padding: 0;
		}

		&__mini-img-container {
			padding-right: 0;
			padding-left: 0;
			margin-right: 20px;
		}
	}

	.splide__arrow svg {
		fill: var(--special-yellow);
		transition: opacity 0.3s;
	}

	.splide__arrow:hover svg {
		fill: var(--special-yellow);
		opacity: 0.6;
	}

	.splide__arrow:active svg {
		fill: var(--special-yellow);
		opacity: 0.3;
	}

	.splide--nav>.splide__track>.splide__list>.splide__slide.is-active {
		border-color: var(--special-yellow);
	}
</style>

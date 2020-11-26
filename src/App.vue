<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<Preloader v-if="loaderShow"/>
		</transition>
		<header :class="['header site-wrapper', this.$route.path === '/' ? 'header--index' : '']">
			<router-link to="/">
				<img class="logo header__logo" src="@/assets/img/svg/logo-device.svg" width="163" height="35" alt="Device">
			</router-link>
			<section class="header-main">
				<h1 class="visually-hidden">Device</h1>
				<nav class="header__navigation">
					<ul class="user-navigation header__list">
						<li class="header__item user-navigation__item user-navigation__item--first">
							<form class="search-form header__search-form" action="https://echo.htmlacademy.ru" method="get">
								<label class="visually-hidden" for="search-input">Поиск по сайту</label>
								<input id="search-form__input" class="font-sans-300 search-form__input" name="site-search" type="search" placeholder="Поиск по сайту" title="Введите запрос для поиска по сайту" required>
								<button class="search-form__btn" type="submit">Найти</button>
							</form>
						</li>
						<li class="header__item user-navigation__item user-navigation__entrance font-sans-300">
							<a href="#" class="header__link user-navigation__link user-navigation__entrance-link">Войти</a>
						</li>
						<li class="header__item user-navigation__item user-navigation__comparison font-sans-300">
							<a href="#"
								class="header__link user-navigation__link user-navigation__comparison-link">Сравнить</a>
						</li>
						<li class="header__item user-navigation__item user-navigation__basket font-sans-300">
							<a href="#" class="header__link user-navigation__link user-navigation__basket-link">Корзина</a>
						</li>
					</ul>
					<ul class="site-navigation header__site-navigation header__list">
						<li class="site-navigation__item site-navigation__catalog font-gilroy-eb">
							<router-link class="header__link site-navigation__link site-navigation__catalog-link" to="/catalog"
								aria-label="Открыть каталог товаров">Каталог товаров</router-link>
							<div class="dropdown">
								<ul class="dropdown__list">
									<li class="dropdown__item font-sans-300">
										<router-link class="header__link dropdown__link" to="/catalog/virtual-reality" aria-label="Открыть страницу товаров виртуальной реальности">Виртуальная реальность</router-link>
									</li>
									<li class="dropdown__item font-sans-300">
										<router-link class="header__link dropdown__link" to="/catalog/monopods" aria-label="Открыть страницу моноподов для селфи">Моноподы для селфи</router-link>
									</li>
									<li class="dropdown__item font-sans-300">
										<router-link class="header__link dropdown__link" to="/catalog/action-cameras"
											aria-label="Открыть страницу экшн-камер">Экшн-камеры</router-link>
									</li>
								</ul>
								<ul class="dropdown__list">
									<li class="dropdown__item font-sans-300">
										<router-link class="header__link dropdown__link" to="/catalog/fitness-trackers"
											aria-label="Открыть страницу фитнес-браслетов">Фитнес-браслеты</router-link>
									</li>
									<li class="dropdown__item font-sans-300">
										<router-link class="header__link dropdown__link" to="/catalog/smartwatch"
											aria-label="Открыть страницу умных часов">Умные
											часы</router-link>
									</li>
								</ul>
								<ul class="dropdown__list dropdown__list--last">
									<li class="dropdown__item font-sans-300">
										<router-link class="header__link dropdown__link" to="/catalog/quadcopters"
											aria-label="Открыть страницу квадрокоптеров">Квадрокоптер</router-link>
									</li>
								</ul>
							</div>
						</li>
						<li class="site-navigation__item site-navigation__delivery font-gilroy-eb">
							<a class="header__link site-navigation__link" href="#"
								aria-label="Открыть страницу доставки">Доставка</a>
						</li>
						<li class="site-navigation__item site-navigation__guarantee font-gilroy-eb">
							<a class="header__link site-navigation__link" href="#"
								aria-label="Открыть страницу с информацией о гарантии">Гарантия</a>
						</li>
						<li class="site-navigation__item font-gilroy-eb">
							<a class="header__link site-navigation__link" href="#"
								aria-label="Открыть страницу наших контактов">Контакты</a>
						</li>
					</ul>
				</nav>
			</section>
		</header>

		<router-view/>

		<footer :class="['footer', this.$route.name === 'Home' || this.$route.name === 'Catalog' ? 'footer--index' : '']">
			<div class="footer-container footer--flex site-wrapper">
				<div class="footer__address-container">
					<img src="@/assets/img/svg/logo-device-footer.svg" width="163" height="35" alt="Device">
					<address class="footer__address font-sans-300">г. Москва, ул. Строителей, 15</address>
				</div>
				<div class="footer__links footer--flex">
					<nav class="footer__navigation user-navigation footer--flex">
						<ul class="user-navigation-container footer--flex">
							<li class="user-navigation__item-footer">
								<a class="user-navigation__item-link user-navigation__item-link--footer user-navigation__entrance-footer font-sans-300" href="#"
									aria-label="Открыть страницу входа в личный кабинет">Войти</a>
							</li>
							<li class="user-navigation__item-footer">
								<a class="user-navigation__item-link user-navigation__item-link--footer user-navigation__comparison-footer font-sans-300" href="#"
									aria-label="Открыть страницу сравнения товаров">Сравнить</a>
							</li>
							<li class="user-navigation__item-footer">
								<a class="user-navigation__item-link user-navigation__item-link--footer user-navigation__basket-footer font-sans-300" href="#" aria-label="Открыть страницу корзины">Корзина</a>
							</li>
						</ul>
					</nav>
					<div class="footer__navigation-container footer--flex">
						<div class="footer__site-navigation footer--flex">
							<nav class="footer__navigation site-navigation">
								<ul class="footer--flex site-navigation__list">
									<li class="site-navigation__item-footer">
										<a class="site-navigation__link site-navigation__link--white font-gilroy-eb" href="#"
											aria-label="Открыть страницу доставки">Доставка</a>
									</li>
									<li class="site-navigation__item-footer">
										<a class="site-navigation__link site-navigation__link--white font-gilroy-eb" href="#"
											aria-label="Открыть страницу с информацией о гарантии">Гарантия</a>
									</li>
									<li class="site-navigation__item-footer">
										<a class="site-navigation__link site-navigation__link--white font-gilroy-eb" href="#"
											aria-label="Открыть страницу наших контактов">Контакты</a>
									</li>
								</ul>
							</nav>
							<ul class="social-container--footer footer--flex site-navigation__list">
								<li class="footer__social-icon">
									<a href="#" aria-label="Перейти на нашу страницу Facebook">
										<img src="@/assets/img/svg/fb.svg" width="32" height="32" alt="Логотип Facebook">
									</a>
								</li>
								<li class="footer__social-icon">
									<a href="#" aria-label="Перейти на нашу страницу Instagram">
										<img src="@/assets/img/svg/instagram.svg" width="32" height="32" alt="Логотип Instagram">
									</a>
								</li>
								<li class="footer__social-icon">
									<a href="#" aria-label="Перейти на нашу страницу Twitter">
										<img src="@/assets/img/svg/twitter.svg" width="32" height="32" alt="Логотип Twitter">
									</a>
								</li>
							</ul>
						</div>
						<div class="footer__user-navigation footer--flex">
							<a class="user-navigation__phone-footer font-sans-300" href="tel:74954959595"
								aria-label="Позвонить нам по телефону: +74954959595">Тел.: +7 (495) 495-95-95</a>
							<a class="user-navigation__logo-footer" href="https://htmlacademy.ru/intensive/htmlcss"
								aria-label="Перейти на страницу курса HTML Academy">
								<img src="@/assets/img/svg/logo-html.svg" width="27" height="34" alt="Логотип HTML Academy">
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import Preloader from '@/components/preloader.vue'

export default {
	name: 'app',
	data () {
		return {
			transitionName: '',
			loaderShow: true,
			appReady: false
		}
	},
	components: {
		Preloader
	},
	created () {
		this.$router.beforeEach((to, from, next) => {
			document.body.classList.add('hidden-overflow')
			this.loaderShow = true
			setTimeout(next, 1000)
		})

		this.$router.afterEach((to, from) => {
			this.loaderShow = false
			document.body.classList.remove('hidden-overflow')
		})
	},
	mounted () {
		setTimeout(() => {
			this.loaderShow = false
			this.appReady = true
		}, 1000)
	}
}
</script>

<style lang="scss">
	@import 'assets/scss/style.scss';
</style>

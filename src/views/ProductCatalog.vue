<template>
	<main class="main catalog">
		<div class="site-wrapper breadcrumbs catalog__breadcrumbs">
			<h1 class="catalog__title font-gilroy-eb">{{ this.pageName }}</h1>
			<ul class="breadcrumbs__list">
				<li class="breadcrumbs__item">
					<router-link class="breadcrumbs__link font-sans-300" to="/"
						aria-label="Перейти на главную страницу">Главная</router-link>
				</li>
				<li class="breadcrumbs__item">
					<router-link class="breadcrumbs__link font-sans-300" to="/catalog" aria-label="Открыть каталог товаров">Каталог товаров</router-link>
				</li>
				<li class="breadcrumbs__item">
					<p class="breadcrumbs__link font-sans-300">{{ this.pageName }}</p>
				</li>
			</ul>
		</div>

		<div class="catalog__header">
			<div class="site-wrapper catalog__flex">
				<p class="catalog__header-title catalog__header-filter font-gilroy-eb">Фильтр:</p>
				<section class="sorting">
					<h2 class="catalog__header-title sorting__title font-gilroy-eb">Сортировка:</h2>
					<ul class="sorting__list">
						<li class="sorting__item sorting__item--on">
							<a class="sorting__link font-sans-400" aria-label="Отсортировать по цене">По цене</a>
						</li>
						<li class="sorting__item">
							<a class="sorting__link font-sans-400" href="#" aria-label="Отсортировать по типу">По типу</a>
						</li>
						<li class="sorting__item">
							<a class="sorting__link font-sans-400" href="#"
								aria-label="Отсортировать по популярности">По популярности</a>
						</li>
					</ul>
					<div class="sorting__arrow">
						<div class="sorting__arrow-item">
							<a href="#" aria-label="Сортировка по возрастанию">
								<img src="@/assets/img/svg/icon-up-dir.svg" width="11" height="10" alt="Стрелка вверх">
							</a>
						</div>
						<div class="sorting__arrow-item sorting__arrow--on">
							<a href="#" aria-label="Сортировка по убыванию">
								<img src="@/assets/img/svg/icon-down-dir.svg" width="11" height="10" alt="Стрелка вниз">
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
		<div class="catalog__content">
			<div class="site-wrapper catalog__flex">
				<aside class="filter">
					<form class="filter__form" action="https://echo.htmlacademy.ru" method="get">
						<fieldset class="filter__fieldset filter__price price">
							<legend class="filter__legend font-gilroy-eb">Стоимость</legend>
							<div class="price__bar">
								<a href="#" class="price__toggle price__toggle-min"
									aria-label="Ползунок для выбора минимальной цены">
									<img src="@/assets/img/svg/filter-button.svg" width="20" height="23"
										alt="Ползунок минимальной цены">
								</a>
								<a href="#" class="price__toggle price__toggle-max"
									aria-label="Ползунок для выбора максимальной цены">
									<img src="@/assets/img/svg/filter-button.svg" width="20" height="23"
										alt="Ползунок максимальной цены">
								</a>
								<div class="price__bar-scale"></div>
							</div>
							<div class="price__value">
								<label class="price__label price__label-min font-gilroy-l"
									for="filter__price-min">от</label>
								<input class="price__value-input price__value-min font-gilroy-l" type="text"
									id="filter__price-min" name="filter__price-min" value="0" title="Минимальная цена">
								<label class="price__label price__label-max font-gilroy-l"
									for="filter__price-max">до</label>
								<input class="price__value-input price__value-max font-gilroy-l" type="text"
									id="filter__price-max" name="filter__price-max" value="5000"
									title="Максимальная цена">
							</div>
						</fieldset>
						<fieldset class="filter__fieldset color">
							<legend class="filter__legend font-gilroy-eb">Цвет</legend>
							<ul>
								<li class="color__item">
									<input type="checkbox" class="visually-hidden color__input filter__input"
										id="filter__color-black" name="filter__color-black" title="Чёрный цвет" checked>
									<label for="filter__color-black"
										class="font-sans-300 color__label filter__label">Чёрный</label>
								</li>
								<li class="color__item">
									<input type="checkbox" class="visually-hidden color__input filter__input"
										id="filter__color-white" name="filter__color-white" title="Белый цвет">
									<label for="filter__color-white"
										class="font-sans-300 color__label filter__label">Белый</label>
								</li>
								<li class="color__item">
									<input type="checkbox" class="visually-hidden color__input filter__input"
										id="filter__color-blue" name="filter__color-blue" title="Синий цвет" checked>
									<label for="filter__color-blue"
										class="font-sans-300 color__label filter__label">Синий</label>
								</li>
								<li class="color__item">
									<input type="checkbox" class="visually-hidden color__input filter__input"
										id="filter__color-red" name="filter__color-red" title="Красный цвет" checked>
									<label for="filter__color-red"
										class="font-sans-300 color__label filter__label">Красный</label>
								</li>
								<li class="color__item">
									<input type="checkbox" class="visually-hidden color__input filter__input"
										id="filter__color-pink" name="filter__color-pink" title="Розовый цвет">
									<label for="filter__color-pink"
										class="font-sans-300 color__label filter__label">Розовый</label>
								</li>
							</ul>
						</fieldset>
						<fieldset class="filter__fieldset bluetooth">
							<legend class="filter__legend font-gilroy-eb">Bluetooth</legend>
							<ul>
								<li class="bluetooth__item">
									<input type="radio" class="visually-hidden bluetooth__input filter__input"
										id="filter__bluetooth-yes" name="filter__bluetooth" value="yes"
										title="Присутствует bluetooth" checked>
									<label for="filter__bluetooth-yes"
										class="font-sans-300 bluetooth__label filter__label">Есть</label>
								</li>
								<li class="bluetooth__item">
									<input type="radio" class="visually-hidden bluetooth__input filter__input"
										id="filter__bluetooth-no" name="filter__bluetooth" value="no"
										title="Отсутствует bluetooth">
									<label for="filter__bluetooth-no"
										class="font-sans-300 bluetooth__label filter__label">Нет</label>
								</li>
							</ul>
						</fieldset>
						<button class="btn font-gilroy-eb" type="submit">Показать</button>
					</form>
				</aside>
				<section class="catalog__product product">
					<h2 class="visually-hidden">Каталог</h2>
					<div class="product-container">
						<ProductList v-for="product in products" :product="product" :key="product.id"/>
					</div>
					<div class="catalog__pagination pagination">
						<ul class="pagination__list">
							<li>
								<a class="pagination__link pagination__button pagination__button--on font-gilroy-eb">Назад</a>
							</li>
							<li>
								<ul class="pagination__list">
									<li>
										<a class="pagination__link pagination__item-numbering pagination__item-numbering--on font-gilroy-eb">1</a>
									</li>
									<li>
										<a href="#" class="pagination__link pagination__item-numbering font-gilroy-eb"
											aria-label="Открыть вторую страницу с селфи-палками">2</a>
									</li>
									<li>
										<a href="#" class="pagination__link pagination__item-numbering font-gilroy-eb"
											aria-label="Открыть третью страницу с селфи-палками">3</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#" class="pagination__link pagination__button font-gilroy-eb"
									aria-label="Перейти на следующую страницу с селфи-палками">Вперед</a>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	</main>
</template>

<script>
import ProductList from '@/components/product-list'

export default {
	name: 'ProductCatalog',
	components: {
		ProductList
	},
	computed: {
		products () {
			return this.$store.state.catalog[this.$route.name]
		},
		pageName () {
			return 	this.$route.name === 'VirtualReality' ? 'Виртуальная реальность' : '' ||
					this.$route.name === 'Monopods' ? 'Моноподы для селфи' : '' ||
					this.$route.name === 'ActionCameras' ? 'Экшн-камеры' : '' ||
					this.$route.name === 'FitnessTrackers' ? 'Фитнес-браслеты' : '' ||
					this.$route.name === 'Smartwatch' ? 'Умные часы' : '' ||
					this.$route.name === 'Quadcopters' ? 'Квадракоптеры' : ''
		}
	}
}
</script>

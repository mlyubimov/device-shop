<template>
	<main class="main catalog">
		<div class="site-wrapper breadcrumbs catalog__breadcrumbs">
			<h1 class="catalog__title font-gilroy-eb">Каталог товаров</h1>
			<ul class="breadcrumbs__list">
				<li class="breadcrumbs__item">
					<router-link class="breadcrumbs__link font-sans-300" to="/"
						aria-label="Перейти на главную страницу">Главная</router-link>
				</li>
				<li class="breadcrumbs__item">
					<p class="breadcrumbs__link font-sans-300" aria-label="Открыть каталог товаров">Каталог товаров</p>
				</li>
			</ul>
		</div>
		<section class="popularity body__popularity site-wrapper">
			<h2 class="visually-hidden">Популярные категории</h2>
			<ul class="popularity__list">
				<li class="popularity__item">
					<router-link to="/catalog/virtual-reality" aria-label="Открыть страницу с товарами виртуальной реальности">
						<div class="popularity__img-bg"></div>
						<div class="popularity__img-container">
							<img class="popularity__img" src="@/assets/img/svg/vr.svg" width="97" height="55" alt="Иконка VR-очков">
						</div>
						<p class="popularity__item-text font-gilroy-eb">Виртуальная реальность</p>
					</router-link>
				</li>
				<li class="popularity__item popularity__monopods-for-selfie">
					<router-link to="/catalog/monopods" aria-label="Открыть страницу с моноподами для селфи">
						<div class="popularity__img-bg"></div>
						<div class="popularity__img-container">
							<img class="popularity__img" src="@/assets/img/svg/monopod.svg" width="86" height="117" alt="Иконка монопода">
						</div>
						<p class="popularity__item-text popularity__monopods-for-selfie-text font-gilroy-eb">Моноподы для селфи</p>
					</router-link>
				</li>
				<li class="popularity__item">
					<router-link to="/catalog/action-cameras" aria-label="Открыть страницу с экшн-камерами">
						<div class="popularity__img-bg"></div>
						<div class="popularity__img-container">
							<img class="popularity__img" src="@/assets/img/svg/action-camera.svg" width="71" height="87" alt="Иконка экшн-камеры">
						</div>
						<p class="popularity__item-text font-gilroy-eb">Экшн-камеры</p>
					</router-link>
				</li>
				<li class="popularity__item popularity__fitness-bracelet">
					<router-link to="/catalog/fitness-trackers" aria-label="Открыть страницу с фитнес-браслетами">
						<div class="popularity__img-bg"></div>
						<div class="popularity__img-container">
							<img class="popularity__img" src="@/assets/img/svg/fitness-tracker.svg" width="107" height="65" alt="Иконка фитнес-браслета">
						</div>
						<p class="popularity__item-text popularity__fitness-bracelet-text font-gilroy-eb">
							Фитнес-браслеты</p>
					</router-link>
				</li>
				<li class="popularity__item">
					<router-link to="/catalog/smartwatch" aria-label="Открыть страницу с умными часами">
						<div class="popularity__img-bg"></div>
						<div class="popularity__img-container">
							<img class="popularity__img" src="@/assets/img/svg/smartwatch.svg" width="56" height="98" alt="Иконка умных часов">
						</div>
						<p class="popularity__item-text font-gilroy-eb">Умные часы</p>
					</router-link>
				</li>
				<li class="popularity__item">
					<router-link to="/catalog/quadcopters" aria-label="Открыть страницу с квадрокоптерами">
						<div class="popularity__img-bg"></div>
						<div class="popularity__img-container">
							<img class="popularity__img" src="@/assets/img/svg/quadrocopter.svg" width="132" height="69" alt="Иконка квадрокоптера">
						</div>
						<p class="popularity__item-text font-gilroy-eb">Квадрокоптеры</p>
					</router-link>
				</li>
			</ul>
		</section>
	</main>
</template>

<template>
	<main class="main">
		<section class="promo site-wrapper">
			<h2 class="visually-hidden">Промо заказ</h2>
			<input class="visually-hidden promo__input" type="radio" id="selfie-stick" name="switch" checked>
			<input class="visually-hidden promo__input" type="radio" id="fitness-tracker" name="switch">
			<input class="visually-hidden promo__input" type="radio" id="quadrocopter" name="switch">
			<div class="promo__slider-container">
				<label class="slider-radio selfie-stick promo__radio" for="selfie-stick" aria-label="Промо заказ селфи-палки"></label>
				<label class="slider-radio fitness-tracker promo__radio" for="fitness-tracker" aria-label="Промо заказ браслета для фитнеса"></label>
				<label class="slider-radio quadrocopter promo__radio promo__radio--last" for="quadrocopter" aria-label="Промо заказ квадракоптера"></label>
			</div>
			<ul class="main__promo">
				<li class="promo__item promo__selfie-stick">
					<img class="promo__img promo__img-selfie-stick" src="@/assets/img/monopods/selfie-stick.png" width="384" height="486"
						alt="Изображение селфи-палка">
					<div class="one promo__content">
						<h3 class="promo__content-title promo__title-selfie-stick font-gilroy-eb">Делай селфи, как Бен Стиллер!</h3>
						<p class="promo__content-text font-sans-300">Самая длинная палка для селфи доступна в нашем магазине.</p>
						<p class="promo__content-text font-sans-300">Восемь (Восемь, Карл!) метров длиной и весом всего 5 килограмм.</p>
						<div class="promo__link-container">
							<router-link class="btn promo__btn font-gilroy-eb" to="/catalog/monopods/ben-stiller" aria-label="Открыть страницу с подробностями о данной селфи-палке">Подробнее</router-link>
						</div>
						<table class="promo__table">
							<thead>
								<tr>
									<td class="promo__table-item promo__table-head-item font-gilroy-l">8,5 м</td>
									<td class="promo__table-item promo__table-head-item font-gilroy-l">5 кг</td>
									<td class="promo__table-item promo__table-head-item promo__table-item--last font-gilroy-l">Карбон</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="promo__table-item promo__table-body-item font-gilroy-l">Длина палки</td>
									<td class="promo__table-item promo__table-body-item font-gilroy-l">Вес палки</td>
									<td class="promo__table-item promo__table-body-item promo__table-item--last font-gilroy-l">Материал</td>
								</tr>
							</tbody>
						</table>
					</div>
				</li>
				<li class="promo__item promo__fitness-tracker">
					<img class="promo__img promo__img-fitness-tracker" src="@/assets/img/fitness-trackers/fitness-tracker.png" width="345"
						height="485" alt="Изображение фитнес-браслета">
					<div class="two promo__content">
						<h3 class="promo__content-title promo__title-fitness-tracker font-gilroy-eb">Худеем правильно!
						</h3>
						<p class="promo__content-text font-sans-300">Мотивирующие фитнес-браслеты помогут найти в себе силы не пропускать занятия и соблюдать диету.</p>
						<div class="promo__link-container">
							<router-link class="btn promo__btn font-gilroy-eb" to="/catalog/fitness-trackers/fitbit-charge" aria-label="Открыть страницу с подробностями о данном фитнес-браслете">Подробнее</router-link>
						</div>
						<table class="promo__table">
							<thead>
								<tr>
									<td class="promo__table-item promo__table-head-item promo__table-item--last font-gilroy-l">48 часов</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="promo__table-item promo__table-body-item promo__table-item--last font-gilroy-l">Без подзарядки</td>
								</tr>
							</tbody>
						</table>
					</div>
				</li>
				<li class="promo__item promo__quadrocopter">
					<img class="promo__img promo__img-quadrocopter" src="@/assets/img/quadcopters/DJI/Mavic-2-Pro/49166f2a3acea9a4985b010daf4a7e52.png" width="638" height="440"
						alt="Изображение квадрокоптера">
					<div class="three promo__content">
						<h3 class="promo__content-title font-gilroy-eb">Порхает как бабочка, жалит как пчела!</h3>
						<p class="promo__content-text font-sans-300">Этот обычный, на первый взгляд, квадрокоптер оснащен мощным лазером, замаскированным под стандартную камеру.</p>
						<div class="promo__link-container">
							<router-link class="btn promo__btn font-gilroy-eb" to="/catalog/quadcopters/dji-mavic-2-pro" aria-label="Открыть страницу с подробностями о данном квадрокоптере">Подробнее</router-link>
						</div>
						<table class="promo__table table__quadrocopter">
							<thead class="promo__table-head">
								<tr>
									<td class="promo__table-item promo__table-head-item font-gilroy-l">800 м</td>
									<td class="promo__table-item promo__table-head-item promo__table-item--last font-gilroy-l">50 м</td>
								</tr>
							</thead>
							<tbody class="promo__table-body">
								<tr>
									<td class="promo__table-item promo__table-body-item font-gilroy-l">Дальность полета
									</td>
									<td class="promo__table-item promo__table-body-item promo__table-item--last font-gilroy-l">Радиус поражения</td>
								</tr>
							</tbody>
						</table>
					</div>
				</li>
			</ul>
		</section>
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
						<p class="popularity__item-text popularity__monopods-for-selfie-text font-gilroy-eb">Моноподы
							для селфи</p>
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
		<section class="services body__services">
			<h2 class="visually-hidden">Услуги</h2>
			<div class="services__container site-wrapper">
				<input class="visually-hidden services__input" id="delivery" type="radio" name="services-switch"
					checked>
				<input class="visually-hidden services__input" id="warranty" type="radio" name="services-switch">
				<input class="visually-hidden services__input" id="credit" type="radio" name="services-switch">
				<div class="label-container">
					<label class="btn services__btn font-gilroy-eb label__delivery" for="delivery"
						aria-label="Показать информацию о доставке">Доставка</label>
					<label class="btn services__btn font-gilroy-eb label__warranty" for="warranty"
						aria-label="Показать информацию о гарантии">Гарантия</label>
					<label class="btn services__btn font-gilroy-eb label__credit" for="credit"
						aria-label="Показать информацию о кредите">Кредит</label>
				</div>
				<div class="services__info">
					<ul>
						<li class="services__item services__delivery">
							<h3 class="services__title font-gilroy-eb">Доставка</h3>
							<p class="services__text services__text--first services__delivery-text font-sans-300">Мы с
								удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы
								неплохо заработаем, поднимая его на ваш этаж.</p>
							<img class="services__img" src="@/assets/img/svg/delivery.svg" width="136" height="164"
								alt="Иконка доставщика">
						</li>
						<li class="services__item services__warranty">
							<h3 class="services__title font-gilroy-eb">Гарантия</h3>
							<p class="services__text services__text--first services__warranty-text font-sans-300">Если
								из-за возгорания купленного у нас
								товара у вас сгорит дом — не переживайте, мы выдадим вам новый.</p>
							<p class="services__text services__warranty-text font-sans-300">Товар, не дом, конечно же.
							</p>
							<img class="services__img" src="@/assets/img/svg/warranty.svg" width="171" height="195"
								alt="Иконка гарантии">
						</li>
						<li class="services__item services__credit">
							<h3 class="services__title font-gilroy-eb">Кредит</h3>
							<p class="services__text services__text--first services__credit-text font-sans-300">Залезть
								в долговую яму стало проще! Кредитные консультанты подберут для вас наиболее выгодные
								условия кредита. Выгодные для нашего банка, разумеется.</p>
							<img class="services__img" src="@/assets/img/svg/credit.svg" width="156" height="188"
								alt="Иконка заёмщика">
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="partners site-wrapper">
			<h2 class="visually-hidden">Наши партнёры</h2>
			<ul class="partners__list">
				<li class="partners__item">
					<a href="https://www.dji.com" class="partners__link" aria-label="Открыть сайт нашего партнёра DJI">
						<img class="partners__img" src="@/assets/img/dji.png" width="260" height="100" alt="Логотип DJI">
					</a>
				</li>
				<li class="partners__item">
					<a href="http://www.sp-gadgets.com/" class="partners__link"
						aria-label="Открыть сайт нашего партнёра SP Gadgets">
						<img class="partners__img" src="@/assets/img/spgadgets.png" width="260" height="100"
							alt="Логотип SP Gadgets">
					</a>
				</li>
				<li class="partners__item">
					<a href="https://gopro.ru/" class="partners__link" aria-label="Открыть сайт нашего партнёра GoPro">
						<img class="partners__img" src="@/assets/img/gopro.png" width="260" height="100" alt="Логотип GoPro">
					</a>
				</li>
				<li class="partners__item">
					<a href="https://www.vive.com/" class="partners__link"
						aria-label="Открыть сайт нашего партнёра HTC Vive">
						<img class="partners__img" src="@/assets/img/vive.png" width="260" height="100" alt="Логотип HTC Vive">
					</a>
				</li>
			</ul>
		</section>
		<div class="about-contacts-container about-contacts--index site-wrapper">
			<section class="about-contacts__section about-us">
				<h2 class="about-contacts__title font-gilroy-eb">О нас</h2>
				<p class="about-contacts__text font-sans-300">Огромный выбор гаджетов не оставит равнодушным гика,
					который есть в каждом из нас.</p>
				<p class="about-contacts__text font-sans-300">Мы можем доставить ваш товар в самые отдаленные точки
					России! DEVICE работает со многими транспортными компаниями:</p>
				<ul class="about-us__list">
					<li class="about-us__item font-gilroy-eb">Деловые линии</li>
					<li class="about-us__item font-gilroy-eb">Автотрейдинг</li>
					<li class="about-us__item font-gilroy-eb">ЖелДорЭкспедиция</li>
				</ul>
				<a class="btn about-contacts__btn font-gilroy-eb" href="#"
					aria-label="Открыть страницу «О нас»">Подробнее о нас</a>
			</section>
			<section class="about-contacts__section contacts" @keyup.esc="closePopup">
				<h2 class="about-contacts__title font-gilroy-eb">Контакты</h2>
				<p class="about-contacts__text font-sans-300">Вы можете забрать товар сами, заехав в наш офис. Заодно, вы сможете проверить работоспособность покупки. Всякое бывает.</p>
				<a @click.prevent="openMap" class="link-map contacts__map" href="popup__map.html" aria-label="Открыть карту">
					<img class="link-map__img" src="@/assets/img/map.png" width="560" height="222" alt="Карта нашего местоположения">
				</a>
				<section :class="['popup about-contacts__popup popup__map', this.mapShow === false ? 'popup--none' : '']">
					<div class="popup__overlay" @click="closeMap"></div>
					<h2 class="visually-hidden">Расположение нашего офиса</h2>
					<div class="popup-container">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.0779368446533!2d37.52772972354553!3d55.68763275037631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54cf65f5c8955%3A0x694710ccd55501e!2z0YPQuy4g0KHRgtGA0L7QuNGC0LXQu9C10LksIDE1LCDQnNC-0YHQutCy0LAsIDExOTMxMQ!5e0!3m2!1sru!2sru!4v1591963454273!5m2!1sru!2sru"
							width="960" height="550" style="border:0;" allowfullscreen="" aria-hidden="false"
							tabindex="0"></iframe>
						<button @click="closeMap" class="popup__close" type="button">
							<img src="@/assets/img/svg/modal-close.svg" width="55" height="55"
								alt="Иконка закрытия модального окна" aria-label="Закрыть карту">
						</button>
					</div>
				</section>
				<a @click.prevent="openWriteUs" class="btn about-contacts__btn contacts__btn font-gilroy-eb contacts__link"
					href="popup__write-us.html" aria-label="Открыть форму обратной связи">Напишите нам</a>
				<section :class="['popup about-contacts__popup popup__write-us', this.writeUsShow === false ? 'popup--none' : '']">
					<div class="popup__overlay" @click="closeWriteUs"></div>
					<h2 class="visually-hidden">Форма обратной связи</h2>
					<form class="write-us-form popup-container" action="https://echo.htmlacademy.ru" method="post">
						<div class="write-us__user-info-container">
							<div class="write-us__input-container">
								<label class="font-gilroy-eb" for="write-us__username">Ваше имя:</label>
								<input id="write-us__username" class="write-us__username write-us__input font-sans-300"
									name="username" type="text" placeholder="Имя Фамилия"
									title="Введите ваши Имя и Фамилию" autocomplete="off" required>
							</div>
							<div class="write-us__input-container">
								<label class="font-gilroy-eb" for="write-us__email">Ваш e-mail:</label>
								<input id="write-us__email" class="write-us__email write-us__input font-sans-300"
									name="email" type="email" placeholder="email@example.com"
									title="Введите ваш e-mail адрес" required>
							</div>
						</div>
						<label class="font-gilroy-eb" for="write-us__textarea">Текст письма:</label>
						<textarea id="write-us__textarea" class="write-us__textarea font-sans-300" name="textarea"
							placeholder="В свободной форме" title="Введите ваше сообщение в свободной форме"
							autocomplete="off" required></textarea>
						<button class="btn write-us__btn font-gilroy-eb" type="submit">Отправить</button>
						<button @click="closeWriteUs" class="popup__close" type="button">
							<img src="@/assets/img/svg/modal-close.svg" width="55" height="55"
								alt="Иконка закрытия модального окна" aria-label="Закрыть форму обратной связи">
						</button>
					</form>
				</section>
			</section>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Home',
	data () {
		return {
			mapShow: false,
			writeUsShow: false
		}
	},

	methods: {
		openMap () {
			document.body.classList.add('hidden-overflow')
			this.mapShow = true
		},

		closeMap () {
			document.body.classList.remove('hidden-overflow')
			this.mapShow = false
		},

		openWriteUs () {
			document.body.classList.add('hidden-overflow')
			this.writeUsShow = true
		},

		closeWriteUs () {
			document.body.classList.remove('hidden-overflow')
			this.writeUsShow = false
		},

		closePopup () {
			this.closeMap()
			this.closeWriteUs()
		}
	}
}

</script>

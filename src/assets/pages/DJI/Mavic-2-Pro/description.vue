<template>
	<div class="information-container" v-show="this.showInfo === 'description'">
		<h2 class="information__title font-gilroy-eb">Описание</h2>
		<div class="information__item">
			<img class="information__cover cover" src="./description/cover@2x.jpg">
			<div class="cover__text-container">
				<h3 class="cover__title font-gilroy-eb">DJI Mavic 2 Pro. Смотри шире.</h3>
				<p class="cover__text font-sans-400">Инженерное чудо, идеальное для аэросъемки. Дрон, обладающий всеми <br>лучшими технологиями DJI, дрон, который преобразит мир аэросъемки.<br>Эта мечта исполнилась.</p>
			</div>
		</div>
		<div class="information__item info-block info-block--remove-margin">
			<div class="info-block__item">
				<img class="info-block__img" src="./description/mavic2_pro_01@3x.jpg">
				<h3 class="info-block__title font-gilroy-eb">Mavic 2 Pro с камерой Hasselblad</h3>
				<p class="info-block__text font-sans-300">Изготовленные в Швеции высококвалифицированными сотрудниками камеры Hasselblad известны эргономичным дизайном и превосходным качеством изображений. Mavic 2 Pro оснащен совершенно новой камерой Hasselblad L1D-20c. Камера L1D-20c работает по уникальной технологии Hasselblad Natural Colour Solution (HNCS)5, позволяющей пользователям делать великолепные снимки с воздуха с разрешением в 20 мегапикселей и потрясающими цветами.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__img" src="./description/mavic2_pro_02@3x.jpg">
				<h3 class="info-block__title font-gilroy-eb">Матрица CMOS 1″</h3>
				<p class="info-block__text font-sans-300">Зона активной работы новой 1-дюймовой матрицы CMOS в четыре раза превышает показатели Mavic Pro. Большая матрица обеспечивает более высокое качество изображения при слабом освещении за счет более широкого диапазона ISO. Максимальный показатель ISO поднялся с 3200 до 12800.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__img" src="./description/mavic2_pro_03@3x.jpg">
				<h3 class="info-block__title font-gilroy-eb">Цветовой профиль Dlog-M 10 бит</h3>
				<p class="info-block__text font-sans-300">Mavic 2 Pro поддерживает цветовой профиль Dlog-M 10 бит с более широким динамическим диапазоном, дающим больше возможностей для цветокоррекции. Система способна записывать более 1 миллиарда цветов (в сравнении с 16 миллионами цветов, используемых в 8-битных технологиях цветового кодирования) и сохранять больше деталей при изменении яркости и теней. Теперь вы сможете запечатлеть даже слабо различимые оттенки заката или восхода солнца и редактировать снимки с большей свободой.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__img" src="./description/mavic2_pro_04@3x.jpg">
				<h3 class="info-block__title font-gilroy-eb">Видео HDR</h3>
				<p class="info-block__text font-sans-300">Благодаря поддержке видео 4K HDR 10 бит, Mavic 2 Pro можно подсоединить к совместимому с HLG 4K ТВ и просматривать запись в полном цветовом спектре: с увеличенной яркостью и контрастностью, которые делают HDR видео такими привлекательными.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__img" src="./description/mavic2_pro_05@3x.jpg">
				<h3 class="info-block__title font-gilroy-eb">Настраиваемая диафрагма</h3>
				<p class="info-block__text font-sans-300">Настраиваемая диафрагма f/2.8-f/11 обеспечивает превосходное качество изображения как при слабом, так и при хорошем освещении. Для съемки при слабом освещении, следует установить диафрагму на f/2.8, чтобы собрать как можно больше света и получить яркие и четкие фотографии. Для съемки при хорошем освещении, следует установить диафрагму на f/11, чтобы уменьшить выдержку и получить видео наивысшего качества.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__img" src="./description/mavic2_pro_06@3x.jpg">
				<h3 class="info-block__title font-gilroy-eb">«Я был восхищен снимками, сделанными на Mavic 2 Pro. Невероятное качество камер Hasselblad впечатляет, будь то студийная фотоаппаратура среднего формата или компактный дрон Mavic»</h3>
				<p class="info-block__text font-sans-300">Бенджамин Эверетт — путешественник и фотограф, очарованный тонкой гранью между восприятием и реальностью пейзажей. Он победил в конкурсе Hasselblad Masters Award в категории «Пейзаж».</p>
			</div>
		</div>
		<!-- <iframe class="information__item video" src="https://www.youtube.com/embed/JHq6xuPmq_U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
		<div class="information__item info-block info-block--remove-margin">
			<div class="info-block__item">
				<video class="info-block__img" style="height: 225.75px; background-color: var(--grey)" muted loop playsinline autoplay>
					<source src="./description/mavic2_01.mp4" type="video/mp4">
				</video>
				<h3 class="info-block__title font-gilroy-eb">Гиперлапс</h3>
				<p class="info-block__text font-sans-300">Обработка съемочного материала больше не будет отнимать столько времени. При помощи технологии гиперлапса (Hyperlapse), летательный аппарат способен автоматически стабилизировать изображение во время съемки, что позволяет создавать таймлапсы, не отличающиеся от профессиональных, и мгновенно загружать их в социальные сети.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__img" src="./description/mavic2_02@3x.jpg">
				<h3 class="info-block__title font-gilroy-eb">Улучшенный режим HDR для фото</h3>
				<p class="info-block__text font-sans-300">Mavic 2 поддерживает улучшенный режим HDR — технологию, комбинирующую несколько кадров для получения четкой фотографии с широким динамическим диапазоном без артефактов.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__img" src="./description/mavic2_03@3x.jpg">
				<h3 class="info-block__title font-gilroy-eb">Съемка при слабом освещении</h3>
				<p class="info-block__text font-sans-300">Получайте яркие изображения при помощи функции HyperLight, позволяющей оптимизировать снимки, сделанные при слабом освещении, и снизить уровень шума.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__img" src="./description/mavic2_04@3x.jpg">
				<h3 class="info-block__title font-gilroy-eb">Кодек H.265 для высокого качества изображения</h3>
				<p class="info-block__text font-sans-300">Модель способна записывать видео формата 4K с кодеком H.2658 при более высокой скорости передачи данных. Видео с кодеком H.265/HEVC содержат на 50% больше информации, чем с кодеком H.264/AVC, что создает видео с более высокой детализацией.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__img" src="./description/mavic2_05@3x.jpg">
				<h3 class="info-block__title font-gilroy-eb">Великолепное качество трансляции</h3>
				<p class="info-block__text font-sans-300">Новая технология OcuSync 2.0 позволяет осуществлять передачу видео в 1080p на расстояние до 8 километров. Отснятый материал в FHD можно сразу загружать в социальные сети из кэша. Снимки, полученные во время полета, автоматически сохраняются на мобильное устройство без необходимости скачивать их с дрона вручную.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__img" src="./description/mavic2_06@3x.jpg">
				<h3 class="info-block__title font-gilroy-eb">Быстрая загрузка и низкий уровень задержки сигнала</h3>
				<p class="info-block__text font-sans-300">Теоретическая скорость скачивания OcuSync 2.0 составляет до 40 Мбит/с, задержка сигнала — всего 120 мс. Технология способна обеспечивать бесперебойную трансляцию видео и легкость в управлении устройством.</p>
			</div>
		</div>
		<!-- <iframe class="information__item video" width="1100" height="649" src="https://www.youtube.com/embed/7SembcsxrQw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
		<div class="information__item info-block info-block--remove-margin">
			<div class="info-block__item">
				<img class="info-block__svg" src="./description/speed.svg">
				<h3 class="info-block__title font-gilroy-eb">Быстрее. Макс. скорость: 72 км/ч</h3>
				<p class="info-block__text font-sans-300">Платформа была усовершенствована с целью повышения уровня надежности и аэродинамики. Сопротивление корпуса Mavic 2 на 19% меньше сопротивления Mavic Pro при полете на полной скорости.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__svg" src="./description/battery.svg">
				<h3 class="info-block__title font-gilroy-eb">Дольше. До 31 минуты в полете</h3>
				<p class="info-block__text font-sans-300">Больше полетного времени</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__svg" src="./description/ear.svg">
				<h3 class="info-block__title font-gilroy-eb">Тише. Низкий уровень шума</h3>
				<p class="info-block__text font-sans-300">Регуляторы хода синусоидального привода и малошумные пропеллеры делают полет тихим, так что вы не побеспокоите окружающих.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__svg" src="./description/sensors.svg">
				<h3 class="info-block__title font-gilroy-eb">Обнаружение препятствий в нескольких направлениях</h3>
				<p class="info-block__text font-sans-300">Система FlightAutonomy теперь имеет функцию обнаружения препятствий в нескольких направлениях. Впервые на дроне DJI датчики обнаружения препятствий располагаются по всем сторонам летательного аппарата для обеспечения безопасности во время полета.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__svg" src="./description/activetrack.svg">
				<h3 class="info-block__title font-gilroy-eb">ActiveTrack 2.0</h3>
				<p class="info-block__text font-sans-300">Mavic 2 использует трехмерные карты окружающей среды, полученные при помощи основной камеры и передних видеодатчиков, что обеспечивает более высокий уровень распознавания и точности.</p>
			</div>
			<div class="info-block__item">
				<img class="info-block__svg" src="./description/panorama.svg">
				<h3 class="info-block__title font-gilroy-eb">Панорамы</h3>
				<p class="info-block__text font-sans-300">Mavic 2 поддерживает четыре режима панорамной съемки: сферическая, 180°, горизонтальная и вертикальная.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['product', 'showInfo']
}
</script>

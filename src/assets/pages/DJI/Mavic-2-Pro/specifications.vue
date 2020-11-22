<template>
	<div class="information-container" v-show="this.showInfo === 'specifications'">
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
</template>

<script>
export default {
	props: ['product', 'showInfo']
}
</script>

$(function(){
	function toggleRow(el) {
		if(el.hasClass('table__details')) {
			displayRow = el.css('display');
			if(displayRow === 'none'){
				el.css({"display":"table-row"});
				setTimeout(function(){
					el.find('.load').remove();
				},200);
			}
			else{
				el.css({"display":"none"});
			}
		}
	}
	$(document).ready(function(e) {

		$(document).on('click', '.table__row', function(){
			let thisRow = $(this);
			let nextRow = thisRow.next();
			nextRow.find('td').append('<div class="load"><img src="img/load.gif" alt=""></div>')
			if(thisRow.index() === 1){
				for(let i = 0; i < 4 && nextRow !== null; i++) {
					toggleRow(nextRow);
					nextRow = nextRow.next();
				}
			}
			else{
				toggleRow(nextRow);
			}
		});
		/* Chart */
		$('.chart').each(function(ind){
			
			let dataSeries = $(this).attr('data-series');
			let dataSeriesArr = dataSeries.split(', ');
			let indChart = '-'+ind;
			if(ind == 0){
				indChart = '';
			}
			$('#chart'+indChart).highcharts({
				title: {
					text: ''
				},
				yAxis: {
					title: {
						text: ''
					}
				},
				series: [{
					data: [
						parseInt(dataSeriesArr[0]), 
						parseInt(dataSeriesArr[1]), 
						parseInt(dataSeriesArr[2]), 
						parseInt(dataSeriesArr[3]), 
						parseInt(dataSeriesArr[4]), 
						parseInt(dataSeriesArr[5]), 
						parseInt(dataSeriesArr[6])
					],
					color: '#008000',
				}],
				
			});
		});
		

	});
});

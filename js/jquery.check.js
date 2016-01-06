//https://github.com/xuqingkai/jquery.check.js
; (function ($) {
	$.fn.extend({
		check: function (selector,callback) {
			var index = 0;
			var checkbox = $(selector).each(function(i){
				if($(this).attr('data-check-index') == undefined){
					$(this).click(function(e){
						if(e.shiftKey == 1){
							var currentIndex = $(this).attr('data-check-index');
							var min = Math.min(currentIndex,index);
							var max = Math.max(currentIndex,index);
							$(selector).prop('checked',false).each(function(j){
								if(j>=min && j<=max){ $(this).prop('checked',true); }
							});
						}else{
							index = $(this).attr('data-check-index');
						}
					});
				}
				$(this).attr('data-check-index', i);
			});
			return $(this).each(function () {
				var check = $(this).attr('data-check');
				$(this).click(function (e) {
					if (check == 'yes') { checkbox.prop('checked', true); }
					if (check == 'no') { checkbox.prop('checked', false); }
					if (check == 'reverse') { checkbox.prop('checked', function () { return !$(this).prop('checked'); }); }
					if (check == '' || check == 'auto') { 
						if(($(this).attr('type')+'').toLowerCase()=='checkbox'){
							checkbox.prop('checked', $(this).prop('checked')); 
						}else{
							var checked = $(this).attr('data-check-checked');
							checkbox.prop('checked', checked != 'checked'); 
							$(this).attr('data-check-checked',checked == 'checked' ? '' : 'checked');
						}
					}else{
						e.preventDefault();
					}
					if(callback){ callback.call(this, checkbox); }
				});
			});
		}
	});
})(window.jQuery);

//https://github.com/xuqingkai/jquery.check.js
; (function ($) {
	$.fn.extend({
		check: function () {
			return $(this).each(function () {
				$(this).click(function () {
					var name = $(this).val() || $(this).attr('data-value');
					var checkbox = $(this).parents('form').find('input:checkbox[name=' + name + ']');

					check = $(this).attr('data-checkYes');
					if (check) { checkbox.prop('checked', true); }

					check = $(this).attr('data-checkNo');
					if (check) { checkbox.prop('checked', false); }

					check = $(this).attr('data-checkRe');
					if (check) { checkbox.prop('checked', function () { return !$(this).prop('checked'); }); }

					var check = $(this).attr('data-check');
					if (checkType == '' || checkType == 'auto') { checkbox.prop('checked', $(this).prop('checked')); }
					if (checkType == '1' || checkType == 'yes' || checkType == 'all') { checkbox.prop('checked', true); }
					if (checkType == '0' || checkType == 'no') { checkbox.prop('checked', false); }
					if (checkType == '-1' || checkType == 're') { checkbox.prop('checked', function () { return !$(this).prop('checked'); }); }
				});
			});
		}
	});
})(window.jQuery);

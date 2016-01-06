# 这是个什么玩意？
这是一个复选框选择插件，基于jQuery，方便开发者在管理后台的信息列表页实现自动选、全选、反选、全不选、shift选等功能。
# 到底怎么使用
很简单，第一步，引入jQuery类库，第二步引入本插件，第三步，指定实现按钮（+回调函数）
#给我个示例代码看看
  <script src="js/jquery-1.11.3.min.js"></script>
	<script src="js/jquery.check.js"></script>
	<script type="text/javascript">
	;$(function(){
		$('[data-check]').check('input[name=id]');
	});
  </script>

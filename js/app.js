// Wait until the DO M is ready and then continue.
$(function() {
	let cats = [];
	cats.push(new Cat("CatA","https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426"));
	cats.push(new Cat("CatB","https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496"));
	cats.push(new Cat("CatC","https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454"));

	cats.forEach(function(cat, index){
		let optionElement = `<option value="${index}">${cat.name}</option>`;
		$("#catList").append(optionElement);
	});

	$("#catList").on('change', () => {
		resetUI();
		let c = cats[parseInt($("#catList option:selected").val())];
		$('.catName').html(c.name);
		$('.counterSpan').html(c.clickCount);
		$("#catImage").attr("src",c.url);
		$("#catImage").on('click', (function(m) {
			return function(){
				m.imClicked();
				$('.counterSpan').html(m.clickCount);
			};
		})(c));
	});

	// cats.forEach(function(cat){
	// 	let newContent = `<div><div class="counterDiv">Number of clicks on the cat image : <span class="counterSpan${cat.name}">0</span></div>
	// 				<img id="catImage${cat.name}" class="clickableCat" alt="cat ${cat.name}" src="${cat.url}"></img>
	// 			</div>`;
	// 	$('.imageHolder').append(newContent);
	// 	$(`#catImage${cat.name}`).on('click', () => {
	// 		cat.imClicked();
	// 		$(`.counterSpan${cat.name}`).html(cat.clickCount);
	// 	});
	// });

	// $("#cataImage").on('click', () => {
	// 	cat_a.imClicked();
	// 	$('.counteraSpan').html(cat_a.clickCount);
	// });

	// $("#catbImage").on('click', () => {
	// 	cat_b.imClicked();
	// 	$('.counterbSpan').html(cat_b.clickCount);
	// });
}());

function resetUI(){
	$("#catImage").off('click');
	$('.catName').html('');
	$('.counterSpan').html('0');
	$("#catImage").attr("src","");
}
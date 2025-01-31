(function() {
	let style = `<style>
	#app .page > .root .project > .name {
		display: inline !important;
	}
	#app .page > .root .project > .name > .content {
		display: inline !important;
	}
	</style>`;
	
	document.head.insertAdjacentHTML("beforeend", style);
})();
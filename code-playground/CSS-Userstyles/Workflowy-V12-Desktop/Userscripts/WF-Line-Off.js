(function() {
	let style = `<style>
	#app .page > .root .project > .name {
		display: block !important;
	}
	#app .page > .root .project > .name > .content {
		display: block !important;
	}
	</style>`;
	
	document.head.insertAdjacentHTML("beforeend", style);
})();
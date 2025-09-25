(function() {
	let style = `<style>
	* {
		border: 10px solid red !important;
	}
	.rm-list .reminder-item .notes {
		max-height: 20rem !important;
	}
	.rm-list .reminder-item .notes .tt-input-field {
		-webkit-line-clamp: 20 !important;
	}
</style>`;
	document.head.insertAdjacentHTML("beforeend", style);
})();
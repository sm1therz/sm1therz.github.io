(function() {
  let style = `<style>
  
	
	::-webkit-scrollbar {
  height: 30px;
  width: 30px;
}

.scrollbar-gutter-stable {
	--scrollbar-width:30px;
}

.scrollbar-gutter-stable::-webkit-scrollbar-track{
	
}
.scrollbar-gutter-stable::-webkit-scrollbar-thumb{
	
}
.scrollbar-gutter-stable::-webkit-scrollbar{
	
}

::-webkit-scrollbar-track {
  background-color: red;
}
::-webkit-scrollbar-thumb {
  border-radius: 9999px;
  border-width: 3px;
  border-style: solid;
  border-color: blue;
  background-color: orange;
  background-clip: unset;
}
::-webkit-scrollbar {
  height: var(--scrollbar-width);
  width: var(--scrollbar-width);
}

</style>`;

  document.head.insertAdjacentHTML("beforeend", style);
})();


// This does not work. no keyboard shortcuts work with us. But it DOES silence the "shortcut not recognized" beep.
// https://www.perplexity.ai/search/how-do-i-add-keyboard-shortcut-VjflhWW7STy.CgMaJaSNsA#:~:text=We-,prevent%20default%20browser%20shortcuts,-to%20avoid%20conflicts

document.addEventListener('keydown', function(event) {
  // Prevent default browser shortcuts
  if (event.ctrlKey || event.metaKey) {
	event.preventDefault();
  }

  // Define shortcuts
  switch (true) {
	case (event.key === 'S' && (event.ctrlKey || event.metaKey)):
	  console.log('Ctrl/Cmd + S pressed');
	  // Add your save action here
	  break;

	case (event.key === 'F' && (event.ctrlKey || event.metaKey)):
	  console.log('Ctrl/Cmd + F pressed');
	  // Add your find action here
	  break;

	case (event.key === 'P' && (event.ctrlKey || event.metaKey)):
	  console.log('Ctrl/Cmd + P pressed');
	  // Add your print action here
	  break;

	// Add more shortcuts as needed
  }
});


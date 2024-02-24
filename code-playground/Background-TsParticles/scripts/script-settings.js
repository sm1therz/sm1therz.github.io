tsParticles.load("tsparticles", {
	autoPlay: true,
	background: {
		color: { value: "#0D2A7F" },
		image: "",
		position: "50% 50%",
		repeat: "no-repeat",
		size: "20%",
		opacity: 1
	},
	backgroundMask: {
		composite: "destination-out",
		cover: { color: { value: "#fff" }, opacity: 1 },
		enable: false
	},
	fullScreen: { enable: true, zIndex: 1 },
	detectRetina: true,
	duration: 0,
	fpsLimit: 120,
	interactivity: {
		detectsOn: "window",
		events: {
			onClick: { enable: false, mode: "repulse" },
			onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
			onHover: {
				enable: true,
				mode: "bubble",
				parallax: { enable: false, force: 2, smooth: 10 }
			},
			resize: true
		},
		modes: {
			attract: {
				distance: 200,
				duration: 0.4,
				easing: "ease-out-quad",
				factor: 1,
				maxSpeed: 50,
				speed: 1
			},
			bounce: { distance: 200 },
			bubble: {
				distance: 250,
				duration: 2,
				mix: false,
				opacity: 0,
				size: 0,
				divs: { distance: 200, duration: 0.4, mix: false, selectors: [] }
			},
			connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
			grab: { distance: 400, links: { blink: false, consent: false, opacity: 1 } },
			light: {
				area: {
					gradient: { start: { value: "#ffffff" }, stop: { value: "#000000" } },
					radius: 1000
				},
				shadow: { color: { value: "#000000" }, length: 2000 }
			},
			push: { default: true, groups: [], quantity: 4 },
			remove: { quantity: 2 },
			repulse: {
				distance: 400,
				duration: 0.4,
				factor: 100,
				speed: 1,
				maxSpeed: 50,
				easing: "ease-out-quad",
				divs: {
					distance: 200,
					duration: 0.4,
					factor: 100,
					speed: 1,
					maxSpeed: 50,
					easing: "ease-out-quad",
					selectors: []
				}
			},
			slow: { factor: 3, radius: 200 },
			trail: { delay: 1, pauseOnStop: false, quantity: 1 }
		}
	},
	manualParticles: [],
	motion: { disable: false, reduce: { factor: 4, value: true } },
	particles: {
		bounce: {
			horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
			vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 }
		},
		collisions: {
			bounce: {
				horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
				vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 }
			},
			enable: false,
			mode: "bounce",
			overlap: { enable: true, retries: 0 }
		},
		color: {
			value: "hsla(238, 79%, 65%, 1.0)",
			animation: {
				h: { count: 0, enable: false, offset: 0, speed: 1, decay: 0, sync: false },
				s: { count: 0, enable: false, offset: 0, speed: 1, decay: 0, sync: false },
				l: { count: 0, enable: false, offset: 0, speed: 1, decay: 0, sync: false }
			}
		},
		destroy: {
			mode: "none",
			split: {
				count: 1,
				factor: { random: { enable: false, minimumValue: 0 }, value: 3 },
				rate: {
					random: { enable: false, minimumValue: 0 },
					value: { min: 4, max: 9 }
				},
				sizeOffset: false
			}
		},
		gradient: [],
		groups: {},
		links: {
			blink: false,
			color: { value: "#767aef" },
			consent: false,
			distance: 150,
			enable: false,
			frequency: 1,
			opacity: 0.4,
			shadow: { blur: 5, color: { value: "#000" }, enable: false },
			triangles: { enable: false, frequency: 1 },
			width: 1,
			warp: false
		},
		move: {
			angle: { offset: 20, value: 0 },
			attract: { distance: 1200, enable: false, rotate: { x: 1600, y: 1600 } },
			center: { x: 150, y: 150, radius: 100 },
			decay: 0,
			distance: {},
			direction: "none",
			drift: 0,
			enable: true,
			gravity: { acceleration: 9.81, enable: false, inverse: false, maxSpeed: 30 },
			path: {
				clamp: true,
				delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
				enable: false,
				options: {}
			},
			outModes: {
				default: "out",
				bottom: "out",
				left: "out",
				right: "out",
				top: "out"
			},
			random: true,
			size: true,
			speed: 0.3,
			spin: { acceleration: 0, enable: false },
			straight: false,
			trail: { enable: false, length: 10, fillColor: { value: "#000000" } },
			vibrate: false,
			warp: false
		},
		number: {
			density: { enable: false, area: 800, factor: 10 },
			limit: 0,
			value: 110
		},
		opacity: {
			random: { enable: true, minimumValue: 0.1 },
			value: { min: 0, max: 1 },
			animation: {
				count: 0,
				enable: true,
				speed: 1,
				decay: 0,
				sync: false,
				destroy: "none",
				startValue: "random",
				minimumValue: 0
			}
		},
		reduceDuplicates: false,
		repulse: {
			random: { enable: false, minimumValue: 0 },
			value: 0,
			enabled: false,
			distance: 1,
			duration: 1,
			factor: 1,
			speed: 1
		},
		rotate: {
			random: { enable: false, minimumValue: 0 },
			value: 0,
			animation: { enable: false, speed: 0, decay: 0, sync: false },
			direction: "clockwise",
			path: false
		},
		shadow: {
			blur: 0,
			color: { value: "#000" },
			enable: false,
			offset: { x: 0, y: 0 }
		},
		shape: { options: {}, type: "circle" },
		size: {
			random: { enable: true, minimumValue: 1 },
			value: { min: 1, max: 3 },
			animation: {
				count: 0,
				enable: false,
				speed: 4,
				decay: 0,
				sync: false,
				destroy: "none",
				startValue: "random",
				minimumValue: 0.3
			}
		},
		stroke: { width: 0 },
		zIndex: {
			random: { enable: false, minimumValue: 0 },
			value: 0,
			opacityRate: 1,
			sizeRate: 1,
			velocityRate: 1
		}
	},
	pauseOnBlur: true,
	pauseOnOutsideViewport: true,
	responsive: [],
	style: {},
	themes: [],
	zLayers: 100
});

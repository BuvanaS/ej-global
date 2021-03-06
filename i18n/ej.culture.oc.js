ej.addCulture( "oc", {
	name: "oc",
	englishName: "Occitan",
	nativeName: "Occitan",
	language: "oc",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "Micca numericu",
		negativeInfinity: "-Infinit",
		positiveInfinity: "+Infinit",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			":": ".",
			firstDay: 1,
			days: {
				names: ["dimenge","diluns","dimarts","dimècres","dijòus","divendres","dissabte"],
				namesAbbr: ["dg.","dl.","dma.","dmc.","dj.","dv.","ds."],
				namesShort: ["dg","dl","da","dc","dj","dv","ds"]
			},
			months: {
				names: ["genièr","febrièr","març","abril","mai","junh","julhet","agost","setembre","octobre","novembre","decembre",""],
				namesAbbr: ["gen.","feb.","març","abr.","mai","junh","julh","ag.","set.","oct.","nov.","dec.",""]
			},
			monthsGenitive: {
				names: ["de genièr","de febrièr","de març","d'abril","de mai","de junh","de julhet","d'agost","de setembre","d'octobre","de novembre","de decembre",""],
				namesAbbr: ["gen.","feb.","març","abr.","mai","junh","julh","ag.","set.","oct.","nov.","dec.",""]
			},
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd d MMMM' de 'yyyy",
				t: "HH' h 'mm",
				T: "HH.mm.ss",
				f: "dddd d MMMM' de 'yyyy HH' h 'mm",
				F: "dddd d MMMM' de 'yyyy HH.mm.ss",
				M: "d MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});
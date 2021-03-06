ej.addCulture( "sv-SE", {
	name: "sv-SE",
	englishName: "Swedish (Sweden)",
	nativeName: "svenska (Sverige)",
	language: "sv",
	numberFormat: {
		pattern: ['-n'],
		groupSizes: [3],
		",": " ",
		".": ",",
		negativeInfinity: "-INF",
		positiveInfinity: "INF",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: "%"
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "kr"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],
				namesAbbr: ["sön","mån","tis","ons","tor","fre","lör"],
				namesShort: ["sö","må","ti","on","to","fr","lö"]
			},
			months: {
				names: ["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december",""],
				namesAbbr: ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "yyyy-MM-dd",
				D: "'den 'd MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "'den 'd MMMM yyyy HH:mm",
				F: "'den 'd MMMM yyyy HH:mm:ss",
				M: "'den 'd MMMM"
			}
		}
	}
});
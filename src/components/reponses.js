const sexes = [
	{
		id: 1,
		output: "H",
		text: "Homme",
	},
	{
		id: 2,
		output: "F",
		text: "Femme",
	}
];

const usagers = [
	{
		id: 1,
		output: "Usager",
		text: "Oui",
	},
	{
		id: 2,
		output: "Non-usager",
		text: "Non",
	}
];

const parking = [
	{
		id: 1,
		output: "Oui",
		text: "Oui",
	},
	{
		id: 2,
		output: "Non",
		text: "Non",
	}
];



const typeUsagers = [
	{
		id: 1,
		output: "Partant",
		text: "Vous allez prendre un train ?",
	},
	{
		id: 2,
		output: "Arrivant",
		text: "Vous êtes descendu d'un train ?",
	},
	{
		id: 3,
		output: "Attendre",
		text: "Vous venez attendre quelqu'un ?",
	},
	{
		id: 4,
		output: "Accompagner",
		text: "Vous venez accompagner quelqu'un ?",
	},
	{
		id: 5,
		output: "Renseignement",
		text: "Renseignement / achat ou retrait de titre de transport ?",
	},
	{
		id: 6,
		output: "Achat",
		text: "Achat presse / tabac / café",
	},
	{
		id: 7,
		output: "Travailler",
		text: "Vous travaillez dans la gare ?",
	},
	{
		id: 8,
		output: "Bus",
		text: "Vous venez prendre un bus ou un car ?",
	},
	{
		id: 9,
		output: "Autre",
		text: "Autre -> précisez :",
	}
];




const motifOrigine = [
	{ id: 0, output: "0", text: "domicile" },
	{ id: 1, output: 1, text: "travail" },
	{ id: 2, output: 2, text: "affaires professionnelles" },
	{ id: 3, output: 3, text: "études" },
	{ id: 4, output: 4, text: "achats" },
	{ id: 5, output: 5, text: "soins, démarches admin" },
	{ id: 6, output: 6, text: "loisirs" },
	{ id: 7, output: 7, text: "visites" },
	{ id: 8, output: 8, text: "vacances, week-end, tourisme" },
	{ id: 9, output: 9, text: "rabattement sur transport en commun" },
	{ id: 10, output: 10, text: "accompagnement + domicile" },
	{ id: 11, output: 11, text: "accompagnement + travail" },
	{ id: 12, output: 12, text: "accompagnement + affaires professionnelles" },
	{ id: 13, output: 13, text: "accompagnement + études" },
	{ id: 14, output: 14, text: "accompagnement + achats" },
	{ id: 15, output: 15, text: "accompagnement + soins, démarches admin" },
	{ id: 16, output: 16, text: "accompagnement + loisirs" },
	{ id: 17, output: 17, text: "accompagnement + visites" },
	{ id: 18, output: 18, text: "accompagnement + vacances, week-end, tourisme" },
	{
		id: 19,
		output: 19,
		text: "accompagnement + rabattement sur transport en commun",
	},
	{ id: 99, output: 99, text: "autre" },
];

const motifDestination = [
	{ id: 0, output: "0", text: "domicile" },
	{ id: 1, output: 1, text: "travail" },
	{ id: 2, output: 2, text: "affaires professionnelles" },
	{ id: 3, output: 3, text: "études" },
	{ id: 4, output: 4, text: "achats" },
	{ id: 5, output: 5, text: "soins, démarches admin" },
	{ id: 6, output: 6, text: "loisirs" },
	{ id: 7, output: 7, text: "visites" },
	{ id: 8, output: 8, text: "vacances, week-end, tourisme" },
	{ id: 9, output: 9, text: "rabattement sur transport en commun" },
	{ id: 10, output: 10, text: "accompagnement + domicile" },
	{ id: 11, output: 11, text: "accompagnement + travail" },
	{ id: 12, output: 12, text: "accompagnement + affaires professionnelles" },
	{ id: 13, output: 13, text: "accompagnement + études" },
	{ id: 14, output: 14, text: "accompagnement + achats" },
	{ id: 15, output: 15, text: "accompagnement + soins, démarches admin" },
	{ id: 16, output: 16, text: "accompagnement + loisirs" },
	{ id: 17, output: 17, text: "accompagnement + visites" },
	{ id: 18, output: 18, text: "accompagnement + vacances, week-end, tourisme" },
	{
		id: 19,
		output: 19,
		text: "accompagnement + rabattement sur transport en commun",
	},
	{ id: 99, output: 99, text: "autre" },
];


const postes = [
	{
		id: 1,
		output: "Poste 1",
		text: "Poste 1 (RD27) Caen vers Deauville - Giratoire RD27 x RD40",
	},
	{
		id: 2,
		output: "Poste 2",
		text: "Poste 2 (RD675) Caen vers Pont Audemer - Giratoire RD675 x RD228",
	},
	{
		id: 3,
		output: "Poste 3",
		text: "Poste 3 (RD613) Caen vers Lisieux - Giratoire RD613 x RD41",
	},
	{
		id: 4,
		output: "Poste 4",
		text: "Poste 4 (RD562) Le Hom vers Caen - Giratoire RD562 x RD257",
	},
	{
		id: 5,
		output: "Poste 5",
		text: "Poste 5 (RD7) Caen vers DLD - Giratoire RD7 x RD404",
	},
	{
		id: 6,
		output: "Poste 6",
		text: "Poste 6 (RD515) Caen vers Ouistreham - Giratoire RD514 x RD84",
	},
	{
		id: 7,
		output: "Poste 7",
		text: "Poste 7 (A84) Caen vers Rennes - Aire de repos de St - Jean des Essartiens",
	},
	{
		id: 8,
		output: "Poste 8",
		text: "Poste 8 (RN158) Caen vers Falaise - Aire de repos de Soulangy Ouest",
	},
];

const plaques = [
	{ id: 1, output: "04", text: "04" },
	{ id: 2, output: "05", text: "05" },
	{ id: 3, output: "06", text: "06" },
	{ id: 4, output: "07", text: "07" },
	{ id: 5, output: "08", text: "08" },
	{ id: 6, output: "09", text: "09" },
	{ id: 7, output: "10", text: "10" },
	{ id: 8, output: "11", text: "11" },
	{ id: 9, output: "12", text: "12" },
	{ id: 10, output: "13", text: "13" },
	{ id: 11, output: "14", text: "14" },
	{ id: 12, output: "15", text: "15" },
	{ id: 13, output: "16", text: "16" },
	{ id: 14, output: "17", text: "17" },
	{ id: 15, output: "18", text: "18" },
	{ id: 16, output: "19", text: "19" },
	{ id: 17, output: "2A", text: "2A" },
	{ id: 18, output: "2B", text: "2B" },
	{ id: 19, output: "21", text: "21" },
	{ id: 20, output: "22", text: "22" },
	{ id: 21, output: "23", text: "23" },
	{ id: 22, output: "24", text: "24" },
	{ id: 23, output: "25", text: "25" },
	{ id: 24, output: "26", text: "26" },
	{ id: 25, output: "27", text: "27" },
	{ id: 26, output: "28", text: "28" },
	{ id: 27, output: "29", text: "29" },
	{ id: 28, output: "30", text: "30" },
	{ id: 29, output: "31", text: "31" },
	{ id: 30, output: "32", text: "32" },
	{ id: 31, output: "33", text: "33" },
	{ id: 32, output: "34", text: "34" },
	{ id: 33, output: "35", text: "35" },
	{ id: 34, output: "36", text: "36" },
	{ id: 35, output: "37", text: "37" },
	{ id: 36, output: "38", text: "38" },
	{ id: 37, output: "39", text: "39" },
	{ id: 38, output: "40", text: "40" },
	{ id: 39, output: "41", text: "41" },
	{ id: 40, output: "42", text: "42" },
	{ id: 41, output: "43", text: "43" },
	{ id: 42, output: "44", text: "44" },
	{ id: 43, output: "45", text: "45" },
	{ id: 44, output: "46", text: "46" },
	{ id: 45, output: "47", text: "47" },
	{ id: 46, output: "48", text: "48" },
	{ id: 47, output: "49", text: "49" },
	{ id: 48, output: "50", text: "50" },
	{ id: 49, output: "51", text: "51" },
	{ id: 50, output: "52", text: "52" },
	{ id: 51, output: "53", text: "53" },
	{ id: 52, output: "54", text: "54" },
	{ id: 53, output: "55", text: "55" },
	{ id: 54, output: "56", text: "56" },
	{ id: 55, output: "57", text: "57" },
	{ id: 56, output: "58", text: "58" },
	{ id: 57, output: "59", text: "59" },
	{ id: 58, output: "60", text: "60" },
	{ id: 59, output: "61", text: "61" },
	{ id: 60, output: "62", text: "62" },
	{ id: 61, output: "63", text: "63" },
	{ id: 62, output: "64", text: "64" },
	{ id: 63, output: "65", text: "65" },
	{ id: 64, output: "66", text: "66" },
	{ id: 65, output: "67", text: "67" },
	{ id: 66, output: "68", text: "68" },
	{ id: 67, output: "69", text: "69" },
	{ id: 68, output: "70", text: "70" },
	{ id: 69, output: "71", text: "71" },
	{ id: 70, output: "72", text: "72" },
	{ id: 71, output: "73", text: "73" },
	{ id: 72, output: "74", text: "74" },
	{ id: 73, output: "75", text: "75" },
	{ id: 74, output: "76", text: "76" },
	{ id: 75, output: "77", text: "77" },
	{ id: 76, output: "78", text: "78" },
	{ id: 77, output: "79", text: "79" },
	{ id: 78, output: "80", text: "80" },
	{ id: 79, output: "81", text: "81" },
	{ id: 80, output: "82", text: "82" },
	{ id: 81, output: "83", text: "83" },
	{ id: 82, output: "84", text: "84" },
	{ id: 83, output: "85", text: "85" },
	{ id: 84, output: "86", text: "86" },
	{ id: 85, output: "87", text: "87" },
	{ id: 86, output: "88", text: "88" },
	{ id: 87, output: "89", text: "89" },
	{ id: 88, output: "90", text: "90" },
	{ id: 89, output: "91", text: "91" },
	{ id: 90, output: "92", text: "92" },
	{ id: 91, output: "93", text: "93" },
	{ id: 92, output: "94", text: "94" },
	{ id: 93, output: "95", text: "95" },
	{ id: 94, output: "P", text: "P" },
	{ id: 95, output: "M", text: "M" },
	{ id: 96, output: "971", text: "971" },
	{ id: 97, output: "972", text: "972" },
	{ id: 98, output: "973", text: "973" },
	{ id: 99, output: "974", text: "974" },
	{ id: 100, output: "976", text: "976" },
	{ id: 101, output: "F", text: "F" },
];

const typeVehicule = [
	{ id: 1, output: 1, text: "VL" },
	{ id: 2, output: 2, text: "VL + caravane ou remorque" },
	{ id: 3, output: 3, text: "Camping-Car" },
	{
		id: 4,
		output: 4,
		text: "Fourgonnettes et utilitaires transportant du matériel (artisan…)",
	},
	{
		id: 5,
		output: 5,
		text: "Fourgonnettes et utilitaires transportant de la marchandise",
	},
	{ id: 6, output: 6, text: "PL porteur" },
	{ id: 7, output: 7, text: "PL articulé, semi-remorque" },
	{ id: 8, output: 8, text: "PL train routier (porteur + remorque)" },
];

const occupation = [
	{ id: 1, output: "1", text: "1" },
	{ id: 2, output: "2", text: "2" },
	{ id: 3, output: "3", text: "3" },
	{ id: 4, output: "4", text: "4" },
	{ id: 5, output: "5", text: "5" },
	{ id: 6, output: "6", text: "6" },
	{ id: 7, output: "7", text: "7" },
	{ id: 8, output: "8", text: "8" },
	{ id: 9, output: "9", text: "9" },
];


const origine = [
	{ id: 1, output: "0", text: "domicile" },
	{ id: 2, output: "1", text: "travail" },
	{ id: 3, output: "2", text: "affaires professionnelles" },
	{ id: 4, output: "3", text: "études" },
	{ id: 5, output: "4", text: "achats" },
	{ id: 6, output: "5", text: "soins, démarches admin" },
	{ id: 7, output: "6", text: "loisirs" },
	{ id: 8, output: "7", text: "visites" },
	{ id: 9, output: "8", text: "vacances, week-end, tourisme" },
	{ id: 10, output: "9", text: "rabattement sur transport en commun" },
	{ id: 11, output: "10", text: "accompagnement + domicile" },
	{ id: 12, output: "11", text: "accompagnement + travail" },
	{ id: 13, output: "12", text: "accompagnement + affaires professionnelles" },
	{ id: 14, output: "13", text: "accompagnement + études" },
	{ id: 15, output: "14", text: "accompagnement + achats" },
	{ id: 16, output: "15", text: "accompagnement + soins, démarches admin" },
	{ id: 17, output: "16", text: "accompagnement + loisirs" },
	{ id: 18, output: "17", text: "accompagnement + visites" },
	{
		id: 19,
		output: "18",
		text: "accompagnement + vacances, week-end, tourisme",
	},
	{
		id: 20,
		output: "19",
		text: "accompagnement + rabattement sur transport en commun",
	},
	{ id: 21, output: "99", text: "autre" },
];




const frequence = [
	{ id: 1, output: "Ts les jrs", text: "Tous les jours de la semaine ou presque" },
	{ id: 2, output: "1-2 / smn", text: "1 à 2 fois par semaine" },
	{ id: 3, output: "Plrs / mois", text: "1 ou plusieurs fois par mois" },
	{ id: 4, output: "-1 / mois", text: "Moins d'une fois par mois" },
	{ id: 5, output: "Ts les ans", text: "Tous les ans" },
	{ id: 6, output: "1ière", text: "C'est la première fois" },
	{ id: 7, output: "Jamais", text: "Jamais" }
];

export {
	plaques,
	postes,
	typeVehicule,
	occupation,
	origine,
	frequence,
	motifOrigine,
	motifDestination,
	sexes,
	usagers,
	typeUsagers,
	parking
};


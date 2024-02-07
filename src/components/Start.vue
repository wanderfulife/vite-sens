<template>
	<div class="container">
		<div v-if="level === 0">
			<h2>Prénom enqueteur :</h2>
			<input class="form-control" type="text" v-model="enqueteur" />
			<button v-if="enqueteur" @click="next" class="btn-next">Suivant</button>
		</div>

		<div v-if="level === 1">
			<button @click="startSurvey" class="btn-next">COMMENCER QUESTIONNAIRE</button>
		</div>

		<div v-if="level === 2" class="form-group">
			<h1>Sexe de la personne interviewée</h1>
			<select v-model="SEXE" class="form-control">
				<option v-for="option in sexes" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="SEXE" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="level === 3" class="form-group">
			<h1>L'usager interviewé voyage en train ?</h1>
			<select v-model="Usager_train" class="form-control">
				<option v-for="option in usagers" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Usager_train" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="Usager_train === 'Non-usager' && level === 4">
			<h1>Néanmoins à quelle fréquence allez-vous en gare de Sens ?</h1>
			<select v-model="NU_Frequence" class="form-control">
				<option v-for="option in nu_frequence" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<div v-if="NU_Frequence === '1ière' || NU_Frequence === 'Jamais'">
				<button @click="submitSurvey" class="btn-fin">FINIR QUESTIONNAIRE</button>
			</div>
			<div
				v-else-if="NU_Frequence === 'Ts les jrs' || NU_Frequence === '1-2 / smn' || NU_Frequence === 'Plrs / mois' || NU_Frequence === '-1 / mois' || NU_Frequence === 'Ts les ans'">
				<h1>Lorsque vous allez en gare, utilisez-vous ce parking ?</h1>
				<select v-model="NU_Usage_parking" class="form-control">
					<option v-for="option in parking" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
				<button @click="submitSurvey" class="btn-fin">FINIR QUESTIONNAIRE</button>
			</div>
			<button @click="back" class="btn-return">Retour</button>
		</div>

		<div v-if="Usager_train === 'Usager' && level === 4">
			<h1>Par rapport à votre venue en gare :</h1>
			<select v-model="Type_Usager" class="form-control">
				<option v-for="option in typeUsagers" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Type_Usager === 'Autre'" class="form-control" type="text" v-model="precision_Type_Usager"
				placeholder="Precisions">
			<button v-if="Type_Usager" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="Type_Usager === 'Partant' && level === 5">
			<h1>Quelle sera votre gare de destination? </h1>
			<GareSelector v-model="P_Gare_Destination" />
			<input id="autre" class="form-control" type="text" v-model="P_Gare_Destination"
				placeholder="Gare Internationale">
			<button v-if="P_Gare_Destination" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="Type_Usager === 'Partant' && level === 6">
			<h1>Combien de temps allez-vous rester stationner ?</h1>
			<input id="autre" class="form-control" type="text" v-model="P_Detail_CV_temps" placeholder="Réponse ouverte">
			<button v-if="P_Detail_CV_temps" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="Type_Usager === 'Arrivant' && level === 5">
			<h1>Quelle est votre gare d'origine? </h1>
			<GareSelector v-model="A_Gare_Origine" />
			<input id="autre" class="form-control" type="text" v-model="A_Gare_Origine" placeholder="Gare Internationale">
			<button v-if="A_Gare_Origine" @click="next" class="btn-fin">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="Type_Usager === 'Arrivant' && level === 6">
			<h1>Combien de temps etes-vous rester stationner ?</h1>
			<input id="autre" class="form-control" type="text" v-model="A_Detail_VC_temps" placeholder="Réponse ouverte">
			<button v-if="A_Detail_VC_temps" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div
			v-if="level === 7 || level === 5 && Type_Usager === 'Attendre' || level === 5 && Type_Usager === 'Accompagner'
				|| level === 5 && Type_Usager === 'Renseignement' || level === 5 && Type_Usager === 'Achat'
				|| level === 5 && Type_Usager === 'Travailler' || level === 5 && Type_Usager === 'Bus' || level === 5 && Type_Usager === 'Autre'">
			<h1>A quelle fréquence venez-vous dans cette gare?</h1>
			<select v-model="Frequence" class="form-control">
				<option v-for="option in frequence" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Frequence" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>
		<div
			v-if="level === 8 || level === 6 && Type_Usager === 'Attendre' || level === 6 && Type_Usager === 'Accompagner'
				|| level === 6 && Type_Usager === 'Renseignement' || level === 6 && Type_Usager === 'Achat'
				|| level === 6 && Type_Usager === 'Travailler' || level === 6 && Type_Usager === 'Bus' || level === 6 && Type_Usager === 'Autre'">
			<h1>Quelle est votre commune de résidence ?</h1>
			<CommuneSelector v-model="Commune_residence" />
			<button v-if="Frequence" @click="submitSurvey" class="btn-next">FINIR QUESTIONNAIRE</button>
			<button @click="back" class="btn-return">retour</button>
		</div>
		<img class="logo" src="../assets/Alycelogo.webp" alt="Logo Alyce">
		<button class="btn-fin" @click="downloadData">download DATA</button>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { sexes, usagers, typeUsagers, nu_frequence, frequence, parking } from "./reponses";
import GareSelector from "./GareSelector.vue";
import CommuneSelector from './CommuneSelector.vue';
import { db } from "../firebaseConfig";
import { collection, doc, getDoc, getDocs, updateDoc, addDoc } from "firebase/firestore";
import * as XLSX from "xlsx";

const surveyCollectionRef = collection(db, "Sens");
const surveyNumber = ref(0);
const level = ref(0);
const startDate = ref('');
const enqueteur = ref('');
const SEXE = ref('');
const Usager_train = ref('');
const Type_Usager = ref('');
const NU_Frequence = ref('');
const NU_Usage_parking = ref('');
const precision_Type_Usager = ref('');
const P_Gare_Destination = ref('');
const P_Detail_CV_temps = ref('');
const A_Gare_Origine = ref('');
const A_Detail_VC_temps = ref('');
const Frequence = ref('');
const Commune_residence = ref('');


const startSurvey = () => {
	startDate.value = new Date().toLocaleTimeString("fr-FR").slice(0, 8);
	level.value++;
}


const next = () => {
	level.value++;
	console.log(level.value)

}

const back = () => {
	level.value--;
}

const fetchSurveyNumber = async () => {
	const surveyRef = doc(db, "Counters", "sens");
	const docSnap = await getDoc(surveyRef);
	if (docSnap.exists() && docSnap.data().numero !== undefined) {
		surveyNumber.value = docSnap.data().numero;
		console.log(surveyNumber.value)
	} else {
		console.log("No such document or 'numero' field is missing!");
	}
};

// Function to increment and update the survey number in Firebase
const updateSurveyNumber = async () => {
	const newNumber = surveyNumber.value + 1; // Increment the survey number
	const surveyRef = doc(db, "Counters", "sens");
	await updateDoc(surveyRef, {
		counter: newNumber
	});
	surveyNumber.value = newNumber; // Update the local ref
};

const submitSurvey = async () => {
	level.value = 1;
	await fetchSurveyNumber()
	await addDoc(surveyCollectionRef, {
		HEURE_DEBUT: startDate.value,
		ID_ENQUETE: surveyNumber.value,
		SEXE: SEXE.value,
		DATE: new Date().toLocaleDateString("fr-FR").replace(/\//g, "-"),
		JOUR: new Date().toLocaleDateString("fr-FR", { weekday: 'long' }),
		ENQUETEUR: enqueteur.value,
		HEURE_FIN: new Date().toLocaleTimeString("fr-FR").slice(0, 8),
		Usager_train: Usager_train.value,
		Type_Usager: Type_Usager.value,
		Precision_Type_Usager: precision_Type_Usager.value,
		NU_Frequence: NU_Frequence.value,
		NU_Usage_parking: NU_Usage_parking.value,
		P_Gare_Destination: P_Gare_Destination.value,
		P_Detail_CV_temps: P_Detail_CV_temps.value,
		A_Detail_VC_temps: A_Detail_VC_temps.value,
		A_Gare_Origine: A_Gare_Origine.value,
		Frequence: Frequence.value,
		Commune_residence: Commune_residence.value,
	});
	startDate.value = "";
	SEXE.value = "";
	Usager_train.value = "";
	Type_Usager.value = "";
	NU_Frequence.value = "";
	NU_Usage_parking.value = "";
	precision_Type_Usager.value = "";
	P_Gare_Destination.value = "";
	P_Detail_CV_temps.value = "";
	A_Gare_Origine.value = "";
	A_Detail_VC_temps.value = "";
	Frequence.value = "";
	Commune_residence.value = "";
	await updateSurveyNumber()
};

const downloadData = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		let data = [];
		let maxWidths = {}; // Object to keep track of maximum width for each column

		// Define your headers
		const headers = {
			ID_questionnaire: "ID_questionnaire",
			ID_ENQUETE: "ID_ENQUETE",
			Enqueteur: "Enqueteur",
			DATE: "DATE",
			JOUR: "JOUR",
			HEURE: "HEURE",
			HEURE_FIN: "HEURE_FIN",
			SEXE: "SEXE",
			Usager_train: "Usager_train",
			Type_Usager: "Type_Usager",
			Precision_Type_Usager: "Precision_Type_Usager",
			NU_Frequence: "NU_Frequence",
			NU_Usage_parking: "NU_Usage_parking",
			Frequence: "Frequence",
			Commune_residence: "Commune_residence",
			P_Gare_Destination: "P_Gare_Destination",
			P_Detail_CV_temps: "P_Detail_CV_temps",
			A_Gare_Origine: "A_Gare_Origine",
			A_Detail_VC_temps: "A_Detail_VC_temps",
		};

		// Initialize maxWidths with header lengths
		Object.keys(headers).forEach((key) => {
			maxWidths[key] = headers[key].length;
		});

		querySnapshot.forEach((doc) => {
			let docData = doc.data();
			let mappedData = {
				ID_questionnaire: doc.id,
				ID_ENQUETE: docData.ID_ENQUETE || "",
				Enqueteur: docData.ENQUETEUR || "",
				DATE: docData.DATE || "",
				JOUR: docData.JOUR || "",
				HEURE: docData.HEURE_DEBUT || "",
				HEURE_FIN: docData.HEURE_FIN || "",
				SEXE: docData.SEXE || "",
				Usager_train: docData.Usager_train || "",
				Type_Usager: docData.Type_Usager || "",
				Precision_Type_Usager: docData.Precision_Type_Usager || "",
				NU_Frequence: docData.NU_Frequence || "",
				NU_Usage_parking: docData.NU_Usage_parking || "",
				Frequence: docData.Frequence || "",
				Commune_residence: docData.Commune_residence || "",
				P_Gare_Destination: docData.P_Gare_Destination || "",
				P_Detail_CV_temps: docData.P_Detail_CV_temps || "",
				A_Gare_Origine: docData.A_Gare_Origine || "",
				A_Detail_VC_temps: docData.A_Detail_VC_temps || "",
			};
			data.push(mappedData);

			// Update maxWidths for each key in mappedData
			Object.keys(mappedData).forEach((key) => {
				const valueLength = mappedData[key].toString().length;
				maxWidths[key] = Math.max(maxWidths[key], valueLength);
			});
		});

		// Convert data to a worksheet
		const worksheet = XLSX.utils.json_to_sheet(data, {
			header: Object.keys(headers),
			skipHeader: false,
		});

		// Set the widths for each column
		worksheet["!cols"] = Object.keys(maxWidths).map((key) => ({
			wch: maxWidths[key] + 2 // +2 for a little extra padding
		}));

		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

		// Export the workbook to a .xlsx file
		XLSX.writeFile(workbook, "OdSens.xlsx");
	} catch (error) {
		console.error("Error downloading data: ", error);
	}
};

</script>
<style>
body {
	background-color: #2a3b63;
}

.logo {
	padding: 10%;
	height: 3em;
}

h1 {
	text-align: center;
	color: #4caf50;
}

h2 {
	color: white;
}

.container {
	background-color: #2a3b63;
	color: white;
	padding: 5% 0;
	width: 75%;
	margin: auto;
}

.btn-next {
	width: 100%;
	background-color: green;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-fin {
	width: 100%;
	background-color: #4c4faf;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return {
	width: 100%;
	background-color: #898989;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return:hover {
	background-color: #839684;
}

.commune-dropdown {
	/* Style your dropdown list here */
	list-style-type: none;
	padding: 0;
	margin: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 200px;
	overflow-y: auto;
}

.form-control {
	width: 100%;
	border-radius: 5px;
	border: 1px solid white;
	background-color: #333;
	color: white;
	text-transform: uppercase;
	font-weight: bolder;
}

input.form-control {
	width: 93%;
}

.commune-dropdown li {
	padding: 5px 10px;
	cursor: pointer;
}

*:focus {
	outline: none;
}

.commune-dropdown li:hover {
	background-color: #f0f0f0;
}

input,
select,
button {
	font-size: 16px;
	padding: 10px;
}
</style>
<!-- <style>
body {
	background-color: #1e1e1e;
}

.container {
	background-color: #1e1e1e;
	color: white;
	padding: 5% 0;
	width: 75%;
	margin: auto;
}

.btn-next {
	width: 100%;
	background-color: green;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-fin {
	width: 100%;
	background-color: #4c4faf;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return {
	width: 100%;
	background-color: #898989;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return:hover {
	background-color: #839684;
}

.btn-data {
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: #4caf50;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	width: 100%;
}

.btn-data:hover {
	background-color: #45a049;
}

h1 {
	text-align: center;
	color: #4caf50;
}

.commune-dropdown {
	/* Style your dropdown list here */
	list-style-type: none;
	padding: 0;
	margin: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 200px;
	overflow-y: auto;
}

.form-control {
	width: 100%;
	padding: 10px !important;
	border-radius: 5px;
	border: 1px solid #333;
	background-color: #333;
	color: white;
	text-transform: uppercase;
}

.commune-dropdown li {
	padding: 5px 10px;
	cursor: pointer;
}

.commune-dropdown li:hover {
	background-color: #f0f0f0;
}

.form-control {
	width: 100%;
	padding: 10px !important;
	border-radius: 5px;
	border: 1px solid #333;
	background-color: #333;
	color: white;
	text-transform: uppercase;
}

input,
select,
button {
	font-size: 16px;
	padding: 10px;
}
</style> -->
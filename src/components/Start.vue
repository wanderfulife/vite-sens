<template>
	<div class="container">
		<div v-if="level === 0">
			<button @click="startSurvey" class="btn-next">COMMENCER QUESTIONNAIRE</button>
		</div>

		<div v-if="level === 1">
			<input class="form-control" type="text" v-model="enqueteur" placeholder="Prenom enqueteur" />
			<button v-if="enqueteur" @click="next" class="btn-next">Suivant</button>
		</div>

		<div v-if="level === 2" class="form-group">
			<h1 v>Sexe de la personne interviewée</h1>
			<select id="sexe" v-model="sex" class="form-control">
				<option v-for="option in sexes" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="sex" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-fin">retour</button>
		</div>

		<div v-if="level === 3" class="form-group">
			<h1>L'usager interviewé voyage en train ?</h1>
			<select v-model="usager" class="form-control">
				<option v-for="option in usagers" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="usager" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-fin">retour</button>
		</div>

		<div v-if="usager === 'Usager' && level === 4">
			<h1>Par rapport à votre venue en gare :</h1>
			<select id="QCo1" v-model="typeUsager" class="form-control">
				<option v-for="option in typeUsagers" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="typeUsager === 'Autre'" class="form-control" type="text" v-model="precision_Type_Usager"
				placeholder="Precisions">
			<button v-if="typeUsager" @click="next" class="btn-next">Done</button>
			<button @click="back" class="btn-fin">retour</button>
		</div>

		<div v-if="usager === 'Non-usager' && level === 4">
			<h1>Fin du Questionnaire</h1>

			<button @click="back" class="btn-fin">Finish</button>
		</div>
		<!-- <button @click="submitSurvey" class="btn-fin">FINIR QUESTIONNAIRE</button> -->
	</div>
</template>

<script setup>
import { ref } from "vue";
import { sexes, usagers, typeUsagers } from "./reponses";
//  frequence, parking

const level = ref(0);
const startDate = ref('');
const enqueteur = ref('');
const sex = ref('');
const usager = ref('');
const typeUsager = ref('');
const precision_Type_Usager = ref('')

const startSurvey = () => {
	startDate.value = new Date().toLocaleTimeString("fr-FR").slice(0, 8);
	level.value++;
	console.log(startDate.value)
}

const next = () => {
	level.value++;
	console.log("Level: " + level.value + " " + "Enqueteur: " + enqueteur.value + " " + "sex: " + sex.value + " " + "usager: " + usager.value)
}

const back = () => {
	level.value--;
}

const submitSurvey = () => {
	startDate.value = '';
	const HEURE_FIN = new Date().toLocaleTimeString("fr-FR").slice(0, 8);
	const DATE = new Date().toLocaleDateString("fr-FR").replace(/\//g, "-");
	const JOUR = new Date().toLocaleDateString("fr-FR", { weekday: 'long' });
	console.log(DATE + " " + JOUR + " " + HEURE_FIN);
	level.value--
};


</script>

<style>
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
	background-color: #898989;
	color: white;
	padding: 10px 20px;
	margin-top: 1.5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	width: 100%;
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
</style>
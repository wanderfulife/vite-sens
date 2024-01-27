<template>
  <div class="container">
    <div>
      <h1 v-if="choice === 0">Sens</h1>
      <h1 v-if="choice === 1">Sexe de la personne interviewée</h1>
      <h1 v-if="choice === 2">L'usager interviewé voyage en train ?</h1>
    </div>
    <div v-if="!start">
      <button @click="startSurvey" class="btn-fin">COMMENCER QUESTIONNAIRE</button>
    </div>
    <form v-else @submit.prevent="submitSurvey">
      <div v-if="!showSecondSet">
        <div v-if="choice === 0" class="form-group">
          <input class="form-control" type="text" v-model="reponse.enqueteur" placeholder="Prenom enqueteur"
            @keydown.enter.prevent />
          <button v-if="reponse.enqueteur" @click="next" class="btn-submit">Suivant</button>
        </div>

        <div v-if="choice === 1" class="form-group">
          <select id="sexe" v-model="reponse.sexe" class="form-control">
            <option v-for="option in sexes" :key="option.id" :value="option.output">
              {{ option.text }}
            </option>
          </select>
          <button v-if="reponse.sexe" @click="next" class="btn-submit">Suivant</button>
          <button @click="back" class="btn-return">retour</button>
        </div>

        <div v-if="choice === 2" class="form-group">
          <select id="QCo0" v-model="reponse.usager" class="form-control">
            <option v-for="option in usagers" :key="option.id" :value="option.output">
              {{ option.text }}
            </option>
          </select>
          <button v-if="reponse.usager" @click="buttonSecondSet" class="btn-submit">Suivant</button>
          <button @click="back" class="btn-return">retour</button>
        </div>
      </div>

      <div v-else>
        <div v-if="reponse.usager === 'Usager' && choice_nu === 0">
          <h1>QCo1 - Par rapport à votre venue en gare :</h1>
          <select id="QCo1" v-model="reponse.typeUsager" class="form-control">
            <option v-for="option in typeUsagers" :key="option.id" :value="option.output">
              {{ option.text }}
            </option>
          </select>
          <input v-if="reponse.typeUsager === 'Autre'" class="form-control" type="text"
            v-model="reponse.precision_Type_Usager" placeholder="Precisions">
          <button v-if="reponse.typeUsager" @click="next_nu" class="btn-submit">Done</button>
          <button @click="backSecondSet" class="btn-return">retour</button>
        </div>

        <div v-if="reponse.typeUsager === 'Partant' && choice_nu === 1">
            <h1>QP1 - Quelle sera votre gare de destination? </h1>
                <GareSelector v-model="reponse.gare" />
            <button @click="next_nu" class="btn-submit">Done</button>
            <button @click="backSecondSet" class="btn-return">retour</button>
          </div>

        <div v-else-if="reponse.usager === 'Non-usager'">
          <h1>QNU2 - Néanmoins à quelle fréquence allez-vous en gare de Sens ?</h1>
          <select id="QNu2" v-model="reponse.NU_Frequence" class="form-control">
            <option v-for="option in frequence" :key="option.id" :value="option.output">
              {{ option.text }}
            </option>
          </select>
          <div v-if="reponse.NU_Frequence === '1ière' || reponse.NU_Frequence === 'Jamais'">
            <input type="submit" value="Submit Survey" class="btn-fin" />
          </div>
          <div
            v-else-if="reponse.NU_Frequence === 'Ts les jrs' || reponse.NU_Frequence === '1-2 / smn' || reponse.NU_Frequence === 'Plrs / mois' || reponse.NU_Frequence === '-1 / mois' || reponse.NU_Frequence === 'Ts les ans'">
            <h1>QNU3 - Lorsque vous allez en gare, utilisez-vous ce parking ?</h1>
            <select id="QNu3" v-model="reponse.parking" class="form-control">
              <option v-for="option in parking" :key="option.id" :value="option.output">
                {{ option.text }}
              </option>
            </select>
            <input type="submit" value="Submit Survey" class="btn-fin" />
          </div>
          <button @click="backSecondSet" class="btn-return">retour</button>
        </div>
      </div>


    </form>
  </div>
  <button @click="downloadData" class="btn-data">Download Data</button>
</template>

<script setup>
import { ref } from "vue";
import { usagers, sexes, typeUsagers, frequence, parking } from "./reponses";
import { db } from "../firebaseConfig";
import GareSelector from "./GareSelector.vue";
import { collection, addDoc, getDocs } from "firebase/firestore";
import * as XLSX from "xlsx";


const surveyCollectionRef = collection(db, "Caen");
const start = ref(false);
const startDate = ref('')
const choice = ref(0);
const choice_nu = ref(0);
const showSecondSet = ref(false);
const reponse = ref({
  NU_Frequence: "",
  enqueteur: "",
  sexe: "",
  usager: "",
  typeUsager: "",
  precision_Type_Usager: "",
  parking: "",
  gare: ""
});

const startSurvey = () => {
  start.value = true;
  startDate.value = new Date().toLocaleTimeString("fr-FR").slice(0, 8);
}

const next = () => {
  choice.value++;
};

const back = () => {
  choice.value--;
};

const next_nu = () => {
  choice_nu.value++;
};

const back_nu = () => {
  choice_nu.value--;
};

const buttonSecondSet = () => {
  showSecondSet.value = true;
  choice.value++;
}
const backSecondSet = () => {
  showSecondSet.value = false;
  choice.value--;
}


const submitSurvey = async () => {
  await addDoc(surveyCollectionRef, {
    HEURE_DEBUT: startDate.value,
    SEXE: reponse.value.sexe,
    DATE: new Date().toLocaleDateString("fr-FR").replace(/\//g, "-"),
    JOUR: new Date().toLocaleDateString("fr-FR", { weekday: 'long' }),
    ENQUETEUR: reponse.value.enqueteur,
    HEURE_FIN: new Date().toLocaleTimeString("fr-FR").slice(0, 8),
    Usager_train: reponse.value.usager,
    Type_Usager: reponse.value.typeUsager,
    Precision_Type_Usager: reponse.value.precision_Type_Usager,
    NU_Frequence: reponse.value.NU_Frequence,
    NU_Usage_parking: reponse.value.parking,
    P_Gare_Destination: reponse.value.gare
  });
  choice.value = 0;
  choice_nu.value = 0;
  reponse.gare.value = "";
  reponse.value.precision_Type_Usager = "";
  reponse.value.enqueteur = "";
  reponse.value.sexe = "";
  reponse.value.usager = "";
  reponse.value.typeUsager = "";
  reponse.value.NU_Frequence = "";
  reponse.value.parking = "";
  showSecondSet.value = false;
  start.value = false;
};

const downloadData = async () => {
  try {
    const querySnapshot = await getDocs(surveyCollectionRef);
    let data = [];
    let maxWidths = {}; // Object to keep track of maximum width for each column
    const minWidth = 7; // Minimum width in Excel units,
    querySnapshot.forEach((doc) => {
      let docData = doc.data();
      let mappedData = {
        ID_questionnaire: doc.id, // Firebase document ID
        HEURE_DEBUT: docData.HEURE_DEBUT || "",
        HEURE_FIN: docData.HEURE_FIN || "", // Heure
        ENQUETEUR: docData.ENQUETEUR || "", // Name
        SEXE: docData.SEXE || "", // Sexe
        DATE: docData.DATE || "", // Date
        JOUR: docData.JOUR || "",
        Usager_train: docData.Usager_train || "", // Usager train / non usager
        Type_Usager: docData.Type_Usager || "", // Type usager
        Precision_Type_Usager: docData.Precision_Type_Usager || "",
        NU_Frequence: docData.NU_Frequence || "",
        NU_Usage_parking: docData.NU_Usage_parking || "",
        P_Gare_Destination: docData.P_Gare_Destination || ""
      };
      data.push(mappedData);
    });

    // Calculate the maximum width for each column, considering the minimum width
    // Adjust this factor as needed for padding or wider characters
    const scalingFactor = 2; // Increased scaling factor for better visibility
    Object.keys(data[0]).forEach((key) => {
      let maxLen = Math.max(
        ...data.map((item) => item[key].toString().length),
        minWidth
      );
      maxWidths[key] = Math.ceil(maxLen * scalingFactor); // Apply scaling factor and round up
    });

    // Convert data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(data, {
      header: [
        "ID_questionnaire",
        "ENQUETEUR",
        "DATE",
        "JOUR",
        "HEURE_DEBUT",
        "HEURE_FIN",
        "SEXE",
        "Usager_train",
        "Type_Usager",
        "Precision_Type_Usager",
        "NU_Frequence",
        "P_Gare_Destination"
      ],
      skipHeader: false,
    });

    // Set the widths for each column, ensuring a minimum width
    worksheet["!cols"] = Object.keys(maxWidths).map((key) => ({
      wch: maxWidths[key],
    }));

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    // Export the workbook to a .xlsx file
    XLSX.writeFile(workbook, "OdCaen.xlsx");
  } catch (error) {
    console.error("Error downloading data: ", error);
  }
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

label {
  display: block;
  margin-bottom: 5px;
}

.form-group {
  margin-bottom: 15px;
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

.form-control,
.btn-submit {
  box-sizing: border-box;
}

.btn-submit {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin-top: 1.5%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #45a049;
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

.btn-fin:hover {
  background-color: #45a049;
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

.commune-dropdown li {
  padding: 5px 10px;
  cursor: pointer;
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

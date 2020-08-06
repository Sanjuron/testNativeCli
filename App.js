import React, { useState } from "react";
import { StyleSheet, Text, View, Alert , ScrollView,} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // thomas
import { Button, Input, CheckBox, Header } from "react-native-elements";

/// Import from 'react-native-pdf-lib'
import PDFLib, {  PDFDocument, PDFPage } from 'react-native-pdf-lib';
// import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from "downloadjs";

// import location from "./doc/location.pdf";

export default function App() {
  // setState première page
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [adress, setAdress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [license, setLicense] = useState("");

  //set state deuxième page
  const [workplace, setWorkplace] = useState("");
  const [km, setKm] = useState("");
  const [startContract, setStartContract] = useState("");
  const [endContract, setEndContract] = useState("");

  //set state cinquième page
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [startKm, setStartKm] = useState("");
  const [clean, setClean] = useState("");
  const [average, setAverage] = useState("");
  const [dirty, setDirty] = useState("");
    // carburant à voir
  const [key, setKey] = useState("");
  const [registration, setRegistration] = useState("");
  const [assurance, setAssurance] = useState("");
  const [yellowVest, setYellowVest] = useState("");
  const [triangle, setTriangle] = useState("");

  //setState huitième page


  //changeSet première page
  const changeLastname = (val) => {
    setLastname(val);
  };
  const changeFirstame = (val) => {
    setFirstname(val);
  };
  const changeDay = (val) => {
    setDay(val);
  };
  const changeMonth = (val) => {
    setMonth(val);
  };
  const changeYear = (val) => {
    setYear(val);
  };
  const changeAdress = (val) => {
    setAdress(val);
  };
  const changeZipcode = (val) => {
    setZipcode(val);
  };
  const changeCity = (val) => {
    setCity(val);
  };
  const changeLicense = (val) => {
    setLicense(val);
  };

  //changeState deuxième page
  const changeWorkplace = (val) => {
    setWorkplace(val);
  };
  const changeKm = (val) => {
    setKm(val);
  };
  const changeStartContract = (val) => {
    setStartContract(val);
  };
  const changeEndContract = (val) => {
    setEndContract(val);
  };


  //changeState cinquième page
  const changeModel = (val) => {
    setModel(val);
  };
  const changeBrand = (val) => {
    setBrand(val);
  };
  const changeColor = (val) => {
    setColor(val);
  };
  const changeLicensePlate = (val) => {
    setLicensePlate(val);
  };
  const changeStartKm = (val) => {
    setStartKm(val);
  };
  const changeClean = (val) => {
    setClean(val);
  };
  const changeAverage = (val) => {
    setAverage(val);
  };
  const changeDirty = (val) => {
    setDirty(val);
  };
  const changeKey = (val) => {
    setKey(val);
  };
  const changeRegistration = (val) => {
    setRegistration(val);
  };
  const changeAssurance = (val) => {
    setAssurance(val);
  };
  const changeYellowVest = (val) => {
    setYellowVest(val);
  };
  const changeTriangle = (val) => {
    setTriangle(val);
  };


  async function createPdf() {
    // Modify first page in document

    const url = location;
    console.log(url);
    const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    console.log(pdfDoc);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    // récupération des pages qui contiennent des champs à remplir
    const firstPage = pages[0];
    const secondPage = pages[1];
    const fifthPage = pages[4];
    const eighthPage = pages[7];

    // Get the width and height of the first page
    const { width, height } = firstPage.getSize();
    console.log(width);
    console.log(height);

    // les champs de la première page
    firstPage.drawText(firstname, {
      x: 116,
      y: 605,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(lastname, {
      x: 258,
      y: 605,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(day, {
      x: 105,
      y: 575,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(month, {
      x: 137,
      y: 575,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(year, {
      x: 168,
      y: 575,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(adress, {
      x: 153,
      y: 548,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(zipcode, {
      x: 139,
      y: 518,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(city, {
      x: 349,
      y: 518,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(license, {
      x: 388,
      y: 488,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    //les champs de la deuxième page
    secondPage.drawText(adress, { // attention, je reprends une adresse incomplète
      x: 182,
      y: 652,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    secondPage.drawText(workplace, { 
      x: 182,
      y: 625,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    secondPage.drawText(km, { 
      x: 254,
      y: 595,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    secondPage.drawText(startContract, { 
      x: 292,
      y: 284,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    secondPage.drawText(endContract, { 
      x: 245,
      y: 256,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    //les champs de la cuinquième page
    fifthPage.drawText(brand, { 
      x: 182,
      y: 680,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(model, { 
      x: 182,
      y: 650,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(color, { 
      x: 123,
      y: 620,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(licensePlate, { 
      x: 218,
      y: 590,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(startKm, { 
      x: 82,
      y: 470,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(clean, { 
      x: 89,
      y: 440,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(average, { 
      x: 139,
      y: 440,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(dirty, { 
      x: 188,
      y: 440,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(key, { 
      x: 78,
      y: 328,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(registration, { 
      x: 78,
      y: 312,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(assurance, { 
      x: 78,
      y: 298,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(yellowVest, { 
      x: 78,
      y: 278,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    fifthPage.drawText(triangle, { 
      x: 78,
      y: 261,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });


    //champ huitième page
    eighthPage.drawText(lastname, {
      x: 198,
      y: 530,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    eighthPage.drawText(firstname, { //attention à vérifier
      x: 320,
      y: 530,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    // const pdfBytes = await pdfDoc.save();

    PDFDocument
      .modify(existingPdfBytes)
      .modifyPages(page1)
      .write() // Returns a promise that resolves with the PDF's path
      .then(path => {
        console.log('PDF modified at: ' + path);
      });

      const pdfBytes = await existingPDF.save()

    download(pdfBytes, "contrat-de-location.pdf", "application/pdf");
  }

  return (
    <ScrollView>
        <View style={styles.container}>
          <Header centerComponent={{ text: 'Garage Solidaire', style: { color: '#fff' }}}/>
          <View>
            <CheckBox center title='Monsieur' />
            <CheckBox center title='Madame' />
          </View>
          <Input style={styles.firstInput} placeholder='Nom...' leftIcon= {<Icon name='user'size={17}color='#7B8894'/>}/>
          <Input placeholder='Prénom...' leftIcon= {<Icon name='user'size={17}color='#7B8894'/>}/>
          <Input placeholder='Date de naissance...' leftIcon= {<Icon name='calendar'size={17}color='#7B8894'/>}/>
          <Input placeholder='Adresse...' leftIcon= {<Icon name='home'size={17}color='#7B8894'/>}/>
          <Input placeholder='Permis...' leftIcon= {<Icon name='id-card'size={17}color='#7B8894'/>}/>
          <Input placeholder='Contrat de travail...' leftIcon= {<Icon name='pencil-square-o'size={17}color='#7B8894'/>}/>
          <View>
            <CheckBox center title='QPV'/>
            <CheckBox center title='RSA' />
          </View>
          <Input placeholder="Carte d'identité..." leftIcon= {<Icon name='address-card'size={17}color='#7B8894'/>}/>
          <Input placeholder='Empreinte banquaire...' leftIcon= {<Icon name='credit-card-alt'size={17}color='#7B8894'/>}/>
          {/* <Picker
              style={{ height: 50, width: '100%', marginTop: 10, marginBottom: 10}}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
              <Picker.Item label="Marque" value="mode" />
              <Picker.Item label="Peugeot" value="pt" />
              <Picker.Item label="Renault" value="rt" />
          </Picker>
          <Picker
              style={{ height: 50, width: '100%', marginTop: 10, marginBottom: 10}}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
              <Picker.Item label="Modèle" value="mode" />
              <Picker.Item label="106" value="p106" />
              <Picker.Item label="206" value="p206" />
          </Picker>
          <Input placeholder='Immatriculation...' leftIcon= {<Icon name='bars'size={17}color='#7B8894'/>}/>
          <Picker
              style={{ height: 50, width: '100%', marginTop: 10, marginBottom: 10 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
              <Picker.Item label="Etat" value="mode" />
              <Picker.Item label="Bon état" value="bon" />
              <Picker.Item label="Etat correct" value="correct" />
              <Picker.Item label="Mauvais état" value="mauvais" />
          </Picker> */}
          <Input placeholder='Kilométrage jour...' leftIcon= {<Icon name='tachometer'size={17}color='#7B8894'/>}/>
          <Input placeholder='Date de départ...' leftIcon= {<Icon name='map-o'size={17}color='#7B8894'/>}/>
          <Input placeholder='Date de retour...' leftIcon= {<Icon name='share'size={17}color='#7B8894'/>}/>
        </View>
        <View>
            <Button title="OBTENIR MON PDF" onPress={createPdf}/>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#009CBF",
  },
});

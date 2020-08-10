import React, { useState } from "react";
import { StyleSheet, Text, View, Alert , ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // thomas
import { Button, Input, CheckBox, Header, ThemeProvider } from "react-native-elements";

/// Import from 'react-native-pdf-lib'
import PDFLib, {  PDFDocument, PDFPage } from 'react-native-pdf-lib';
// import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from "downloadjs";
import RNFS from 'react-native-fs';
import RNFetchBlob from 'react-native-fetch-blob';

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
  const changeFirstname = (val) => {
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
    // les champs de la première page
    const firstPage = PDFPage
    .modify(0)
    .drawText(firstname, {
      x: 116,
      y: 605,
      size: 16,
    })
    .drawText(lastname, {
      x: 258,
      y: 605,
      size: 16,
    })
    .drawText(day, {
      x: 105,
      y: 575,
      size: 16,
    })
    .drawText(month, {
      x: 137,
      y: 575,
      size: 16,
    })
    .drawText(year, {
      x: 168,
      y: 575,
      size: 16,
    })
    .drawText(adress, {
      x: 153,
      y: 548,
      size: 16,
    })
    .drawText(zipcode, {
      x: 139,
      y: 518,
      size: 16,
    })
    .drawText(city, {
      x: 349,
      y: 518,
      size: 16,
    })
    .drawText(license, {
      x: 388,
      y: 488,
      size: 16,
    });
    const secondPage = PDFPage
    .modify(1)
    .drawText(adress, { // attention, je reprends une adresse incomplète
      x: 182,
      y: 652,
      size: 16,
    })
    .drawText(workplace, { 
      x: 182,
      y: 625,
      size: 16,
    })
    .drawText(km, { 
      x: 254,
      y: 595,
      size: 16,
    })
    .drawText(startContract, { 
      x: 292,
      y: 284,
      size: 16,
    })
    .drawText(endContract, { 
      x: 245,
      y: 256,
      size: 16,
    });


    let dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob
      .config({
        // response data will be saved to this path if it has access right.
        path : dirs.DownloadDir+ '/location.pdf'
      })
      .fetch('GET', 'https://reverent-golick-11a11b.netlify.app/location.pdf', {
        //some headers ..
      })
      .then((res) => {
        // the path should be dirs.DocumentDir + 'path-to-file.anything'
        console.log('The file saved to ', res.path())
        PDFDocument
        .modify(res.path())
        .modifyPages(firstPage, secondPage)
        .write()  
        .then(path => {
            console.log('PDF modified at: ' + path);  
        });
      })

}




return (
  <ThemeProvider>
    <View style={styles.container}>
      <Text style={styles.h1}>Contrat de Location</Text>
      <Input placeholder="Nom du demandeur" onChangeText={changeLastname} />
      <Input
        placeholder="Prénom du demandeur"
        onChangeText={changeFirstname}
      />
      <Input
        placeholder="Modèle de la voiture à louer"
        onChangeText={changeModel}
      />
      <Button title="sauvegarder pdf" onPress={createPdf} />
    </View>
  </ThemeProvider>
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

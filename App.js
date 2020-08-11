import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // thomas
import {
  Button,
  Input,
  CheckBox,
  Header,
  ThemeProvider,
} from 'react-native-elements';

/// Import from 'react-native-pdf-lib'
import PDFLib, {PDFDocument, PDFPage} from 'react-native-pdf-lib';
// import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from 'downloadjs';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'react-native-fetch-blob';

export default function App() {
  // setState première page
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [adress, setAdress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [license, setLicense] = useState('');

  //set state deuxième page
  const [workplace, setWorkplace] = useState('');
  const [km, setKm] = useState('');
  const [startContract, setStartContract] = useState('');
  const [endContract, setEndContract] = useState('');

  //set state cinquième page
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [startKm, setStartKm] = useState('');
  const [clean, setClean] = useState('');
  const [average, setAverage] = useState('');
  const [dirty, setDirty] = useState('');
  const [cleanO, setCleanO] = useState('');
  const [averageO, setAverageO] = useState('');
  const [dirtyO, setDirtyO] = useState('');
  // carburant à voir
  const [key, setKey] = useState('');
  const [registration, setRegistration] = useState('');
  const [assurance, setAssurance] = useState('');
  const [yellowVest, setYellowVest] = useState('');
  const [triangle, setTriangle] = useState('');

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
  const changeCleanO = (val) => {
    setCleanO(val);
  };
  const changeAverageO = (val) => {
    setAverageO(val);
  };
  const changeDirtyO = (val) => {
    setDirtyO(val);
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
    const firstPage = PDFPage.modify(0)
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
    const secondPage = PDFPage.modify(1)
      .drawText(adress, {
        // attention, je reprends une adresse incomplète
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
    const fifthPage = PDFPage.modify(4)
      .drawText(brand, {
        x: 182,
        y: 680,
        size: 16,
      })
      .drawText(model, {
        x: 182,
        y: 650,
        size: 16,
      })
      .drawText(color, {
        x: 123,
        y: 620,
        size: 16,
      })
      .drawText(licensePlate, {
        x: 218,
        y: 590,
        size: 16,
      })
      .drawText(startKm, {
        x: 82,
        y: 470,
        size: 16,
      })
      .drawText(clean, {
        x: 89,
        y: 440,
        size: 16,
      })
      .drawText(average, {
        x: 139,
        y: 440,
        size: 16,
      })
      .drawText(dirty, {
        x: 188,
        y: 440,
        size: 16,
      })
      .drawText(cleanO, {
        // modifier les y
        x: 89,
        y: 440,
        size: 16,
      })
      .drawText(averageO, {
        x: 139,
        y: 440,
        size: 16,
      })
      .drawText(dirtyO, {
        x: 188,
        y: 440,
        size: 16,
      })
      .drawText(key, {
        x: 78,
        y: 328,
        size: 16,
      })
      .drawText(registration, {
        x: 78,
        y: 312,
        size: 16,
      })
      .drawText(assurance, {
        x: 78,
        y: 298,
        size: 16,
      })
      .drawText(yellowVest, {
        x: 78,
        y: 278,
        size: 16,
      })
      .drawText(triangle, {
        x: 78,
        y: 261,
        size: 16,
      });

    let dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob.config({
      // response data will be saved to this path if it has access right.
      path: dirs.DownloadDir + '/location.pdf',
    })
      .fetch('GET', 'https://reverent-golick-11a11b.netlify.app/location.pdf', {
        //some headers ..
      })
      .then((res) => {
        // the path should be dirs.DocumentDir + 'path-to-file.anything'
        console.log('The file saved to ', res.path());
        PDFDocument.modify(res.path())
          .modifyPages(firstPage, secondPage, fifthPage)
          .write()
          .then((path) => {
            console.log('PDF modified at: ' + path);
          });
      });
  }

  return (
    <ThemeProvider>
      <ScrollView>
        <View style={styles.container}>
          {/* <Text style={styles.h1}>Contrat de Location</Text>
        <Input placeholder="Nom du demandeur" onChangeText={changeLastname} />
        <Input
          placeholder="Prénom du demandeur"
          onChangeText={changeFirstname}
        />
        <Input
          placeholder="Modèle de la voiture à louer"
          onChangeText={changeModel}
        />

        <Button title="sauvegarder pdf" onPress={createPdf} /> */}
          <Text style={styles.title}>Contrat de Location</Text>
          <View>
            <CheckBox center title="Monsieur" />
            <CheckBox center title="Madame" />
          </View>

          <Input
            placeholder="Nom..."
            onChangeText={changeLastname}
            leftIcon={<Icon name="user" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Prénom..."
            onChangeText={changeFirstname}
            leftIcon={<Icon name="user" size={17} color="#7B8894" />}
          />
          {/* date de naissance pas bon, à diviser j/m/a */}

          
          <View style={styles.documents}>

          <Text style={styles.birthday}>Date de naissance :</Text>
          <Input
            placeholder="Jour..."
            leftIcon={<Icon name="calendar" size={17} color="#7B8894" />}
            onChangeText={changeDay}
          />
          <Input
            placeholder="Mois..."
            leftIcon={<Icon name="calendar" size={17} color="#7B8894" />}
            onChangeText={changeMonth}
          />
          <Input
            placeholder="Année..."
            leftIcon={<Icon name="calendar" size={17} color="#7B8894" />}
            onChangeText={changeYear}
          />
          </View>

          <Input
            placeholder="Adresse..."
            onChangeText={changeAdress}
            leftIcon={<Icon name="home" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Code Postal..."
            onChangeText={changeZipcode}
            leftIcon={<Icon name="home" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Ville..."
            onChangeText={changeCity}
            leftIcon={<Icon name="home" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Permis..."
            onChangeText={changeLicense}
            leftIcon={<Icon name="id-card" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Contrat de travail..."
            leftIcon={<Icon name="pencil-square-o" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Lieu de travail..."
            onChangeText={changeWorkplace}
            leftIcon={<Icon name="home" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Kilométrage autorisé par jour..."
            onChangeText={changeKm}
            leftIcon={<Icon name="tachometer" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Date de début du contrat..."
            onChangeText={changeStartContract}
            leftIcon={<Icon name="map-o" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Date de fin du contrat..."
            onChangeText={changeEndContract}
            leftIcon={<Icon name="share" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Marque de la voiture..."
            onChangeText={changeBrand}
            leftIcon={<Icon name="car" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Modèle du véhicule..."
            onChangeText={changeModel}
            leftIcon={<Icon name="car" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Couleur de la voiture..."
            onChangeText={changeColor}
            leftIcon={<Icon name="car" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Immatriculation du véhicule..."
            onChangeText={changeLicensePlate}
            leftIcon={<Icon name="car" size={17} color="#7B8894" />}
          />

          <View style={styles.documents}>
            <Text>Propreté intérieure</Text>
            <CheckBox center title="Propre" />
            <CheckBox center title="Moyen" />
            <CheckBox center title="Sale" />
          </View>

          <View style={styles.documents}>
          <Text>Propreté extérieure</Text>
            <CheckBox center title="Propre" />
            <CheckBox center title="Moyen" />
            <CheckBox center title="Sale" />
          </View>

          <View style={styles.documents}>
            <CheckBox center title="Clé du véhicule" />
            <CheckBox center title="Carte Grise" />
            <CheckBox center title="Assurance" />
          </View>

          <View style={styles.security}>
            <CheckBox center title="Gilet Jaune" />
            <CheckBox center title="Triangle" />
          </View>

          <View>
            {/* <CheckBox center title="QPV" checked={} />  */}

            <CheckBox center title="QPV" />
            <CheckBox center title="RSA" />
          </View>

          <Input
            placeholder="Carte d'identité..."
            leftIcon={<Icon name="address-card" size={17} color="#7B8894" />}
          />
          <Input
            placeholder="Empreinte banquaire..."
            leftIcon={<Icon name="credit-card-alt" size={17} color="#7B8894" />}
          />

          <Button title="OBTENIR MON PDF" onPress={createPdf} />
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    margin: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 25,
    marginTop: 25,
    color: '#009CBF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  birthday: {
    color: '#009CBF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 7,
    // textDecorationLine: 'underline',
    marginBottom: 5,
  },
  documents: {
    marginTop: 20,
    marginBottom: 20,
  },
  security: {
    marginTop: 20,
    marginBottom: 20,
  },
});

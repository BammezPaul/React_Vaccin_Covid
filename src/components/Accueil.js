import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import reactDom from 'react-dom';

export default class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Nom', 'Prénom', 'Date de naissance', 'Numéro de sécurité sociale', 'Date de vaccination', 'Nom du vaccin', 'Quelle dose ?',],
      tableData: [],
      data:[]
    }
  }

  convertDate = (d) => {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    return `${day}/${month}/${year}`
  }

  convertDateTime = (d) => {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());
    let hour = d.getHours()-2;
    let minute = String(d.getMinutes());
    
    if (hour<0) hour += 24;
    hour = String(hour);
    if (hour.length < 2) hour = '0' + hour;
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (minute.length < 2) minute = '0' + minute;
    
    return `${day}/${month}/${year} ${hour}:${minute}`
  }

  async getPatient() {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/rendez_vous');
      const json = await response.json();
      let liste_rendez_vous = []
      json.forEach(rendez_vous => {
        liste_rendez_vous.push([rendez_vous.nom, rendez_vous.prenom, this.convertDate(new Date(rendez_vous.date_naissance)), rendez_vous.num_secu, this.convertDateTime(new Date(rendez_vous.date_rendez_vous)), rendez_vous.nom_vaccin, rendez_vous.quantieme_dose])
      });
      console.log(new Date(json[0].date_rendez_vous).toLocaleDateString('fr-FR'));
      this.setState({ tableData: liste_rendez_vous});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getPatient();
    this.getStockVaccin();
  }

  async getStockVaccin() {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/vaccin');
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }


    renderVaccinList = () => {
      return this.state.data.map((vaccin) => {
        if(vaccin.quantitee_disponible <= 20)
        return <Text style={styles.alerte}>Attention ! La quantitée de vaccin {vaccin.nom_vaccin} est inférieure à 20</Text>
      })
    }

  render() {
    const state = this.state;
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.content}>
          <View style={styles.titreSection}>
            <Text style={styles.titre}>Rendez-vous de vaccination</Text>
          </View>
          <View style={styles.container}>
          <View>
            {this.renderVaccinList()}
          </View>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.textheader}/>
              <Rows data={state.tableData} textStyle={styles.text}/>
            </Table>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 60, backgroundColor: '#89c2d9', overflow: 'hidden'},
  text: { margin: 6, textAlign: 'center' },
  textheader: { margin: 6, textAlign: 'center', color: 'white', fontWeight:'bold'},
  titre: {
    fontSize:20,
    marginTop:15,
    textAlign:'center',
    fontWeight:'bold'
  },
  titreSection: {
    marginBottom:20,
    padding:10
  },
  content: {
    backgroundColor: '#2a6f97',
  },
  alerte: {
    color: 'red',
  }
});
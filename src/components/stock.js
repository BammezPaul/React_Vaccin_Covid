import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Nom du vaccin', 'Stock restant'],
      tableData: [
        ['Pfizer', '27'],
        ['Astrazeneca', '54'],
        ['Moderna', '36'],
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.content}>
          <View style={styles.titreSection}>
            <Text style={styles.titre}>Stock des vaccins</Text>
          </View>
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
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
  head: { height: 40, backgroundColor: '#89c2d9' },
  text: { margin: 6 },
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
});
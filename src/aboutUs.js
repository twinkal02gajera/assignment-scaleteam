import React from 'react';
import {
    StyleSheet, View, Image, Text, FlatList, ImageBackground
} from 'react-native';

class AboutUs extends React.Component {

    render() {
        return (
            <View style={styles.vmMainView}>
                <Text style={styles.tvHeader}>{'About Us'}</Text>
                <View style={styles.vwMain}>
                    <Text style={styles.tvAbout}>{'American Restaurents innovative menu builds upon traditional dishes that guests remember eating at home, as well as street foods that are remembered from carefree days. These memories are revived in a new setting, elegantly modern, functional without being fussy, quick and to the point, a place that welcomes a wide range of patrons, from its many regulars, to first time visitors eager for a taste of America.'}</Text>
                    <Text style={styles.tvContact}>{'Contect : +1 970-600-5620'}</Text>
                    <Text style={styles.tvEmail}>{'E-mail : amreican@gmail.com'}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    vmMainView: {
        flex: 1,
        backgroundColor: "#2f2f37",

    },
    vwMain: {
        padding: 20,
        marginLeft: 20,

    },
    tvAbout: {
        color: '#E2DFDF',
        fontSize: 20,
        letterSpacing: 1,

    },
    tvHeader: {
        color: 'white',
        fontSize: 40,
        marginTop: 60,
        letterSpacing: 2,
        fontWeight: 'bold',
        marginLeft: 40,


    },
    tvContact: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'

    },
    tvEmail: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },




})
export default AboutUs;
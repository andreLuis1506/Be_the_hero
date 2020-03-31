import {StyleSheet} from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 2,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText:{
        fotSize: 15,
        color: '#737380',
    },  
    
    title:{
        fotSize: 30,
        marginBotom: 165,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fonSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgorundColor: '#fff',
        marginBottom: 16,
    },

    incidentProperty:{
        fontsize: 14,
        color: '#41414d',
        fontWight: 'bold',
    },

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'ceter',
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    },

});
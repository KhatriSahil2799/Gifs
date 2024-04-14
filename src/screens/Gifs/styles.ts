import { StyleSheet, } from 'react-native'

export const getGifsStyles = (themeType: 'dark' | 'light') => {
    return StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            backgroundColor: themeType === 'dark' ? '#121212' : '#B3ECEC',
            paddingHorizontal: 16,
            marginTop: 24
        },

        inputBoxContainer: { 
            width: "100%", 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
        },
        inputBox: { 
            paddingHorizontal: 16, 
            borderRadius: 8, 
            backgroundColor: themeType === 'dark' ? '#8B8B8B' : 'white', 
            flex: 1, 
            marginTop: 18, 
            marginBottom: 12 
        },
        clearButton: { 
            color: themeType === 'dark' ? 'white' : 'black', 
            fontSize: 16, 
            marginLeft: 12 
        },
        renderItemContainer: { 
            marginBottom: 6, 
            borderRadius: 8, 
            overflow: 'hidden' 
        },
        image: { 
            width: "100%", 
            aspectRatio: 1, 
        }   
    })
}
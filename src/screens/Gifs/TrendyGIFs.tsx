import { FlatList, Image, Text, TextInput, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import useGifs from '../../hooks/useGifs'
import useThemeStore from '../../hooks/useThemeStore'
import { getGifsStyles } from './styles'

const TrendyGIFs = () => {
    const [theme, toggleTheme] = useThemeStore((state)=> [state?.theme, state?.toggleTheme])

    const [searchText, setSearchText] = useState("")
    const [localSearchText, setLocalSearchText] = useState("")

    const { data, fetchNextPage, hasNextPage } = useGifs(searchText)

    const gifs = useMemo(() => {
        return data?.pages?.flatMap((page) => page?.data)
    }, [data?.pages])

    const styles = useMemo(() => {
        return  getGifsStyles(theme)
    }, [theme])

    
    return (
        <View>
         <View style={styles.container}>
            <View style={{marginTop:16}}>
                <Text style={{color: theme==='dark'?'white': '#121212'}} onPress={toggleTheme}>Toggle Theme: {theme?.toUpperCase()}</Text>
            </View>
            <View style={styles.inputBoxContainer}>
                <TextInput
                    onChangeText={text => setLocalSearchText(text)}
                    onSubmitEditing={(event) => setSearchText(event.nativeEvent?.text)}
                    value={localSearchText}
                    style={styles.inputBox}
                    placeholder='Search with a keyword'
                    placeholderTextColor={theme==='dark'?'white':undefined}
                    
                />
                <Text style={styles.clearButton} onPress={() => {
                    setLocalSearchText("")
                    setSearchText("")
                }}>Clear</Text>
            </View>
            <FlatList data={gifs}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item?.id}
                onEndReached={() => hasNextPage && fetchNextPage()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.renderItemContainer}>
                            <Image
                                source={{ uri: item?.images?.original?.url }}
                                style={styles.image} />
                        </View>
                    )
                }}
            />

        </View>
        </View>

    )
}

export default TrendyGIFs

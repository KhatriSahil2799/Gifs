import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import useGifs from '../hooks/useGifs'

const TrendyGIFs = () => {
    const [searchText, setSearchText] = useState("")
    const [localSearchText, setLocalSearchText] = useState("")

    const { data, fetchNextPage, hasNextPage } = useGifs(searchText)

    const gifs = useMemo(() => {
        return data?.pages?.flatMap((page) => page?.data)
    }, [data?.pages])

    return (
        <View style={styles.container}>

            <View style={styles.inputBoxContainer}>
                <TextInput
                    onChangeText={text => setLocalSearchText(text)}
                    onSubmitEditing={(event) => setSearchText(event.nativeEvent?.text)}
                    value={localSearchText}
                    style={styles.inputBox}
                    placeholder='Search with a keyword'
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
    )
}

export default TrendyGIFs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#B3ECEC',
        paddingHorizontal: 16,
        marginTop: 24
    },
    inputBoxContainer: { width: "100%", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    inputBox: { paddingHorizontal: 16, borderRadius: 8, backgroundColor: 'white', flex: 1, marginTop: 18, marginBottom: 12 },
    clearButton: { color: 'black', fontSize: 16, marginLeft: 12 },
    renderItemContainer: { marginBottom: 6, borderRadius: 8, overflow: 'hidden' },
    image: { width: "100%", aspectRatio: 1, }
})
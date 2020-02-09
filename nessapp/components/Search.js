import React from "react"
import { View, Button, TextInput, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native'
import films from './helpers/filmsData.js'
import FilmItem from './FilmsItem';
import { getFilmsFromApiWithSearchedText } from './API/TMDBApi';
class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            films: [],
            isLoading: false
         }
         this.searchedText = ""
    }

    _loadFilms() {
        this.setState({ isLoading: true })
        if (this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data =>
                 {
                this.setState({ 
                    films: data.results,
                isLoading: false
            })
            })  
        }
    }

    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
              {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
            </View>
          )
        }
      }
      
      _displayDetailForfilm = (idFilm) => {
          this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
      }
  

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render() {
        console.log(this.state.isLoading)
        return(
            <View style={{marginTop: 60, flex: 1}}>
                <TextInput onSubmitEditing={() => this._loadFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder="Rechercher un film"/>
                <Button title="Rechercher" onPress={() => this._loadFilms()}/>
                <FlatList
                data={this.state.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item} _displayDetailForfilm={this._displayDetailForfilm}/>}
                />
                {this._displayLoading()}
 
            </View>

        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        marginTop: -50
    },
    loading_container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
})

export default Search


import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Search from '../Search'
import FilmDetail from '../filmDetail';

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }

    },
    FilmDetail: {
        screen: FilmDetail
    }
})

export default createAppContainer(SearchStackNavigator)
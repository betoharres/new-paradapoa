import React, {useState, useContext} from 'react'
import {Platform} from 'react-native'
import {shape, func} from 'prop-types'
import {SearchBar, ListItem} from 'react-native-elements'
import {Container} from './Home.styles'

import {DatabaseContext} from '~/app/database'

export default function Home({navigation}) {
  const [search, setSearch] = useState('')
  const [busList, setBusList] = useState([])
  const conn = useContext(DatabaseContext)

  async function onPressBus(bus) {
    navigation.navigate('Bus', {bus})
  }

  async function onChangeSearchField(text) {
    setSearch(text)
    const [result] = await conn.executeSql(
      `SELECT * FROM buses WHERE code LIKE '%${text}%' \
        OR name LIKE '%${text}%' LIMIT 30`
    )
    const searchedBusList = result.rows.raw()
    setBusList(searchedBusList)
  }

  return (
    <Container>
      <SearchBar
        showCancel
        value={search}
        placeholder="Pesquisar..."
        searchIcon={{name: 'search'}}
        clearIcon={{name: 'close'}}
        onChangeText={onChangeSearchField}
        platform={Platform.select({ios: 'ios', android: 'android'})}
      />
      {busList.map((bus) => (
        <ListItem
          key={bus.id}
          title={`${bus.code} - ${bus.name}`}
          onPress={() => onPressBus(bus)}
        />
      ))}
    </Container>
  )
}

Home.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
}

import { Box, Center, Heading, HStack, SearchIcon, StatusBar, Text, VStack, Pressable, Input, KeyboardAvoidingView, Icon, Button, ScrollView, FlatList } from 'native-base'
import { Dimensions, SafeAreaView } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import ButtonList from '../../components/ButtonList'
import CardItem from '../../components/CardItem'


const Search = ({ navigation }) => {
    const [kecamatan, setKecamatan] = useState([
        {
            name: 'Banyuresmi',
            isSelected: false
        },
        {
            name: 'Cibatu',
            isSelected: false
        },
        {
            name: 'Limbangan',
            isSelected: false
        },
        {
            name: 'Pamengpek',
            isSelected: false
        },
        {
            name: 'Cidegug',
            isSelected: false
        }
    ])

    return <SafeAreaView>
        <StatusBar />
        <KeyboardAvoidingView minHeight={Dimensions.get('screen').height}>
            <Box width="full" bgColor="darkBlue.300"  >
                <Center>
                    <Box width="sm" py={5} >
                        <VStack space={4}  >
                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                <Pressable onPress={() => navigation.navigate('Home')} >
                                    <Icon as={<Ionicons name="ios-arrow-back-outline" size={24} />} color={'white'} />
                                </Pressable>
                                <Heading color="white" fontWeight="bold" >
                                    SIGOOGARUT
                                </Heading>
                            </HStack>
                            <Input variant={'rounded'} _dark={{color: 'white'}} placeholder='Cari Tempat oleh oleh disini' bgColor="white" color={'black'} placeholderTextColor={'muted.400'} borderWidth={0} InputLeftElement={<SearchIcon size="5" ml={2} color="muted.400" />} />
                            <FlatList keyExtractor={item => item.name} showsHorizontalScrollIndicator={false} data={kecamatan} horizontal={true} renderItem={({ item }) => <ButtonList isSelected={item.isSelected} name={item.name} />} />
                        </VStack>
                    </Box>
                </Center>
            </Box>
            <ScrollView height={'full'} width={'full'} >
                <Center>
                    <Box mt={3} width={'sm'} >
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </Box>
                </Center>
            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
}

export default Search
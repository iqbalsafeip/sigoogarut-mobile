import { Box, Center, Heading, HStack, SearchIcon, StatusBar, Text, VStack, Pressable, Input, KeyboardAvoidingView, Icon, Button, ScrollView, FlatList, } from 'native-base'
import { SafeAreaView } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

const kecamatan = [
    'Semua',
    'Banyuresmi',
    'Cibatu',
    'Limbangan',
    'Pamengpeuk',
    'Cigedug'
]

const Search = ({ navigation }) => {
    return <SafeAreaView>
        <StatusBar />
        <KeyboardAvoidingView height={'full'}>
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
                            <Input variant={'rounded'} placeholder='Cari Tempat oleh oleh disini' bgColor="white" color={'black'} placeholderTextColor={'muted.400'} borderWidth={0} InputLeftElement={<SearchIcon size="5" ml={2} color="muted.400" />} />
                            <FlatList keyExtractor={item => item} showsHorizontalScrollIndicator={false} data={kecamatan} horizontal={true} renderItem={({item})=> <Button variant={'outline'} mx={1} colorScheme='dark' borderRadius={'40'} size={'sm'} >{item}</Button>} />
                        </VStack>
                    </Box>
                </Center>
            </Box>
        </KeyboardAvoidingView>
    </SafeAreaView>
}

export default Search
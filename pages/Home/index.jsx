import { Avatar, Box, Center, Container, Heading, HStack, Input, Pressable, SearchIcon, Text, VStack } from 'native-base';
import { View, StatusBar, SafeAreaView, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Navigation from '../../components/Navigation';


const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar />
            <Box height={"full"} >
                <Box width="full" bgColor="darkBlue.300" height="1/4" shadow={4} >
                    <Center>
                        <Box width="sm" py={5} height="full">
                            <VStack justifyContent="space-between" height="full" >
                                <Heading color="white" fontWeight="bold" >
                                    SIGOOGARUT
                                </Heading>
                                <HStack justifyContent="space-between" alignItems="center">
                                    <Box width="1/2" >
                                        <Text fontWeight={'bold'} color={'white'} fontSize={18} >M Iqbal Ismail Safei</Text>
                                        <Text fontWeight={'light'} color={'white'} fontSize={12} >Garut, 26 Agustus 2022</Text>
                                    </Box>
                                    <Avatar bgColor="indigo.300" size="lg" >
                                    </Avatar>
                                </HStack>
                                <Pressable borderRadius={20} width="full" height={10} bgColor="white" px={3} justifyContent="center" onPress={()=> navigation.navigate('Search')} >
                                    <HStack alignItems="center" space={3} >
                                        <SearchIcon size="4" />
                                        <Text fontWeight="light" >Cari Tempat Oleh Oleh Terbaikmu disini</Text>
                                    </HStack>
                                </Pressable>
                            </VStack>
                        </Box>
                    </Center>
                </Box>
                <Box bgColor="warning.900" flex={10}>
                    <MapView style={{ width: '100%', height: '100%' }}></MapView>
                </Box>
                <Navigation />
            </Box  >
        </SafeAreaView>
    )
}

export default Home;

import { AspectRatio, Avatar, Box, Button, Center, Divider, Heading, HStack, Icon, Image, Input, KeyboardAvoidingView, ScrollView, SearchIcon, Text, View, VStack } from "native-base"
import { Dimensions, Pressable, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import MapView from "react-native-maps";
import StaggerOpt from "../../components/Stagger";

const Detail = ({ navigation }) => {
    return (
        <Box height={Dimensions.get('screen').height} flex={1} width={'full'}>
            <Box width="full" bgColor="darkBlue.300"  >
                <Center>
                    <Box width="sm" py={5} >
                        <VStack space={4}  >
                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                <Pressable onPress={() => navigation.navigate('Search')} >
                                    <Icon as={<Ionicons name="ios-arrow-back-outline" size={24} />} color={'white'} />
                                </Pressable>
                                <Heading color="white" fontWeight="bold" >
                                    SIGOOGARUT
                                </Heading>
                            </HStack>
                        </VStack>
                    </Box>
                </Center>
            </Box>
            <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }} alt="image" />
                </AspectRatio>
                <Center bg="darkBlue.400" borderTopRightRadius={20} _dark={{
                    bg: "blue.600"
                }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "md"
                }} position="absolute" bottom="0" px="3" py="1.5">
                    Oleh Oleh Mang Ading
                </Center>
            </Box>
            <ScrollView width={'full'} >
                <Center   >
                    <VStack space={3} width={'sm'} mt={3}   >
                        <Divider color={'gray.800'} />
                        <HStack justifyContent={'space-evenly'} padding={2} borderRadius={'lg'}  >
                            <VStack justifyContent={'center'} alignItems={'center'} space={2} width={'1/2'} >
                                <Icon as={Ionicons} name="calendar" size={'lg'} color={'black'} />
                                <Heading size={'md'} color={'black'} >
                                    Hari Buka
                                </Heading>
                                <Text color={'black'} fontWeight={'bold'} >Senin - Jumat</Text>
                            </VStack>
                            <Divider color={'gray.800'} orientation="vertical" />
                            <VStack justifyContent={'center'} alignItems={'center'} space={2} width={'1/2'} >
                                <Icon as={Ionicons} name="time" size={'lg'} color={'black'} />
                                <Heading size={'md'} color={'black'} >
                                    Jam Buka
                                </Heading>
                                <Text color={'black'} fontWeight={'bold'}>07.00AM - 10.00PM</Text>
                            </VStack>
                        </HStack>
                        <Divider color={'gray.800'} />
                        <HStack alignItems={'center'} space={2} >
                            <Icon as={Ionicons} name="person-circle" size={'sm'} color={'black'} />
                            <Heading size={'xs'} >Nama Pemilik</Heading >
                        </HStack>
                        <Text>
                            Mang Juned
                        </Text>
                        <Divider color={'gray.800'} />
                        <HStack alignItems={'center'} space={2} >
                            <Icon as={Ionicons} name="location" size={'sm'} color={'black'} />
                            <Heading size={'xs'} >Alamat</Heading >
                        </HStack>
                        <Text>
                            Jl. Jendral Sudirman, No. 24, Garut Kota. 21142
                        </Text>
                        <Divider color={'gray.800'} />
                        <HStack alignItems={'center'} space={2} >
                            <Icon as={Ionicons} name="call" size={'sm'} color={'black'} />
                            <Heading size={'xs'} >No. Telepon</Heading >
                        </HStack>
                        <Text>
                            0823992138837
                        </Text>
                        <Divider color={'gray.800'} />
                        <HStack alignItems={'center'} space={2} >
                            <Icon as={Ionicons} name="map" size={'sm'} color={'black'} />
                            <Heading size={'xs'} >Lokasi</Heading >
                        </HStack>
                        <Box width={'full'} height={80} borderRadius={'10'} overflow={'hidden'} >
                            <MapView style={{ width: '100%', height: '100%' }} ></MapView>
                        </Box>
                        <HStack alignItems={'center'} space={2} >
                            <Icon as={Ionicons} name="chatbubbles" size={'sm'} color={'black'} />
                            <Heading size={'xs'} >Komentar</Heading >

                        </HStack>
                        <VStack space={3}>
                            <Box>
                                <HStack space={3}>
                                    <Avatar />
                                    <VStack>
                                        <HStack space={2} alignItems={'center'}>
                                            <Heading size={'xs'} >M Iqbal Ismail</Heading>
                                            <Text color={'muted.400'}>24 Januari 2022</Text>
                                        </HStack>
                                        <Text>
                                            "Oleh Oleh nya lengkap keren banget aku suka"
                                        </Text>
                                    </VStack>
                                </HStack>
                            </Box>
                            <Box>
                                <HStack space={3}>
                                    <Avatar />
                                    <VStack>
                                        <HStack space={2} alignItems={'center'}>
                                            <Heading size={'xs'} >M Iqbal Ismail</Heading>
                                            <Text color={'muted.400'}>24 Januari 2022</Text>
                                        </HStack>
                                        <Text>
                                            "Oleh Oleh nya lengkap keren banget aku suka"
                                        </Text>
                                    </VStack>
                                </HStack>
                            </Box>
                            <Box>
                                <HStack space={3}>
                                    <Avatar />
                                    <VStack>
                                        <HStack space={2} alignItems={'center'}>
                                            <Heading size={'xs'} >M Iqbal Ismail</Heading>
                                            <Text color={'muted.400'}>24 Januari 2022</Text>
                                        </HStack>
                                        <Text>
                                            "Oleh Oleh nya lengkap keren banget aku suka"
                                        </Text>
                                    </VStack>
                                </HStack>
                            </Box>
                            <Box>
                                <HStack space={3}>
                                    <Avatar />
                                    <VStack>
                                        <HStack space={2} alignItems={'center'}>
                                            <Heading size={'xs'} >M Iqbal Ismail</Heading>
                                            <Text color={'muted.400'}>24 Januari 2022</Text>
                                        </HStack>
                                        <Text>
                                            "Oleh Oleh nya lengkap keren banget aku suka"
                                        </Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </VStack>
                        <Divider color={'gray.800'} />
                    </VStack>
                </Center>
            </ScrollView>

            <StaggerOpt />
            {/* <Center width={'full'} position={'absolute'} bottom={0} height={'70'} bgColor={'black'} >
                <HStack width={'sm'} justifyContent={'center'} alignItems={'center'} space={1}>
                    <Input width={'2/3'}  placeholder='Berikan Komentar' bgColor="white" color={'black'} placeholderTextColor={'muted.400'} borderWidth={0} InputLeftElement={<Icon as={Ionicons} name="chatbubble-ellipses" size={'5'} ml={2} color={'muted.400'} />} />
                    <Button  >Kirim</Button>
                </HStack>
            </Center> */}
        </Box>
    )
}

export default Detail;
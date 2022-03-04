import { AspectRatio, Box, Center, Heading, HStack, Image, Stack, Text, Icon, Pressable } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

const CardItem = () => {
    const navigation = useNavigation()

    return <Pressable alignItems="center" my={2} onPress={()=> navigation.navigate('Detail')} >
        <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }}>
            <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }} alt="image" />
                </AspectRatio>
                <Center bg="darkBlue.500" _dark={{
                    bg: "darkBlue.400"
                }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                }} position="absolute" bottom="0" px="3" py="1.5">
                    PHOTOS
                </Center>
            </Box>
            <Stack p="4" space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        The Garden City
                    </Heading>
                    <Text fontSize="xs" _light={{
                        color: "darkBlue.500"
                    }} _dark={{
                        color: "darkBlue.400"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                    </Text>
                </Stack>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center" space={2}>
                        <Icon as={MaterialIcons} name="comment" size={23} />
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="400">
                            7 Komentar
                        </Text>
                    </HStack>
                </HStack>
            </Stack>
        </Box>
    </Pressable>;
};

export default CardItem
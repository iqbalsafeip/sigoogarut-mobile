import { Box, Center, HStack, Icon, NativeBaseProvider, Text } from "native-base";
import React from "react";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Pressable } from "react-native";

function Navigation() {
    const [selected, setSelected] = React.useState(1);
    return <NativeBaseProvider>
        <Box  bg="darkBlue.300" height="60" position={'absolute'} bottom={0} safeAreaTop width="100%" alignSelf="center"  shadow={6}  overflow={'hidden'} justifyContent={'center'} zIndex={100}  >
            <HStack bg="darkBlue.300" alignItems="center" safeAreaBottom zIndex={999} >
                <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
                    <Center>
                        <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? "home" : "home-outline"} />} color="white" size="sm" />
                        <Text color="white" fontSize="12">
                            Home
                        </Text>
                    </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
                    <Center>
                        <Icon mb="1" as={<MaterialCommunityIcons name={selected === 1 ? "account-heart" : "account-heart-outline"} color="black" />} color="white" size="sm" />
                        <Text color="white" fontSize="12">
                            Favorite
                        </Text>
                    </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
                    <Center>
                        <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? "account" : "account-outline"} />} color="white" size="sm" />
                        <Text color="white" fontSize="12">
                            Account
                        </Text>
                    </Center>
                </Pressable>
            </HStack>
        </Box>
    </NativeBaseProvider>
        ;
}

export default Navigation
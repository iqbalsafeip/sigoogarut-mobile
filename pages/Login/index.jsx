import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, VStack, Text } from "native-base";

const Login = ({navigation}) => {
    return <Center w="100%" height={'full'} >
        <Box safeArea p="2" py="8" w="90%">
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Selamat Datang di SIGOOGARUT
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input placeholder="Masukan Email disini" />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" placeholder="Masukan Password disini" />
                    <Link _text={{
                        fontSize: "xs",
                        fontWeight: "500",
                        color: "indigo.500"
                    }} alignSelf="flex-end" mt="1">
                        Forget Password?
                    </Link>
                </FormControl>
                <Button mt="2" colorScheme="blue" onPress={()=> navigation.navigate('Home')} >
                    Sign in
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                        I'm a new user.{" "}
                    </Text>
                    <Link _text={{
                        color: "indigo.500",
                        fontWeight: "medium",
                        fontSize: "sm"
                    }} onPress={()=> navigation.navigate('Register')}>
                        Sign Up
                    </Link>
                </HStack>
            </VStack>
        </Box>
    </Center>;
};

export default Login
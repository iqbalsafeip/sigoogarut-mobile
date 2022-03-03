import { Box, Button, Center, FormControl, Heading, Input, VStack } from "native-base";

const Register = ({navigation}) => {
    return <Center w="100%" height={'full'}>
        <Box safeArea p="2" w="90%"  py="8">
            <Heading size="lg" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }} fontWeight="semibold">
                Selamat Datang di SIGOOGARUT
            </Heading>
            <Heading mt="1" color="coolGray.600" _dark={{
                color: "warmGray.200"
            }} fontWeight="medium" size="xs">
                Daftar sekarang juga!
            </Heading>
            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input placeholder="Masukan Email Disini" />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" placeholder="Masukan Password Disini" />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <Input type="password" placeholder="Konfirmasi Password disini" />
                </FormControl>
                <Button mt="2" colorScheme="blue" onPress={()=> navigation.navigate('Login')} >
                    Sign up
                </Button>
            </VStack>
        </Box>
    </Center>;
};

export default Register
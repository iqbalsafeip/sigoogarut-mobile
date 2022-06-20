import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Input,
  Pressable,
  SearchIcon,
  Text,
  VStack,
} from "native-base";
import { View, StatusBar, SafeAreaView, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Navigation from "../../components/Navigation";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataTempat } from "../../utils/redux/actions";

const Home = ({ navigation }) => {
  const [location, setLocation] = useState({});
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.mainReducer.user);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    (async () => {
      await dispatch(dataTempat()).then((res) => {
        setData((d) =>
          res.data.data.map((e) => ({ id: e.id, ...e.attributes }))
        );
      });
      //   alert(JSON.stringify(data));

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let _location = await Location.getCurrentPositionAsync({});
      setLocation(_location.coords);
      alert(JSON.stringify(_location));
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <StatusBar />
      <Box height={"full"}>
        <Box width="full" bgColor="darkBlue.300" height="1/4" shadow={4}>
          <Center>
            <Box width="sm" py={5} height="full">
              <VStack justifyContent="space-between" height="full">
                <Heading color="white" fontWeight="bold">
                  SIGOOGARUT
                </Heading>
                <HStack justifyContent="space-between" alignItems="center">
                  <Box width="1/2">
                    <Text fontWeight={"bold"} color={"white"} fontSize={18}>
                      {user.username}
                    </Text>
                    <Text fontWeight={"light"} color={"white"} fontSize={12}>
                      {new Date(Date.now()).toDateString()}
                    </Text>
                  </Box>
                  <Avatar bgColor="indigo.300" size="lg"></Avatar>
                </HStack>
                <Pressable
                  borderRadius={20}
                  width="full"
                  my={1}
                  height={10}
                  bgColor="white"
                  px={3}
                  justifyContent="center"
                  onPress={() => navigation.navigate("Search")}
                >
                  <HStack alignItems="center" space={3}>
                    <SearchIcon size="4" />
                    <Text fontWeight="light">
                      Cari Tempat Oleh Oleh Terbaikmu disini
                    </Text>
                  </HStack>
                </Pressable>
              </VStack>
            </Box>
          </Center>
        </Box>
        <Box bgColor="warning.900" flex={10}>
          {!isLoading && (
            <MapView
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation={true}
              style={{ width: "100%", height: "100%" }}
            >
              <Marker
                coordinate={{
                  longitude: location.longitude,
                  latitude: location.latitude,
                }}
                title={"Lokasimu sekarang"}
              />
              {data.map((map, i) => (
                <Marker
                  coordinate={{
                    longitude: map.longitude * 1,
                    latitude: map.latitude * 1,
                  }}
                  image={require("../../assets/images/shop.png")}
                  title={map.name}
                />
              ))}
            </MapView>
          )}
        </Box>
        <Navigation />
      </Box>
    </>
  );
};

export default Home;

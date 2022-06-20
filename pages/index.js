import Detail from "./Detail";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Box } from "native-base";
import { checkLogin } from "../utils/redux/actions";

const pages = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Search",
    component: Search,
  },

  {
    name: "Detail",
    component: Detail,
  },
];

const authPages = [
  {
    name: "Login",
    component: Login,
  },
  {
    name: "Register",
    component: Register,
  },
];

const Stack = createNativeStackNavigator();

export default function Screen() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.mainReducer.isLogin);
  const routes = isLogin ? pages : authPages;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    dispatch(checkLogin());
    setLoading(false);
  }, []);

  const Loading = (_) => (
    <Box w={"full"} h={"full"}>
      Loading ...
    </Box>
  );
  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {routes.map((e, i) => (
          <Stack.Screen
            options={{ headerShown: false }}
            key={i}
            name={e.name}
            component={e.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

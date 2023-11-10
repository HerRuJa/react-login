import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Boody from "./src/components/Boody";
import Futer from "./src/components/Futer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import {appi} from "./src/utils/connection";
import Auth from "./src/components/Auth";


export default function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {

    const auth = getAuth(appi);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        console.log(user)
        setUser(user)
      } else {
        // User is signed out
        // ...
        console.log(user)
      }
    });
  }, [user]);
  if (user === undefined) return null


  return (
    <View style={styles.container}>
      <Text>Bienvenidos</Text>
      {user ? <Text>Usuario Logeado</Text> : <Auth/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

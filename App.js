

import { TailwindProvider } from 'tailwindcss-react-native';
import {Pokemon} from './components';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator,StyleSheet,Image, ScrollView, Text, View } from 'react-native';



export default function App() {
  const [url, setUrl] = useState('https://www.pokemon.com/us/api/pokedex');
  const [pokemon, setPokemon] = useState([]);
  const[state,setState]=useState(false);
  const getPoke = async () => {
    try {
     const response = await fetch(url);
     const json = await response.json();
     
     setPokemon(json);
   
   } catch (error) {
     console.error(error);
     setState(true);
   } 
 }
  
  
  

 useEffect(() => {
  getPoke();
}, []);

  return (
    <TailwindProvider>
    <View className="items-center bg-blue-300">

    {state ? <ActivityIndicator/> : (
        
            <ScrollView className="mt-11">
            
            {pokemon.map((item, index) => (
                     
                     <View className="h-40 w-64 mt-9  items-center justify-top bg-green-400 br-sm rounded-lg">
                     <Text>{item.name}</Text>
                     <Image className="w-24 h-24" key={item.id}
          
          source={{ uri: item.ThumbnailImage }}
        />
   
                  </View>
                  ))
            }
            </ScrollView>
           
          
        
      )}

    </View>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

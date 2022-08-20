

import { TailwindProvider } from 'tailwindcss-react-native';
import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {
    const[url,setUrl] = props.url;
    const[state,setState] = useState(false);
    const[data,setData] = useState([]);
    const[habilities,setHabilities] = useState([]);


    const getPokeName = async () => {
        try {
        setUrl(props.url)
         const response = await fetch(url);
         const json = await response.json();
         
         setData(json.forms);
        setHabilities(json.types);
         console.log(json.next)
       } catch (error) {
         console.error(error);
         setState(true);
       } 
     }

     useEffect(() => {
        getPokeName();
      }, []);

    return (
        <TailwindProvider>
        <Div clasname="mt-13 h-24 w-24 fg-green-200">
        

        </Div>
        </TailwindProvider>
    );
};


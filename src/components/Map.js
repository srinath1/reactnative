import React,{useContext} from 'react'
import{ StyleSheet,Text,ActivityIndicator} from 'react-native'

import { Context as LocationContext} from '../context/LocationContext'
import MapView ,{Polyline}from 'react-native-maps'

const Map=()=>{
    const { currentLocation}=useContext(LocationContext)
    
    console.log(currentLocation)
    
    
    if(!currentLocation){
        return <ActivityIndicator  size="large"  style={{marginTop:200}} />
    }  
    
    return <MapView 
    style={styles.map}
    

    
     />
        

         
}

const styles=StyleSheet.create({
    map:{
        height:300
    }
})
export default Map
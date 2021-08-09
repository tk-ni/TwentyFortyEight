import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async (key) =>{
    try{
        let value = await AsyncStorage.getItem(key);
        return value;
    }catch(e){
        console.log(e);
        return null;
    }
}

export const setItem = async (key, value) =>{
    try{
        await AsyncStorage.setItem(key,value);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}

export const KEYS = {
    NAME_KEY: 'NAME_KEY'
}
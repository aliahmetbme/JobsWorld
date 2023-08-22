import {Dimensions} from "react-native"
import {useEffect, useState} from "react"
export default function useLandScape () {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const [landScape, setLandScape] = useState(width > height);
  
    useEffect(() => {
      const subscription = Dimensions.addEventListener('change', ({ window }) => {
        const newWidth = window.width;
        const newHeight = window.height;
        setLandScape(newWidth > newHeight);
      });
      return () => subscription?.remove();
    }, []);

    return {landScape}
}
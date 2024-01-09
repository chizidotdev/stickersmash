import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSrc, selectedImage }) {
    const imageSrc = selectedImage ? { uri: selectedImage } : placeholderImageSrc;

    return <Image source={imageSrc} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});

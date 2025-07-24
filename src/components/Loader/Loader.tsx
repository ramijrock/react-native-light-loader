import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { LoaderProps } from './Loader.types';
import Modal from 'react-native-modal';
import { loaderColor } from './Loader.constant';

const Loader: React.FC<LoaderProps> = ({ size = 40, color = '#007AFF', style, visible=false }) => {
    const [value, setValue] = useState<number>(0);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(visible);
    
    const updateValue = useCallback(() => {
        setValue((prev) => (prev == loaderColor.length - 1 ? 0 : prev + 1));
    }, []);

    useEffect(() => {
        const interval = setInterval(updateValue, 1000);

        return () => clearInterval(interval);
    }, [updateValue]);

    useEffect(() => {
        const timeOutID = setTimeout(() => {
            setIsModalVisible(visible);
        }, 2000);

        return () => clearTimeout(timeOutID);
    }, [visible]);

  return (
    <Modal
        animationIn="pulse"
        animationOut="pulse"
        coverScreen={true}
        backdropColor='#454545'
        isVisible={isModalVisible}
    >
        <ActivityIndicator size={size} color={color ||loaderColor[value]} />
    </Modal>
  );
};

export default Loader;

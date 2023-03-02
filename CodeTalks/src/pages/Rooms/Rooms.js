import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList} from "react-native";
import RoomsCard from "../../components/Cards/RoomsCard/RoomsCard";
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modal/ContentInputModal';
import parsedContentData from '../../utils/parseContentData';
import database from '@react-native-firebase/database';
import { showMessage } from "react-native-flash-message";
import styles from './Rooms.style';

const Rooms = ({navigation}) => {
    const [inputModalVisible, setInputModalVisible] = React.useState(false);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        database().ref('Rooms/').on('value', snapshot => {
            const contentData = (snapshot.val());
            const parsedData = parsedContentData(contentData || {});
            setRooms(parsedData);
        })
    }, []);

    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);
    }

    function handleSendContent(content) {
        handleInputToggle();
        sendContent(content);
        showMessage({
            message: 'Oda Oluşturuldu',
            type: 'success',
          });
    }

    const sendContent = content => {
        const RoomObject = {
            text: content,
            date: (new Date()).toISOString(),
        }
            database().ref('Rooms/').push(RoomObject);
            
    }; 

    const handleRoomsDetail = item => {
        navigation.navigate('MessagesPage', {item});
    }

    const renderItem = ({item}) => 
    <RoomsCard name={item.text} onPress={() => handleRoomsDetail(item)} />

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={rooms}  renderItem={renderItem} numColumns="2"/>
            <FloatingButton icon="plus" onPress={handleInputToggle}/>
            <ContentInputModal
            button="Ekle"
            visible={inputModalVisible} 
            onClose={handleInputToggle}
            onSend={handleSendContent}
            placeholder="Oda adı giriniz.."/>
        </SafeAreaView>
    )
}

export default Rooms;
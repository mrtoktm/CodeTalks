import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable} from "react-native";
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modal/ContentInputModal';
import parseContentData from '../../utils/parseContentData';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import MessagesCard from "../../components/Cards/MessagesCard/MessagesCard";
import styles from './Messages.style';

const Messages = ({route}) => {
    const {item} = route.params;

    const [inputModalVisible, setInputModalVisible] = React.useState(false);
    const [messagesList, setMessagesList] = useState([]);

    useEffect(() => {
        database()
          .ref(`Rooms/${item.id}/${item.text.split('#')[0]}`)
          .on('value', snapshot => {
            const newContentData = snapshot.val();
            const parsedData = parseContentData(newContentData || {});
            setMessagesList(parsedData);
          });
      }, [item.id, item.name]);

    const deleteMessages = (index) => {
      const newList = [...messagesList];
      newList.splice(index, 1);
      setMessagesList(newList);
      database()
      .ref(`Rooms/${item.id}/${item.text.split('#')[0]}`)
      .remove(() => {setMessagesList});
    }

    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);
    }

    function handleSendContent(content) {
        handleInputToggle();
        sendContent(content);
    }

    const sendContent = content => {
        const userMail = auth().currentUser.email;
    
        const contentData = {
          message: content,
          username: userMail.split('@')[0],
          date: new Date().toISOString(),
        };
        database()
          .ref(`Rooms/${item.id}/${item.text.split('#')[0]}/`)
          .push(contentData);
      };
    
      const renderMessages = ({item}) => <MessagesCard user={item} />;

      return (
        <View style={styles.container}>
          <Text style={styles.room_name}>{item.text} odası kuruldu!</Text>
          <Pressable onLongPress={() => deleteMessages()}>
          <FlatList data={messagesList} renderItem={renderMessages} />
          </Pressable>
          <FloatingButton icon="plus" onPress={handleInputToggle} />
          <ContentInputModal
            button="Gönder"
            visible={inputModalVisible}
            onClose={handleInputToggle}
            onSend={handleSendContent}
            placeholder="Mesaj gir.."
          />
        </View>
      );
}

export default Messages;
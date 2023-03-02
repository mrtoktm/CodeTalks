import {View, Text} from 'react-native';
import React from 'react';
import styles from './MessagesCard.style';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessagesCard = ({user}) => {
  const formattedDate = formatDistance(parseISO(user.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <Text style={styles.username}>{user.username}</Text>
        <Text>{formattedDate}</Text>
      </View>
      <View style={styles.message_container}>
        <Text style={styles.message}>{user.message}</Text>
      </View>
    </View>
  );
};

export default MessagesCard;
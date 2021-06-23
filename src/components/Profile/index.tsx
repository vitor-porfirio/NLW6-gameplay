import React from 'react';
import {View, Text} from 'react-native';

import {Avatar} from '../Avatar';

import {styles} from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/vitor-porfirio.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Ola,</Text>

          <Text style={styles.username}>Porfirio</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitoria!</Text>
      </View>
    </View>
  );
}

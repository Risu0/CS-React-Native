import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import colors from '../misc/colors';
import RoundIconBtn from './RoundIconBtn';

const NoteInputModal = ({ visible, onClose, onSubmit, note, isEdit }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [isEdit]);

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'desc') setDesc(text);
  };

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();

    if (isEdit) {
      onSubmit(title, desc, Date.now());
    } else {
      onSubmit(title, desc);
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  const closeModal = () => {
    if (!isEdit) {
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType='fade'>
        <View style={styles.container}>
          <TextInput
            value={title}
            onChangeText={text => handleOnChangeText(text, 'title')}
            placeholder='Title'
            placeholderTextColor="#818181"
            style={[styles.input, styles.title]}
          />
          <TextInput
            value={desc}
            multiline
            placeholder='Note'
            placeholderTextColor="#818181"
            style={[styles.input, styles.desc]}
            onChangeText={text => handleOnChangeText(text, 'desc')}
          />
          <View style={styles.btnContainer}>
            <RoundIconBtn
              size={15}
              antIconName='check'
              onPress={handleSubmit}
            />
            {title.trim() || desc.trim() ? (
              <RoundIconBtn
                size={15}
                style={{ marginLeft: 15 }}
                antIconName='close'
                onPress={closeModal}
              />
            ) : null}
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: '#0F0F0F',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFA500',
    fontSize: 20,
    color: "#B7B7B7",
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: 'bold',
    backgroundcolor: 'red',
  },
  desc: {
    height: 100,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
});

export default NoteInputModal;

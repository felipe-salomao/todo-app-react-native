import { useState } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Platform,
  Keyboard,
} from 'react-native';
import { styles } from './AddFormStyles';
import AddIcon from '../../assets/addIcon.svg';

const AddForm = (props) => {
  const [currentValue, setCurrentValue] = useState('');

  const submitForm = () => {
    if (currentValue !== '') {
      props.addTodo(currentValue);
      setCurrentValue('');
      Keyboard.dismiss();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.addFormContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput
        style={styles.inputField}
        value={currentValue}
        onChangeText={setCurrentValue}
        placeholder="Adicione sua tarefa..."
        onSubmitEditing={submitForm}
        maxLength={50}
      />
      <Pressable style={styles.addButton} onPress={submitForm}>
        <AddIcon height={18} />
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default AddForm;

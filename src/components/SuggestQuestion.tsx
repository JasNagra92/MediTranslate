import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import email from 'react-native-email';

const SuggestQuestion = () => {
  const [question, setQuestion] = useState<string>('');

  const handleEmail = () => {
    const to = ['jasnagra92@hotmail.com'];
    email(to, {
      subject: 'Question Suggestion',
      body: question,
      checkCanOpen: false,
    }).catch(console.error);
  };

  return (
    <View style={style.mainContainer}>
      <View>
        <Text style={style.heading}>Suggest your question below</Text>
      </View>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Suggest a question..."
          value={question}
          onChangeText={setQuestion}
          style={style.questionInput}
          multiline={true}
        />
      </View>
      <View>
        <TouchableOpacity style={style.submitBtn} onPress={handleEmail}>
          <Text style={style.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuggestQuestion;

const style = StyleSheet.create({
  mainContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  heading: {
    alignSelf: 'center',
    fontSize: 20,
    marginVertical: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  questionInput: {
    alignSelf: 'center',
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  submitBtn: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#466FFF',
    borderRadius: 15,
    width: '80%',
    height: 57,
    marginVertical: 20,
  },
  submitText: {
    color: 'white',
    fontWeight: '700',
  },
});

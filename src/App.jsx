import './App.css';
import React, { useState, useEffect } from 'react';
import {FormControl, Input, InputLabel} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import Message from './components/Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {username:'The Person', text:'Welcome to Person Chat'}
  ]);
  const [username, setUsername] = useState('Person');

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp', "desc")
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data() ))
    })
  }, []);
  useEffect( () => {
    setUsername(prompt('Enter your name: '));
  }, [] );
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>You Say:</h1>
      <form className="form__flexit">
        <FormControl className="formc__flexit">
        <Input value={input} onChange={event => setInput(event.target.value)} placeholder="Type a message..." className="Input__flexit" />
        </FormControl>
        <Button
        disabled={!input}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
        type="submit" 
        onClick={sendMessage}
      >
        Send
      </Button>
      </form>
      
      {/*messages*/}
      <FlipMove>
        {
          messages.map( message => (
            <Message message={message} username={username} />
          ))
        }
      </FlipMove>
      

    </div>
  );
}

export default App;

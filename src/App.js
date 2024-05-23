
import { useState } from 'react';
import './App.css';
import EmojiPicker,{Emoji} from 'emoji-picker-react';

function App() {
const [emoji,setEmoji]=useState("");

function onClick(emojiData){
setEmoji(emojiData.unified);
}

  return (
    <div className='heading'>
      <h2>Emoji Picker</h2>
      <div className='container'>
{emoji ?<Emoji unified={emoji} size={52}/>:null}
      </div>
    <EmojiPicker onEmojiClick={onClick} />
  </div>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage"
import { useEffect, useState } from "react";
import { addMessage } from "./utils/chatSlice";
import { generateName, makeRandomMessage } from "./utils/helper";


const LiveChat = () => {
  const [liveMessage, setliveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector(store=>store.chat.message)

  useEffect(()=>{
    const t = setInterval(()=>{
        dispatch(addMessage({
            name: generateName(),
            message: makeRandomMessage(25),
        }))
    }, 2000);
    
    return ()=>clearInterval(t)
  }, [])

  return (
    <>
      <div className='p-2 ml-4 border border-black w-full h-[500px] rounded-lg overflow-y-scroll scrollbar-hide bg-slate-100 flex flex-col-reverse'>
        {
            chatMessages.map((c)=>{
               return <ChatMessage name= {c.name} message={c.message}/>
            })
        }
      </div>
      <form className="w-full flex border border-black ml-3 p-2 rounded-lg" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
          name: "Nandini",
          message: liveMessage
        }))
        setliveMessage("");
        
      }}>
        <input value={liveMessage} onChange={(e)=>{
          setliveMessage(e.target.value)
        }} className="w-full p-1 "></input>
        <button className="px-2 ml-2 bg-green-100"> Send </button>

      </form>
    </>
  )
}

export default LiveChat;
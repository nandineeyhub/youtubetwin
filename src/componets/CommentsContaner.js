import React from 'react'

const commentsData = [{
    name: "Nandini",
    text: "Amazing Video 😊😊",
    replies:[
        {
            name: "Raunak",
            text: "Agreed",
            replies:[{
                name: "Nayan",
                text: "yes ❤️",
                replies:[{
                    name: "Meena",
                    text: "Totally",
                    replies:[{
                        name: "Maiytri",
                        text: "Exactly",
                        replies:[],
                    },],
                },],
            },
            {
                name: "Daman",
                text: "Right!!!",
                replies:[],
            },{
                name: "John",
                text: "Amazed",
                replies:[],
            },],
        },
        {
            name: "Abhimanyu",
            text: "💕💕💕💕",
            replies:[],
        },
    ],
},
{
    name: "Radha",
    text: "Amazing Video",
    replies:[{
        name: "priya",
        text: "true",
        replies:[],
    },
    {
        name: "Naveen",
        text: "facts",
        replies:[{
            name: "Janhavi",
            text: "yes!!!",
            replies:[],
        },],
    },
    
    {
        name: "maitri",
        text: "I think it is overrated :)",
        replies:[],
    },],
},
{
    name: "Karan",
    text: "Nice <3",
    replies:[],
},
{
    name: "Chahal",
    text: "Amazing Video",
    replies:[{
        name: "Kalki",
        text: "I agree with you",
        replies:[],
    },
    {
        name: "Rani",
        text: "yes I think so too",
        replies:[],
    },],
},
{
    name: "Hailey",
    text: "Brilliant work",
    replies:[],
},]

const Comment = ({data})=>{
 const {name, text, replies} = data;
  return <div className=' mb-3 flex rounded-lg bg-slate-100 p-2'>
    <img className='w-8 h-8 rounded-full' alt="userimg" src='https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg'></img>
    <div className='px-3'>
     <p className='font-bold'>{name}</p>
     <p>{text}</p>
    </div>
  </div>

}

const CommentList = ({comments})=>{

    return comments.map((comment)=>(<div>
        <Comment data = {comment} />
        <div className='pl-5  border border-l-black ml-5'>
            <CommentList comments={comment.replies}/>
        </div>
    </div>))

}

const CommentsContaner = () => {
  return (
    <div className='px-3 py-5'>
        <h1 className=' text-xl font-bold'>Comments:</h1>
        <CommentList comments = {commentsData}/>
    </div>
  )
}

export default CommentsContaner
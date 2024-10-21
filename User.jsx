import React from 'react'
import '../App.css'
function User({user,signouthandle}) {
  return (
    <>
    <center style={{margin:'auto',padding:'13%',}}>
    
    
    <h1 > <span id='user'>{user.email}</span> </h1>


    <h1>About us</h1>
    <div className="box">
      <p id='loginpara'>🚀 Welcome to ComboCoding! 🌐 <a href=" https://combocoding-com.netlify.app/"> https://combocoding-com.netlify.app/</a> 
<br />
Dive into the ultimate learning experience with ComboCoding, your go-to destination for mastering Data Structures and Algorithms (DSA). Whether you're starting your coding journey, looking to enhance your problem-solving skills, or aiming to crack coding interviews, our platform is designed to guide you every step of the way.

Why Choose ComboCoding?

📚 Extensive DSA Content: Explore a rich library of DSA topics, from basic to advanced levels, curated meticulously for comprehensive learning.
💡 Interactive Learning: Engage with interactive video tutorials and hands-on coding exercises tailored to foster deep understanding and practical skills.
🎓 Expert Guidance: Learn from the best with content created and vetted by industry experts and seasoned educators.
🌍 Community Support: Join a vibrant community of like-minded learners. Share insights, ask questions, and find coding buddies.
🔗 Exclusive Resources: Access additional resources and tools exclusively available to our community members to enhance your learning journey.
Your Path to Coding Excellence Starts Here!
At ComboCoding, we believe in empowering learners with the knowledge and skills needed to excel in the tech industry. Our platform is more than just a learning resource; it's a gateway to unlocking your full coding potential.

Begin Your Journey Today: <a href="https://rb.gy/fep1p5" >  link</a> <br />

Let's code, learn, and grow together with ComboCoding. Happy coding! 🎉</p>
   </div>
    <button className='logout' onClick={signouthandle}>Logout</button>
    </center>
    <h4 style={{color:'rgb(224, 5, 100)'}}>We will be update our website for the future new requirement</h4>
 
    </>
  )
}

export default User
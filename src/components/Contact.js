import React from 'react'


function Contact () {
    return (
        <div className='Container'>
  <p className='Labelname'> Name</p>
  <input type="text" id="text_name" placeholder="Lägg till namn"/>
  <p className='Labelemail'> Email</p>
    <input type="text" id="text_email" placeholder="Lägg till email" />
    <p className='Labelmessage'> Message</p>
    <textarea id="Text_message" placeholder="Lägg till message" rows="4" cols="50"></textarea>
    <button  onclick="testVariable()">Skicka in</button> <br />
    <span id="Outputresult" name="outputresult" rows="4" cols="50"></span>
  </div>
  
) }
  
function testVariable() {
    var Confirmation ="Message sent!";
    var Name = "Namn =";
    var Email = "Email =";
    var Message ="Message =";
    

      var strText = document.getElementById( "Text_name").value;          
      var strText1 = document.getElementById("Text_email").value;
      var strText2 = document.getElementById("Text_message").value;
      var result = Confirmation + ' '  + "\n" +  Name +  ' ' + strText + "\n" + Email + ' ' + strText1  + "\n"+ Message + ' ' + strText2;
      
      document.getElementById('Outputresult').textContent= result;
       
  }
 export default Contact
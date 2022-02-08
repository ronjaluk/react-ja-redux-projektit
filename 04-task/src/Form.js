import "./Form.css";
import View from "./View";
import React, {useState} from "react";

 const Form = () => {
     const [firstName, setFirstName] = useState();
     const [lastName, setLastName] = useState();
     const [phone, setPhone] = useState();
     const [message, setMessage] = useState();
   return(
      <section className="Form">
       <p>Tämä on Formin sisältö</p>
       <h2>Lisätään tähän alapuolella lomakentät</h2>
       <form>

       <div classname="mb-3">
         <label for="firstname" classname="form-label">First name</label>
         <input 
         class="form-control" 
         aria-describedby="firstname" 
         id="firstname" 
         type="text"
         name="firstname"
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}
         />
       </div>
       <div classname="mb-3">
         <label for="lastname" classname="form-label">Last name</label>
         <input 
         class="form-control" 
         aria-describedby="lastname" 
         id="lastname" 
         type="text"
         name="lastname"
         value={lastName}
         onChange={(e) => setLastName(e.target.value)}
         />
       </div>
       <div classname="mb-3">
         <label for="phone" classname="form-label">Phone </label>
         <input 
         class="form-control" 
         aria-describedby="phone" 
         id="phone" 
         type="text"
         name="phone"
         value={phone}
         onChange={(e) => setPhone(e.target.value)}
         />
       </div>
       <div classname="mb-3">
         <label for="message" classname="form-label">Message</label>
         <input 
         class="form-control" 
         aria-describedby="message" 
         id="message" 
         type="text"
         name="firstname"
         value={message}
         onChange={(e) => setMessage(e.target.value)}
         />
       </div>
       </form>
       <h2>Kusutaan komponentista Form komponenttia View</h2>
       <View firstName={firstName} lastName={lastName} phone={phone} message={message}/>
     </section>
    )
 }

export default Form;
import './App.css';

 const user = {
   firstName:"Matti",
   lastName:"Meikäläinen"
 }

 const formatName = () => {
   return user.firstName + " " + user.lastName;
 }

 const Element = () => {
  return (
    <section>
    <h1>Hello, {formatName(user)}!</h1>
    <p>Good to see you here</p>
    </section>
  )
 }

 const App =() => {
   if(user.firstName === "Matti")
   return (
     <div className="App">
     <Element />
     <div/>
   );
 } else {
   return (
     <h1>Hello stranger</h1>
   );
 }
 
 export default App;
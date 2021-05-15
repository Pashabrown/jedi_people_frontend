import {useState} from "react"
import {Link} from "react-router-dom"

function Index(props){
//adding a state to our form
    const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    title: "",
  });

  // handleChange function for form
  //i want to change the property that has the name of the input 
  //and I want the target to match the value
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
      //it just makes sure the page doesnt refresh itself
      //im gonna pass create people the state in our new form
      //after form updates I want it to go back to a blank form
      //so thats why we set new form
    event.preventDefault();
    props.createPeople(newForm);
    setNewForm({
      name: "",
      image: "",
      title: "",
    });
  };

    // loaded function
  const loaded = () => {

    
    return props.people.map((person) => (
      <div key={person._id} className="person">
        <Link to={`/people/${person._id}`}><h1>{person.name}</h1></Link>
        <img src={person.image} alt={person.name} />
        <h3>{person.title}</h3>
      </div>
    ));
  };
  
  const loading = () => {
        return <h1>Loading...</h1>
    }

      
  return <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          //tell the user knows what to type in there
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          //the value is connected to the image 
          value={newForm.image}
          //the name is the image
          name="image"
          //so the user knows what to put in that box
          placeholder="image URL"

          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create Person" />
      </form>
      {props.people ? loaded() : loading()}
    </section>
} 
export default Index
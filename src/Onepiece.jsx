

//const Onepiece = () => {}

function Onepiece(props) {
  return (
    <div className="onepiece-card"> 
     <img className="onepiece-image" src={props.image} alt="onepiece_pic" />
       <h3>DEAD OR ALIVE</h3>
     <h2 className="name" >{props.name}</h2> 
     <h3 className="role" >{props.role}</h3>
      <div className="bounty-badge">
         <span className="bounty-amount">{props.bounty}</span>
      </div>    
    <p className="description" >{props.description}</p>

    </div>   
     );    

}
export default Onepiece;
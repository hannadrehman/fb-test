import {useState} from 'react';
import './App.css';
import userInfo from './user.json';

function App() {
 const [userList] = useState(userInfo.list);
 const [selectedUser, setSelectedUser] = useState();
 const [friends,setFriends] = useState([]);
  function handleClick(item){
	setSelectedUser(item)
	const friends = item.friends.map(friend=>{
	   return userInfo.list.find(usr=>{
		   return usr.id === friend})
	})
	  setFriends(friends)
  }
  return (
    <div className="App">
    <nav className="navbar navbar-light bg-light">
	  <div className="container">
	    <a className="navbar-brand" href="#">
	      <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
	  	      <span class="navbar-brand mb-0 h1" style={{marginLeft:'10px'}}>Facebook</span>
	    </a>
	  </div>
	</nav>
	  <div className="container">
	  <div className="row">
	    <div className="col-sm-3">
	     <ul className="list-group">
	     {
		userList.map(usr=>(
	          <li className="list-group-item" style={{cursor:'pointer'}} onClick={()=>handleClick(usr)} >{usr.name}</li>
		))
	     }
	   </ul>
	    </div>
	  {selectedUser && (
	  	    <div class="col-sm-8">
	      <div>
                 <ul className="list-group">
	          <li className="list-group-item"   style={{textAlign:'left'}} >
		    <p className="lead"> {selectedUser.name}</p>
		    <p className="">Email: {selectedUser.email}</p>
		    <p className="">Phone: {selectedUser.phone}</p>
		    <p className="">Likes: {selectedUser.likes}</p>
		    <h4 className="lead" style={{fontWeight:'bold'}}> Friends</h4>
		   <div className="flex flex-row" style={{display:'flex'}}>
		         {
				friends.map((fr)=>(
				<div class="card" style={{marginRight:'8px'}} >
                                <div class="card-body">
				    <p class="card-text">{fr.name}</p>
				    <p class="card-text">{fr.email}</p>
			         </div>
				</div>
				))
			 }
		  </div>

	        </li>
		</ul>
	     </div>
	    </div>
		  )}

	  </div>
	</div>



	</div>
  );
}

export default App;

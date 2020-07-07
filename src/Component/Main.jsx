import React from 'react';
import Post from './Post';
//import ReactDOM from 'react-dom';


class Main extends React.Component{
    constructor(props){
        super(props); // Call the constructor of React.Component class
        //console.log("constructor()");
      }
      state = {
        posts: [],
        max: 4
      }     
      changeCounter= () => {
        this.setState(
          (state)=>{
                return{
                  likes: state.likes + 1
                };
        })
      }

     componentDidMount(){
        //console.log("componentDidMount()");
    
        fetch("http://localhost:3001/posts")
        .then((response)=>{
          //console.log("Received answer from server");
          return response.json()
        })
        .then((data)=>{
          // console.log( data );
          // this.setState({ videos: data });
          this.setState((prevState)=>{
            //console.log("setState");
            return {
              posts: data
            }
          })
        });
       
      }
    
    render(){
       const { posts } = this.state;
        //console.log(posts);
        
      
        return(
              <>
              {/* Middle Column */}
                <div className="col-md-6">
                  {/* user profile */}
                  <div className="panel panel-default">
                    <img src="../header.png" className="media-object" style={{width: '100%'}} />
                    <div className="panel-body">
                      <button className="btn btn-default">Like</button>
                      <button className="btn btn-default">Share</button>
                    </div>
                  </div>
                  <hr />
                  {/* user profile */}
                  {/* post form */}
                  <form method="post" action="true">
                    <div className="input-group">
                      <input className="form-control" type="text" name="content" placeholder="Make a post..." />
                      <span className="input-group-btn">
                        <button className="btn btn-success" type="submit" name="post">Post</button>
                      </span>
                    </div>
                  </form>
                  <hr />
                  {/* ./post form */}
                  {/* feed */}
                  <div>{
                        posts.slice(0,this.state.max).map((post,index)=>{
                            return <Post key={post.id} img ={post.img} date={post.date} content ={post.content} likes={post.likes} shares = {post.shares}/>
                           
                    })
                    }
                    
                        {/* ./post */}
                    </div>
                  {/* ./feed */}
                  {/* LOGIN FORMS */}
                  <hr />
                  <h4>Login to start enjoying unlimited fun!</h4>
                  {/* login form */}
                  <form method="post" action="home.html">
                    <div className="form-group">
                      <input className="form-control" type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <input className="btn btn-primary" type="submit" name="login" defaultValue="Login" />
                    </div>
                  </form>
                  {/* ./login form */}
                  {/* register form */}
                  <h4>Don't have an account yet? Register!</h4>
                  <form method="post" action="home.html">
                    <div className="form-group">
                      <input className="form-control" type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" name="location" placeholder="Location" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <input className="btn btn-success" type="submit" name="register" defaultValue="Register" />
                    </div>
                  </form>
                  {/* ./register form */}
                  {/*/ LOGIN FORMS */}
                </div>

     
 
  


  

                    </>
                    )
                }
            }
            
export default Main;

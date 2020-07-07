import React from 'react';

class Post extends React.Component{
    constructor(props){
        super(props); // Call the constructor of React.Component class
       // console.log("constructor()");
      }
    state = {
        id: this.props.id,
        date: this.props.date,
        content: this.props.content,
        likes: this.props.likes,
        shares: this.props.shares,
        tags: this.props.tags,
        img: this.props.img
      }

      like = () =>{
          this.setState({
              likes: this.state.likes +1,
          });
      }
      share = () =>{
        this.setState({
            shares: this.state.shares +1,
        });
    }
    render(){
        console.log(this.state);
        return(         
            <div className="panel panel-default">
                <div className="panel-body">
                    <div key={this.state.id}>POST DATE: {this.state.date} 
                    <img src={this.state.img} width="50%"/>                      
                    {this.state.content}
                    <button className="btn btn-default" onClick={this.like}>Likes {this.state.likes}</button>
                    <button className="pull-right btn btn-default" onClick={this.share}>Shares {this.state.shares}</button>

                    </div>
                </div>
            </div>         
           
        );
    
    }
}

export default Post;
import React from "react";
class Users extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h2>
                    {this.props}
                </h2>
            </div>
        )
    }

}
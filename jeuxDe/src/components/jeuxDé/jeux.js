import React, {Component} from "react";

export default class JeuxD extends Component {
    constructor(props){
        super(props)
        this.finValue = Math.floor(Math.random ()* 6) + 1;
        this.state = {
            facePic : null,
            face :null , 
            compteur : 0 ,
            fin : false ,
            btnMessage : "jouer",
            message : "commence tirée"
        }
    }
    initialiser (){
        this.finValue = Math.floor(Math.random ()* 6) + 1;

        this.setState ({
        
            face :null , 
            compteur : 0 ,
            fin : false ,
            btnMessage : "jouer",
            message : "commence tirée"
        })
    }
    jouer (){
        const value = Math.floor(Math.random ()* 6) + 1
        this.setState(
            this.finValue === value ?
            {
                
                face : value , 
                compteur : this.state.compteur + 1 ,
                fin : true ,
                btnMessage : "initialiser",
                message : "tu as trouver le numero cachée"
            } :{
                face : value , 
                compteur : this.state.compteur + 1 ,
                fin : false ,
                btnMessage : "jouer",
                message : "esseyer encore"
            }
        )
    }
    render(){
        return (
            <div>
                <img src="/images/init.PNG" alt="init" width="150"  />
                <h1>
                    ____JEU DE DÉ ....___
                </h1>
                <h4>
                    {this.state.message}
                </h4>
                <h4>
                    face : {this.state.face}
                </h4>
                {
                    this.state.face !== null ?
                    <img src = {`/images/face${this.state.face}.PNG`} alt = "img " width="100" /> : null
                }
                <h4>
                    nombre d'assais : {this.state.compteur}
                </h4>
                <button onClick={
                    () => this.state.fin ? this.initialiser() : this.jouer() 
                }>
                    {this.state.btnMessage}
                </button>
            </div>
        )
    }
}
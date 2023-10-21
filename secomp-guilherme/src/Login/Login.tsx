import React, { Component, ChangeEvent, FormEvent } from 'react';

import './Login.css';
import { signInWithGooglePopup } from '../firebase';

import { db } from "../firebase"
import { addDoc, collection } from 'firebase/firestore';

export default class Login extends Component<any>{

    state:any = {};

    constructor(props: any) {

        super(props)

        this.setState ({ 
            login: "", 
            senha: "" 
        })
    }

    googleLogin = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    };

    salvarLogin = async () => {
   
      const docRef = await addDoc(collection(db, "usuarios"),{
        usuario: this.state
      })
    

    };

    render() {
        return (<div className="container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 loginScreen">
                        <div className="row inputs justify-content-center">
                            <div className="col-12 ibox-col">
                                <div className="form-group">
                                    <label className="text-default">Login</label>
                                    <input type="text" name="codigo" className="form-control" value={this.state.login} onChange={(e) => this.setState({login: e.target.value})}/>
                                </div>
                            </div>

                            <div className="col-12 ibox-col">
                                <div className="form-group">
                                    <label className="text-default">Senha</label>
                                    <input type="password" name="codigo" className="form-control" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/>
                                </div>
                            </div>

                            <div className="col-4 loginButton">
                                <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={this.salvarLogin}>Salvar ogin</button>

                                <div className="col-4 loginButton">
                                    <button type="button" className="btn btn-outline-success btn-lg btn-block" onClick={this.googleLogin}>Google</button>
                                </div>
                                <div className="col-12 ibox-col"></div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        );
    }
}
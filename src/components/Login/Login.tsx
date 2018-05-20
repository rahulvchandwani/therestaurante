import * as React from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/userActions";

interface Props {

}

interface State {
    username: string,
    password: string,
    loginSuccessful: boolean
}

interface StateProps {
    users: any
}

interface DispatchProps {
    getUsers: () => any;
}

class Login extends React.Component<Props & StateProps & DispatchProps, State> {
    constructor(props: Props & StateProps & DispatchProps) {
        super(props);
        this.state = {
            loginSuccessful: false,
            password: "",
            username: ""
        }
    }

    componentWillMount() {
        console.log("this.props.getUsers().users : " + JSON.stringify(this.props.getUsers().users));
    }

    setUsername = (event: any) => {
        this.setState({username: event.target.value});
    }

    setPassword = (event: any) => {
        this.setState({password: event.target.value});
    }

    login = () => {
        if(this.state.username === this.props.getUsers().users[0].username && this.state.password === this.props.getUsers().users[0].password) {
            this.toggleLoginSuccessful();
        }
    }

    toggleLoginSuccessful = () => {
        this.setState({loginSuccessful: !this.state.loginSuccessful});
    }

    render() {
        return (
            <React.Fragment>
                <div className="App-intro">
                    {!this.state.loginSuccessful && 
                        <React.Fragment>
                            <label>Username : </label>
                            <input type="text" onInput={this.setUsername} /><br/>

                            <label>Password : </label>
                            <input type="password" onInput={this.setPassword} /><br/>

                            <input type="submit" value="Login" onClick={this.login} />
                        </React.Fragment>
                    }
                    {this.state.loginSuccessful &&
                        <React.Fragment>
                            <h3>Congratulations!! Login Successful.</h3>
                            <input type="submit" value="Back" onClick={this.toggleLoginSuccessful} />
                        </React.Fragment>
                    }
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUsers: () => dispatch(userActions.loadUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Login);
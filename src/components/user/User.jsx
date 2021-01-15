import './_signUp.scss';
import {createUser, function1} from './User.service';

function  User() {
    return <div className="form-container">
        <form className="signUp-form">
            <h2 className="title">Create user</h2>
            <label htmlFor="Name" className="label">
                Name <input type="text" className="input name" id="Name"/>
            </label>
            <label htmlFor="lastName" className="label">
                Last Name <input type="text" className="input lastName" id="lastName"/>
            </label>
            <label htmlFor="email" className="label">
                Email <input type="email" className="input email" id="email"/>
            </label>
            <label htmlFor="profile" className="label">
                Profile <input type="text" className="input profile" id="profile"/>
            </label>
            <label htmlFor="password" className="label">
                Password <input type="password" className="input password" id="password"/>
            </label>
            <label htmlFor="repeatPassword" className="label">
                Repeat Password <input type="password" className="input repeatPassword" id="repeatPassword"/>
            </label>
            <input onClick={createUser()} type="submit" className="button-send input" value="CREATE"/>
            {function1('Julian Rincon')}
        </form>
    </div>
}

export default User;
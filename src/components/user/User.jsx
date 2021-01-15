import './_signUp.scss';

function  User() {
    return <div class="form-container">
        <form action="" class="signUp-form">
            <h2 class="title">Create user</h2>
            <label for="Name" class="label">
                Name <input type="text" class="input name" id="Name"/>
            </label>
            <label for="lastName" class="label">
                Last Name <input type="text" class="input lastName" id="lastName"/>
            </label>
            <label for="email" class="label">
                Email <input type="email" class="input email" id="email"/>
            </label>
            <label for="profile" class="label">
                Profile <input type="text" class="input profile" id="profile"/>
            </label>
            <label for="password" class="label">
                Password <input type="password" class="input password" id="password"/>
            </label>
            <label for="repeatPassword" class="label">
                Repeat Password <input type="password" class="input repeatPassword" id="repeatPassword"/>
            </label>
            <input type="submit" class="button-send button-create input" value="CREATE"/>
        </form>
    </div>
}

export default User;
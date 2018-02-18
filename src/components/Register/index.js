// Core
import React, { Component } from 'react';
import { func } from 'prop-types';

import { v4 } from 'uuid';
import Styles from './styles.scss';


class Register extends Component {
    static propTypes = {
        createPost: func.isRequired
    };

    state = {
        user: {
            fullName:    '',
            userName:    '',
            uploads:     '',
            download:    '',
            totalItems:  '',
            userStatus:  true,
            points:      '',
            totalIncome: ''
        },
        formError: false
    };

    _onChange = (e) => {
        const field = {
            [e.target.name]: e.target.value
        };


        this.setState(({ user }) => ({ // <- previous state
            user: {
                ...user,
                ...field
            }
        }));
    };

    _handleTextAreaKeyPress = (e) => {
        const enterKey = e.key === 'Enter';

        if (enterKey) {
            e.preventDefault();
            this._onSubmit();
        } else {
            return null;
        }

    };

    _handleSubmit = (e) => {
        e.preventDefault();
        this._onSubmit();
    };


    _onSubmit = () => {

        let error = false;
        const { user } = this.state;

        for (const fild in user) {
            if (!user[fild]) {
                error = true;
            }
        }

        if (error) {
            this.setState({
                formError: true
            });
        } else {
            user.id = v4();
            //console.log(JSON.stringify(user, null, 2))
            this.props.createPost(user);
            this.setState({
                user: {
                    fullName:    '',
                    userName:    '',
                    uploads:     '',
                    download:    '',
                    totalItems:  '',
                    points:      '',
                    totalIncome: '',
                    userStatus:  true
                }
            });
        }
    };

    render () {

        const { user: {
            fullName,
            userName,
            uploads,
            download,
            totalItems,
            points,
            totalIncome
        },
        formError

        } = this.state;

        return (
            <section className = { Styles.register } >
                <form onKeyPress = { this._handleTextAreaKeyPress } onSubmit = { this._handleSubmit } >
                    <input
                        className = { !fullName && formError ? Styles.red : '' }
                        name = 'fullName'
                        placeholder = 'Full name'
                        value = { fullName }
                        onChange = { this._onChange }
                    />
                    <input
                        className = { !userName && formError ? Styles.red : '' }
                        name = 'userName'
                        placeholder = 'User name'
                        value = { userName }
                        onChange = { this._onChange }
                    />
                    <input
                        className = { !uploads && formError ? Styles.red : '' }
                        max = '1000' min = '0'
                        name = 'uploads'
                        pattern = '[0-9]*'
                        placeholder = 'Uploads'
                        type = 'number'
                        value = { uploads }
                        onChange = { this._onChange }
                    />
                    <input
                        className = { !download && formError ? Styles.red : '' }
                        max = '1000' min = '0'
                        name = 'download'
                        pattern = '[0-9]*'
                        placeholder = 'Download'
                        type = 'number'
                        value = { download }
                        onChange = { this._onChange }
                    />
                    <input
                        className = { !totalItems && formError ? Styles.red : '' }
                        max = '1000' min = '0'
                        name = 'totalItems'
                        pattern = '[0-9]*'
                        placeholder = 'Total Items'
                        type = 'number'
                        value = { totalItems }
                        onChange = { this._onChange }
                    />
                    <input
                        className = { !points && formError ? Styles.red : '' }
                        max = '1000' min = '0'
                        name = 'points'
                        pattern = '[0-9]*'
                        placeholder = 'Points'
                        type = 'number'
                        value = { points }
                        onChange = { this._onChange }
                    />
                    <input
                        className = { !totalIncome && formError ? Styles.red : '' }
                        max = '1000000' min = '0'
                        name = 'totalIncome'
                        pattern = '[0-9]*'
                        placeholder = 'Total Income'
                        type = 'number'
                        value = { totalIncome }
                        onChange = { this._onChange }
                    />

                    <input type = 'submit' value = '+ Add new' />
                </form>
            </section>
        );
    }
}


export default Register;

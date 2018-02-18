// Core
import React, { Component } from 'react';
import { oneOfType, string, bool, number, func } from 'prop-types';

import Styles from './styles.scss';

class User extends Component {

    static propTypes = {
        changeUser:  func.isRequired,
        deleteUser:  func.isRequired,
        disableUser: func.isRequired,
        download:    oneOfType([string, number]).isRequired,
        fullName:    string.isRequired,
        id:          string.isRequired,
        points:      oneOfType([string, number]).isRequired,
        row:         number.isRequired,
        totalIncome: oneOfType([string, number]).isRequired,
        totalItems:  oneOfType([string, number]).isRequired,
        uploads:     oneOfType([string, number]).isRequired,
        userName:    string.isRequired,
        userStatus:  bool.isRequired };

    _handleDeleteUser = () => {
        this.props.deleteUser(this.props.id);
    };

    _disableUser = () => {
        this.props.disableUser(this.props.id);
    };
    _changeUser = (e) => {
        this.props.changeUser(this.props.id, e);
    };

    _keyPress = (e) => {
        if (isNaN(String.fromCharCode(e.which))) {
            e.preventDefault();
        }
    };

    render () {
        const {
            fullName,
            userName,
            uploads,
            download,
            totalItems,
            points,
            userStatus,
            totalIncome,
            row } = this.props;

        return (
            <section className = { Styles.user }>
                <div> { row }.    </div>
                <div
                    contentEditable
                    suppressContentEditableWarning
                    data-cell = 'fullName'
                    onBlur = { this._changeUser }>
                    { fullName }
                </div>
                <div
                    contentEditable
                    suppressContentEditableWarning
                    data-cell = 'userName'
                    onBlur = { this._changeUser }>
                    { userName }
                </div>
                <div
                    contentEditable
                    suppressContentEditableWarning
                    data-cell = 'uploads'
                    onBlur = { this._changeUser }
                    onKeyPress = { this._keyPress }>
                    { uploads }
                </div>
                <div
                    contentEditable
                    suppressContentEditableWarning
                    data-cell = 'download'
                    onBlur = { this._changeUser }
                    onKeyPress = { this._keyPress }>
                    { download }
                </div>
                <div>
                    <span
                        contentEditable
                        suppressContentEditableWarning
                        data-cell = 'totalItems'
                        onBlur = { this._changeUser }
                        onKeyPress = { this._keyPress }>
                        { totalItems }
                    </span> items
                </div>
                <div>
                    <label className = { Styles.checkwrapper }>
                        <input checked = { userStatus } type = 'checkbox' onChange = { this._disableUser } />
                        <span className = { Styles.checkmark } />
                    </label>
                </div>
                <div
                    contentEditable
                    suppressContentEditableWarning
                    data-cell = 'points'
                    onBlur = { this._changeUser }
                    onKeyPress = { this._keyPress }>
                    { points }
                </div>
                <div>$
                    <span
                        contentEditable
                        suppressContentEditableWarning
                        data-cell = 'totalIncome'
                        onBlur = { this._changeUser }
                        onKeyPress = { this._keyPress }>
                        { totalIncome }
                    </span>
                </div>
                <div className = { Styles.cross } onClick = { this._handleDeleteUser } />

            </section>
        );
    }
}

export default User;

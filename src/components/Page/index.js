// Core
import React, { Component } from 'react';

import Register from '../Register';
import User from '../User';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Styles from './styles.scss';

class Page extends Component {
    state = {
        posts: []
    };

    componentDidMount () {
        const posts = JSON.parse(localStorage.getItem('users')) || [];

        this.setState({ posts });
    }

    _deleteUser = (id) => {
        this.setState(({ posts }) => ({
            posts: posts.filter((post) => post.id !== id)
        }));
        const data = JSON.parse(localStorage.getItem('users'));
        const posts = data.filter((post) => post.id !== id);

        localStorage.setItem('users', JSON.stringify(posts));

    };


    _createPost = (user) => {
        const data = JSON.parse(localStorage.getItem('users')) || [];

        this.setState(({ posts }) => ({
            posts: [user, ...posts]
        }));

        data.unshift(user);
        localStorage.setItem('users', JSON.stringify(data));

    };


    _disableUser = (id) => {
        this.setState(({ posts }) => ({
            posts: posts.map((post) => {
                if (id === post.id) {
                    post.userStatus = !post.userStatus;
                }

                return post;

            })
        }));

        const data = JSON.parse(localStorage.getItem('users'));
        const posts = data.map((post) => {
            if (id === post.id) {
                post.userStatus = !post.userStatus;
            }

            return post;

        });

        localStorage.setItem('users', JSON.stringify(posts));
    };

    _changeUser = (id, e) => {
        const newValue = e.target.innerHTML;
        const cells = e.target.getAttribute('data-cell');

        this.setState(({ posts }) => ({
            posts: posts.map((post) => {
                if (id === post.id) {
                    post[cells] = newValue;
                }

                return post;
            })
        }));

        const data = JSON.parse(localStorage.getItem('users'));
        const posts = data.map((post) => {
            if (id === post.id) {
                post[cells] = newValue;
            }

            return post;
        });

        localStorage.setItem('users', JSON.stringify(posts));

    };


    render () {
        const { posts: postsData } = this.state;

        const posts = postsData.map((post, index) =>

            (<CSSTransition
                classNames = { {
                    enter:       Styles.postInStart,
                    enterActive: Styles.postInEnd,
                    exit:        Styles.postOutStart,
                    exitActive:  Styles.postOutEnd
                } }
                key = { post.id }
                timeout = { { enter: 700, exit: 600 } } >


                <User
                    key = { post.id }
                    row = { index + 1 }
                    { ...post }
                    changeUser = { this._changeUser }
                    defaultPageSize = { 10 }
                    deleteUser = { this._deleteUser }
                    disableUser = { this._disableUser }
                />

            </CSSTransition>)
        );


        return (
            <div className = { Styles.table }>
                <h1>Users Table</h1>

                <section className = { Styles.tablerow } >
                    <div className = { Styles.index }> #</div>
                    <div> Full Name</div>
                    <div> User Name</div>
                    <div> Uploads</div>
                    <div> Download</div>
                    <div> Total Items</div>
                    <div> User Status</div>
                    <div> Points</div>
                    <div> Total Income</div>

                </section>
                <TransitionGroup>
                    {posts}
                </TransitionGroup>
                <Register createPost = { this._createPost } />
            </div>
        );
    }
}


export default Page;

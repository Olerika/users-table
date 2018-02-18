// Core
import React, { Component } from 'react';
import faker from 'faker';


// Instruments
import Styles from './styles';


import Page from '../../components/Page';

faker.locale = 'ru';
export default class App extends Component {

    //timer = setInterval(() => this.forceUpdate(), 1000);
    componentDidMount () {
        const data = JSON.parse(localStorage.getItem('users')) || [];

        if (!data.length) {
            for (let i = 0; i < 5; i++) {
                data.push({
                    id:          faker.random.uuid(),
                    fullName:    faker.name.firstName(),
                    userName:    faker.name.lastName(),
                    uploads:     faker.random.number(),
                    download:    faker.random.number(),
                    totalItems:  faker.random.number(),
                    userStatus:  true,
                    points:      faker.random.number(),
                    totalIncome: faker.random.number()
                });
            }
            localStorage.setItem('users', JSON.stringify(data));
        }
    }

    render () {
        return (
            <section className = { Styles.app }>
                <Page />

            </section>
        );
    }
}

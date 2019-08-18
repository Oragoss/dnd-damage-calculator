import React from 'react';
import '../App.css';
import RoundsFormGroup from '../molecules/RoundsFormGroup';
import BonusHitFormGroup from '../molecules/BonusHitFormGroup';
import DummyACFormGroup from '../molecules/DummyACFormGroup';

export default class DamageDisplayForm extends React.Component {
    state = {
        mainWeapon: 'GreatSword',   //TODO: make this dynamic
        compareWeapon: 'GreatAxe',
        totalMainWeaponDamage: 0,
        totalCompareWeapon: 0,
        averageMainWeaponDamage: 0,
        averageCompareWeaponDamage: 0,
        targetDummyAC: 10,
        rounds: 100,
        bonusHit: 0
    }

    componentDidMount() {
        this.calculate();
    }

    changeBonusHitDC = (e) => {
        this.setState({
            bonusHit: e.target.value
        }, ()=>{this.calculate()});
    }

    changeTargetDummyAC = (e) => {
        this.setState({
            targetDummyAC: e.target.value
        }, ()=>{this.calculate()});
    }

    changeNumberOfRounds = (e) => {
        this.setState({
            rounds: e.target.value
        }, ()=>{this.calculate()});
    }

    calculate = () => {
        const hitChance = Math.floor((Math.random() * 20) + 1);

        const targetDummyAC = this.state.targetDummyAC;
        const rounds = this.state.rounds;

        let totalGSDamage = 0;
        let totalGADamage = 0;
        let averageGreatSwordDamage = 0;
        let averageGreatAxeDamage = 0;
        const chance = Number(hitChance) + Number(this.state.bonusHit);

        for (let i = 0; i < rounds; i++) {
            let greatSwordHitDie = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
            let greatAxeHitDie = Math.floor((Math.random() * 12) + 1);

            if(chance >= targetDummyAC) {
                if(hitChance === 20) {
                    greatSwordHitDie += Math.floor((Math.random() * 6) + 1);
                    greatAxeHitDie += greatAxeHitDie;
                }

                totalGSDamage += greatSwordHitDie;
                totalGADamage += greatAxeHitDie;
            }
        }

        averageGreatSwordDamage = Number(totalGSDamage/rounds).toFixed(2);
        averageGreatAxeDamage = Number(totalGADamage/rounds).toFixed(2);

        if(chance < targetDummyAC) {
            this.setState({
                totalMainWeaponDamage: "Miss!",
                totalCompareWeapon: "Miss!",
                averageMainWeaponDamage: '',
                averageCompareWeaponDamage: ''
            });
        } else {
            this.setState({
                totalMainWeaponDamage: totalGSDamage,
                totalCompareWeapon: totalGADamage,
                averageMainWeaponDamage: averageGreatSwordDamage,
                averageCompareWeaponDamage: averageGreatAxeDamage
            });
        }
    }

    render() {
        const { totalMainWeaponDamage, totalCompareWeapon, targetDummyAC, bonusHit, rounds, averageMainWeaponDamage, averageCompareWeaponDamage} = this.state;

        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="container">
                        <RoundsFormGroup value={rounds} onChange={this.changeNumberOfRounds}/>
                        <BonusHitFormGroup value={bonusHit} onChange={this.changeBonusHitDC}/>
                        <DummyACFormGroup value={targetDummyAC} onChange={this.changeTargetDummyAC}/>
                        <button type="submit" className="btn btn-success" onClick={this.calculate}>Calculate!</button>
                    </div>
                </div>
                <div className="container text-center main">
                    <h2>After {rounds} rounds</h2>
                    <div className="row">
                        <select className="col-md-3">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <select className="col-md-3">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                <header className="App-header">
                    <div className="row">
                        <span className="col-md-12">Total Greatsword Damage</span>
                        <span className="col-md-12">{totalMainWeaponDamage}</span>
                        <span className="col-md-12">Average Greatsword Damage per Round</span>
                        <span className="col-md-12">{averageMainWeaponDamage}</span>
                    </div>
                    <div className="row">
                        <span className="col-md-12">Total Greataxe Damage</span>
                        <span className="col-md-12">{totalCompareWeapon}</span>
                        <span className="col-md-12">Average Greataxe Damage per Round</span>
                        <span className="col-md-12">{averageCompareWeaponDamage}</span>
                    </div>
                </header>
            </div>
        );
    }
}
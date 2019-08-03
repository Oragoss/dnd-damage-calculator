import React from 'react';
import '../App.css';
import RoundsFormGroup from '../molecules/RoundsFormGroup';
import BonusHitFormGroup from '../molecules/BonusHitFormGroup';
import DummyACFormGroup from '../molecules/DummyACFormGroup';

export default class DamageDisplayForm extends React.Component {
    state = {
        greatswordDamage: 0,
        greataxeDamage: 0,
        targetDummyAC: 10,
        rounds: 100,
        recordedHit: 0,
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

    if(chance < targetDummyAC) {
        this.setState({
            greatswordDamage: "Miss!",
            greataxeDamage: "Miss!",
            recordedHit: chance
        });
    } else {
            this.setState({
            greatswordDamage: totalGSDamage,
            greataxeDamage: totalGADamage,
            recordedHit: chance
            });
        }
    }

    render() {
        const { greatswordDamage, greataxeDamage, targetDummyAC, bonusHit, rounds, recordedHit} = this.state;

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
                <header className="App-header">
                    <div className="row">
                        <span className="col-md-12">Hit was:</span>
                        <span className="col-md-12">{recordedHit}</span>
                    </div>
                    <div className="row">
                        <span className="col-md-12">Greatsword Damage</span>
                        <span className="col-md-12">{greatswordDamage}</span>
                    </div>
                    <div className="row">
                        <span className="col-md-12">Greataxe Damage</span>
                        <span className="col-md-12">{greataxeDamage}</span>
                    </div>
                </header>
            </div>
        );
    }
}
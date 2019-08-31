import React from 'react';
import '../App.css';
import RoundsFormGroup from '../molecules/RoundsFormGroup';
import BonusHitFormGroup from '../molecules/BonusHitFormGroup';
import DummyACFormGroup from '../molecules/DummyACFormGroup';
import weaponData from '../weaponData';

export default class DamageDisplayForm extends React.Component {
    state = {
        mainWeapon: '',
        compareWeapon: '',
        mainWeaponIndex: 0,    //Arbitrary Default 13
        compareWeaponIndex: 0, //Arbitrary Default 15
        totalMainWeaponDamage: 0,
        totalCompareWeapon: 0,
        averageMainWeaponDamage: 0,
        averageCompareWeaponDamage: 0,
        targetDummyAC: 10,
        rounds: 100,
        bonusHit: 0,
        weaponSelectComponent: null
    }

    componentDidMount() {
        const {mainWeaponIndex, compareWeaponIndex} = this.state;
        this.setState({
            mainWeapon: weaponData[mainWeaponIndex].name,
            compareWeapon: weaponData[compareWeaponIndex].name
        }, ()=> this.calculate());
        this.createWeaponOptions();
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

    changeMainWeaponIndex = (e) => {
        const weaponIndex = e.target.value;

        this.setState({
            mainWeaponIndex : weaponIndex,
            mainWeapon : weaponData[weaponIndex].name
        });
    }

    changeCompareWeaponIndex = (e) => {
        const weaponIndex = e.target.value;
        console.log(weaponIndex);

        this.setState({
            compareWeaponIndex : weaponIndex,
            compareWeapon : weaponData[weaponIndex].name
        });
    }

    calculate = () => {
        const targetDummyAC = this.state.targetDummyAC;
        const rounds = this.state.rounds;

        let totalGSDamage = 0;
        let totalGADamage = 0;
        let averageGreatSwordDamage = 0;
        let averageGreatAxeDamage = 0;

        for (let i = 0; i < rounds; i++) {
            let hitChance = Math.floor((Math.random() * 20) + 1);
            let chance = Number(hitChance) + Number(this.state.bonusHit);

            let greatSwordHitDie = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
            let greatAxeHitDie = Math.floor((Math.random() * 12) + 1);

            if(hitChance === 20 || chance >= targetDummyAC) {
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

        this.setState({
            totalMainWeaponDamage: totalGSDamage,
            totalCompareWeapon: totalGADamage,
            averageMainWeaponDamage: averageGreatSwordDamage,
            averageCompareWeaponDamage: averageGreatAxeDamage
        });
    }

    createWeaponOptions = () => {
        const options = weaponData.map((elem, index) => {
            return <option key={`${elem}-${index}`} value={index}>{elem.name}</option>;
        });

        const weaponSelectComponent =
        (<React.Fragment>
            <select className="col-md-3 form-group" onChange={this.changeMainWeaponIndex}>
                {options}
            </select>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <select className="col-md-3 form-group" onChange={this.changeCompareWeaponIndex}>
                {options}
            </select>
        </React.Fragment>);

        this.setState({
            weaponSelectComponent
        });
    }

    render() {
        const {mainWeapon, compareWeapon, totalMainWeaponDamage, totalCompareWeapon, targetDummyAC, bonusHit, rounds, averageMainWeaponDamage, averageCompareWeaponDamage} = this.state;
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
                        {this.state.weaponSelectComponent}
                    </div>
                </div>
                <header className="App-header">
                    <div className="row">
                        <span className="col-md-12">Total {mainWeapon} Damage</span>
                        <span className="col-md-12">{totalMainWeaponDamage}</span>
                        <span className="col-md-12">Average {mainWeapon} Damage per Round</span>
                        <span className="col-md-12">{averageMainWeaponDamage}</span>
                    </div>
                    <div className="row">
                        <span className="col-md-12">Total {compareWeapon} Damage</span>
                        <span className="col-md-12">{totalCompareWeapon}</span>
                        <span className="col-md-12">Average {compareWeapon} Damage per Round</span>
                        <span className="col-md-12">{averageCompareWeaponDamage}</span>
                    </div>
                </header>
            </div>
        );
    }
}
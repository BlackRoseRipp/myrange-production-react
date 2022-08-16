import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiChevronDown } from 'react-icons/hi';
import './DashboardOrgans.css';

const DashboardOrgans = () => {
    

    return (
        <div className="container-fluid p-4">
            <button 
                className='btn btn-menu' 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#organFilterMenu" 
                aria-expanded="false" 
                aria-controls="organFilterMenu"
            >
                <GiHamburgerMenu style={{marginRight: '10px', fontSize: '1.3rem', marginBottom: '3px'}}/> <span>Filter</span>
            </button>
            <div className='card collapse' id='organFilterMenu'>
                <button 
                    className='btn btn-organ'
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target="#heartFilter"
                    aria-expanded="false"
                    aria-controls="heartFilter"
                >
                    <span>Heart</span> <HiChevronDown /> 
                </button>
                <div className='collapse check' id='heartFilter'>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckHeart'></input>
                        <label className='form-check-label' for='flexCheckHeart'>
                            All Heart Tests
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckCholesterol'></input>
                        <label className='form-check-label' for='flexCheckCholesterol'>
                            Total Cholesterol
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckHDL'></input>
                        <label className='form-check-label' for='flexCheckHDL'>
                            HDL
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckLDL'></input>
                        <label className='form-check-label' for='flexCheckLDL'>
                            LDL
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckCholHDL'></input>
                        <label className='form-check-label' for='flexCheckCholHDL'>
                            Cholesterol/HDL Ratio
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckLDLChol'></input>
                        <label className='form-check-label' for='flexCheckLDLChol'>
                            LDL Cholesterol calc.
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckcLDLHDL'></input>
                        <label className='form-check-label' for='flexCheckcLDLHDL'>
                            cLDL/HDL Ratio
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckTrig'></input>
                        <label className='form-check-label' for='flexCheckTrig'>
                            Triglycerides
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckBNP'></input>
                        <label className='form-check-label' for='flexCheckBNP'>
                            BNP
                        </label>
                    </div>
                </div>
                <button 
                    className='btn btn-organ'
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target="#liverFilter"
                    aria-expanded="false"
                    aria-controls="liverFilter"
                >
                    <span>Liver</span> <HiChevronDown /> 
                </button>
                <div className='collapse check' id='liverFilter'>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckLiver'></input>
                        <label className='form-check-label' for='flexCheckLiver'>
                            All Liver Tests
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckAST'></input>
                        <label className='form-check-label' for='flexCheckAST'>
                            AST
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckALT'></input>
                        <label className='form-check-label' for='flexCheckALT'>
                            ALT
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckALK'></input>
                        <label className='form-check-label' for='flexCheckALK'>
                            ALK Phosphatase
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckBilirubin'></input>
                        <label className='form-check-label' for='flexCheckBilirubin'>
                            Total Bilirubin
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckAlbumin'></input>
                        <label className='form-check-label' for='flexCheckAlbumin'>
                            Albumin
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckProtein'></input>
                        <label className='form-check-label' for='flexCheckProtein'>
                            Total Protein
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckIron'></input>
                        <label className='form-check-label' for='flexCheckIron'>
                            Iron
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckFerritin'></input>
                        <label className='form-check-label' for='flexCheckFerritin'>
                            Ferritin
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckCortisol'></input>
                        <label className='form-check-label' for='flexCheckCortisol'>
                            Cortisol
                        </label>
                    </div>
                </div>
                <button 
                    className='btn btn-organ'
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target="#kidneyFilter"
                    aria-expanded="false"
                    aria-controls="kidneyFilter"
                >
                    <span>Kidneys</span> <HiChevronDown /> 
                </button>
                <div className='collapse check' id='kidneyFilter'>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckKidney'></input>
                        <label className='form-check-label' for='flexCheckKidney'>
                            All Kidney Tests
                        </label>
                    </div>
                </div>
                <button 
                    className='btn btn-organ'
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target="#pancreasFilter"
                    aria-expanded="false"
                    aria-controls="pancreasFilter"
                >
                    <span>Pancreas</span> <HiChevronDown /> 
                </button>
                <div className='collapse check' id='pancreasFilter'>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckPancreas'></input>
                        <label className='form-check-label' for='flexCheckPancreas'>
                            All Pancreas Tests
                        </label>
                    </div>
                </div>
                <button 
                    className='btn btn-organ'
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target="#thyroidFilter"
                    aria-expanded="false"
                    aria-controls="thyroidFilter"
                >
                    <span>Thyroid</span> <HiChevronDown /> 
                </button>
                <div className='collapse check' id='thyroidFilter'>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckThyroid'></input>
                        <label className='form-check-label' for='flexCheckThyroid'>
                            All Thyroid Tests
                        </label>
                    </div>
                </div>
                <button 
                    className='btn btn-organ'
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target="#adrenalFilter"
                    aria-expanded="false"
                    aria-controls="adrenalFilter"
                >
                    <span>Adrenal</span> <HiChevronDown /> 
                </button>
                <div className='collapse check' id='adrenalFilter'>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckAdrenal'></input>
                        <label className='form-check-label' for='flexCheckAdrenal'>
                            All Adrenal Tests
                        </label>
                    </div>
                </div>
                <button 
                    className='btn btn-organ'
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target="#boneFilter"
                    aria-expanded="false"
                    aria-controls="boneFilter"
                >
                    <span>Bone</span> <HiChevronDown /> 
                </button>
                <div className='collapse check' id='boneFilter'>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckBone'></input>
                        <label className='form-check-label' for='flexCheckBone'>
                            All Bone Tests
                        </label>
                    </div>
                </div>
                <button 
                    className='btn btn-organ'
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target="#bloodFilter"
                    aria-expanded="false"
                    aria-controls="bloodFilter"
                >
                    <span>Blood</span> <HiChevronDown /> 
                </button>
                <div className='collapse check' id='bloodFilter'>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckBlood'></input>
                        <label className='form-check-label' for='flexCheckBlood'>
                            All Blood Tests
                        </label>
                    </div>
                </div>
                <button 
                    className='btn btn-organ'
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target="#sexFilter"
                    aria-expanded="false"
                    aria-controls="sexFilter"
                >
                    <span>Sex Organs</span> <HiChevronDown /> 
                </button>
                <div className='collapse check' id='sexFilter'>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckSex'></input>
                        <label className='form-check-label' for='flexCheckSex'>
                            All Sex Organ Tests
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardOrgans
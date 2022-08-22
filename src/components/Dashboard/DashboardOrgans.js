import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiChevronDown } from 'react-icons/hi';
import './DashboardOrgans.css';
import OrganCard from './OrganCard';

const DashboardOrgans = () => {
    const tempData = [
        {
            date: '5/16/1966',
            FRESH: '88',
            FROZEN: '99',
        },
        {
            date: '8/25/2021',
            FRESH: '97',
        },
        {
            date: '1/4/2021',
            FRESH: '95',
            FROZEN: '82',
        }
    ]

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
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckBUN'></input>
                        <label className='form-check-label' for='flexCheckBUN'>
                            BUN
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckCreatinine'></input>
                        <label className='form-check-label' for='flexCheckCreatinine'>
                            Creatinine
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckAlbumin'></input>
                        <label className='form-check-label' for='flexCheckAlbumin'>
                            Albumin
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckGFR'></input>
                        <label className='form-check-label' for='flexCheckGFR'>
                            GFR
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckUric'></input>
                        <label className='form-check-label' for='flexCheckUric'>
                            Uric Acid
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
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckAmylase'></input>
                        <label className='form-check-label' for='flexCheckAmylase'>
                            Amylase
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckLipase'></input>
                        <label className='form-check-label' for='flexCheckLipase'>
                            Lipase
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckGlucose'></input>
                        <label className='form-check-label' for='flexCheckGlucose'>
                            Glucose
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckHbA1C'></input>
                        <label className='form-check-label' for='flexCheckHbA1C'>
                            HbA1C
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
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckTSH'></input>
                        <label className='form-check-label' for='flexCheckTSH'>
                            TSH
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckThyroxine'></input>
                        <label className='form-check-label' for='flexCheckThyroxine'>
                            Free Thyroxine
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
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckTestosterone'></input>
                        <label className='form-check-label' for='flexCheckTestosterone'>
                            Testosterone
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
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckCalcium'></input>
                        <label className='form-check-label' for='flexCheckCalcium'>
                            Calcium
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckPhosphorus'></input>
                        <label className='form-check-label' for='flexCheckPhosphorus'>
                            Phosphorus
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckALK'></input>
                        <label className='form-check-label' for='flexCheckALK'>
                            ALK Phosphatase
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
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckWBC'></input>
                        <label className='form-check-label' for='flexCheckWBC'>
                            WBC
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckRBC'></input>
                        <label className='form-check-label' for='flexCheckRBC'>
                            RBC
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckHGB'></input>
                        <label className='form-check-label' for='flexCheckHGB'>
                            HGB
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckHCT'></input>
                        <label className='form-check-label' for='flexCheckHCT'>
                            HCT
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckMCV'></input>
                        <label className='form-check-label' for='flexCheckMCV'>
                            MCV
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckMCH'></input>
                        <label className='form-check-label' for='flexCheckMCH'>
                            MCH
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckMCHC'></input>
                        <label className='form-check-label' for='flexCheckMCHC'>
                            MCHC
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckRDW'></input>
                        <label className='form-check-label' for='flexCheckRDW'>
                            RDW
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckPLT'></input>
                        <label className='form-check-label' for='flexCheckPLT'>
                            PLT, Automated
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckMPV'></input>
                        <label className='form-check-label' for='flexCheckCortisol'>
                            MPV
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckNeutrophilP'></input>
                        <label className='form-check-label' for='flexCheckNeutrophilP'>
                            Neutrophil %
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckLymphocytesP'></input>
                        <label className='form-check-label' for='flexCheckLymphocytesP'>
                            Lymphocytes %
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckMonocytesP'></input>
                        <label className='form-check-label' for='flexCheckMonocytesP'>
                            Monocytes %
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckEosinophilsP'></input>
                        <label className='form-check-label' for='flexCheckEosinophilsP'>
                            Eosinophils %
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckBasophilsP'></input>
                        <label className='form-check-label' for='flexCheckBasophilsP'>
                            Basophils %
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckNeutrophilN'></input>
                        <label className='form-check-label' for='flexCheckNeutrophilN'>
                            Neutrophil #
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckLymphocytesN'></input>
                        <label className='form-check-label' for='flexCheckLymphocytesN'>
                            Lymphocytes #
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckMonocytesN'></input>
                        <label className='form-check-label' for='flexCheckMonocytesN'>
                            Monocytes #
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckEosinophilsN'></input>
                        <label className='form-check-label' for='flexCheckEosinophilsN'>
                            Eosinophils #
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckBasophilsN'></input>
                        <label className='form-check-label' for='flexCheckBasophilsN'>
                            Basophils #
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
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckTestosterone'></input>
                        <label className='form-check-label' for='flexCheckTestosterone'>
                            Testosterone
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckPSA'></input>
                        <label className='form-check-label' for='flexCheckPSA'>
                            PSA
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckEstradiol'></input>
                        <label className='form-check-label' for='flexCheckEstradiol'>
                            Estradiol
                        </label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='flexCheckCA125'></input>
                        <label className='form-check-label' for='flexCheckCA125'>
                            CA125
                        </label>
                    </div>
                </div>
            </div>
            <OrganCard 
                title='Glucose'
                testName='Glucose'
                data={tempData}
                publicMin={50}
                publicMax={120}
                patientMax={100}
                patientMin={82}
            />
        </div>
    )
}

export default DashboardOrgans
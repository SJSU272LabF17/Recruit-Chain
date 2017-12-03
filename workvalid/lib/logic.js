'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Change Employment transaction
 * @param {org.acme.workvalid.ChangeEmployment} changeEmploymentValue
 * @transaction
 */

function ChangeEmployment(changeEmploymentValue) {
    var assetRegistry;
    var id = changeEmploymentValue.newProfileValue.jobId;

    return getAssetRegistry('org.acme.workvalidation.JobProfile')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            asset.currEmployment = changeEmploymentValue.currEmployment;
            asset.leavingDate = changeEmploymentValue.leavingDate;
            return assetRegistry.update(asset);
        });
}


// /**
//  * Change DrugTestReport transaction
//  * @param {org.acme.workvalidation.changeDrugTestReport} changeValue
//  * @transaction
//  */
//
// function changeDrugTestReport(changeValue) {
//     var assetRegistry;
//     var id = changeValue.newDtRecord.dtrId;
//
//     return getAssetRegistry('org.acme.biznet.DrugTestReport')
//         .then(function(ar) {
//             assetRegistry = ar;
//             return assetRegistry.get(id);
//         })
//         .then(function(asset) {
//             asset.dtrDate = changeValue.dtrDate;
//             asset.dtrType = changeValue.dtrType;
//             asset.dtrResult = changeValue.dtrResult;
//             return assetRegistry.update(asset);
//         });
// }
//
//
//
// /**
//  * Change Education transaction
//  * @param {org.acme.workvalidation.changeEducationRecords} changeValue
//  * @transaction
//  */
//
// function changeEducationRecords(changeValue) {
//     var assetRegistry;
//     var id = changeValue.newEduRecord.eduId;
//
//     return getAssetRegistry('org.acme.workvalidation.EducationRecord')
//         .then(function(ar) {
//             assetRegistry = ar;
//             return assetRegistry.get(id);
//         })
//         .then(function(asset) {
//             asset.institutionId = changeValue.institutionId;
//             asset.EduLevel = changeValue.EduLevel;
//             asset.institutionId = changeValue.institutionId;
//             asset.EduLevel = changeValue.EduLevel;
//             return assetRegistry.update(asset);
//         });
// }
//
// /**
//  * Change Police Verification transaction
//  * @param {org.acme.workvalidation.changePoliceverificationReport} changeValue
//  * @transaction
//  */
//
// function changePoliceverificationReport(changeValue) {
//     var assetRegistry;
//     var id = changeValue.newPvRecord.pvrId;
//
//     return getAssetRegistry('org.acme.workvalidation.PoliceverificationReport')
//         .then(function(ar) {
//             assetRegistry = ar;
//             return assetRegistry.get(id);
//         })
//         .then(function(asset) {
//             asset.pvrDate = changeValue.pvrDate;
//             asset.pvrDetails = changeValue.pvrDetails;
//             return assetRegistry.update(asset);
//         });
// }
//
// /**
//  * Change Police Verification transaction
//  * @param {org.acme.workvalidation.changeCertificate} changeValue
//  * @transaction
//  */
//
// function changeCertificate(changeValue) {
//     var assetRegistry;
//     var id = changeValue.newCertificate.certId;
//
//     return getAssetRegistry('org.acme.workvalidation.Certificate')
//         .then(function(ar) {
//             assetRegistry = ar;
//             return assetRegistry.get(id);
//         })
//         .then(function(asset) {
//             asset.certName = changeValue.certName;
//             asset.certProvidedName = changeValue.certProvidedName;
//             asset.completeDate = changeValue.completeDate;
//             asset.grade = changeValue.grade;
//             return assetRegistry.update(asset);
//         });
// }

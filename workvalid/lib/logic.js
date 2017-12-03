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
    var id = changeEmploymentValue.ProfileValue.jobId;

    return getAssetRegistry('org.acme.workvalid.JobProfile')
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


/**
 * Change Education transaction
 * @param {org.acme.workvalid.ChangeEducationRecords} changeValue
 * @transaction
 */

function changeEducationRecords(changeValue) {
    var assetRegistry;
    var id = changeValue.newEduRecord.eduId;

    return getAssetRegistry('org.acme.workvalid.EducationRecord')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            asset.graduateDate = changeValue.graduateDate;
            asset.grade = changeValue.grade;
            return assetRegistry.update(asset);
        });
}


/**
 * Change DrugTestReport transaction
 * @param {org.acme.workvalid.ChangeDrugTestReport} changeValue
 * @transaction
 */

function ChangeDrugTestReport(changeValue) {
    var assetRegistry;
    var id = changeValue.newDtRecord.dtrId;

    return getAssetRegistry('org.acme.workvalid.DrugTestReport')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            asset.dtrDate = changeValue.dtrDate;
            asset.dtrResult = changeValue.dtrResult;
            return assetRegistry.update(asset);
        });
}


/**
 * Change Police Verification transaction
 * @param {org.acme.workvalid.ChangePoliceverificationReport} changeValue
 * @transaction
 */

function ChangePoliceverificationReport(changeValue) {
    var assetRegistry;
    var id = changeValue.newPvRecord.pvrId;

    return getAssetRegistry('org.acme.workvalid.PoliceverificationReport')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            asset.pvrDate = changeValue.pvrDate;
            asset.pvrDetails = changeValue.pvrDetails;
            return assetRegistry.update(asset);
        });
}

/**
 * Change Certification Record
 * @param {org.acme.workvalid.ChangeCertificate} changeValue
 * @transaction
 */

function ChangeCertificate(changeValue) {
    var assetRegistry;
    var id = changeValue.newCertificate.certId;

    return getAssetRegistry('org.acme.workvalid.Certificate')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            asset.completeDate = changeValue.completeDate;
            asset.grade = changeValue.grade;
            return assetRegistry.update(asset);
        });
}

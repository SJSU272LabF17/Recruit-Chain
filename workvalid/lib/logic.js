'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Change Employment transaction
 * @param {org.acme.workvalidation.ChangeEmployment} changeEmploymentValue
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

/**
 * Change Background Check transaction
 * @param {org.acme.workvalidation.changeTestDetails} changeValue
 * @transaction
 */

function changeTestDetails(changeValue) {
    var assetRegistry;
    var id = changeValue.newCheckValue.bcgId;

    return getAssetRegistry('org.acme.workvalidation.BackgroundCheck')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            asset.criminalRecord = changeValue.criminalRecord;
            asset.drivingViolations = changeValue.drivingViolations;
            asset.workerscompensationClaimsRecord = changeValue.workerscompensationClaimsRecord;
            asset.drugTest = changeValue.drugTest;
            asset.testDate = changeValue.testDate;
            return assetRegistry.update(asset);
        });
}


/**
 * Change DrugTestReport transaction
 * @param {org.acme.workvalidation.changeDrugTestReport} changeValue
 * @transaction
 */

function changeDrugTestReport(changeValue) {
    var assetRegistry;
    var id = changeValue.newDtRecord.dtrId;

    return getAssetRegistry('org.acme.biznet.DrugTestReport')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            asset.dtrDate = changeValue.dtrDate;
            asset.dtrType = changeValue.dtrType;
            asset.dtrResult = changeValue.dtrResult;
            return assetRegistry.update(asset);
        });
}


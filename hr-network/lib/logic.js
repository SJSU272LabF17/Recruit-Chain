'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.acme.biznet.ChangeJob} changeJob
 * @transaction
 */
function onChangeJob(changeJob) {
    changeJob.candidate.employer = changeJob.newemployer;
    return getAssetRegistry('org.acme.biznet.Candidate')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.update(changeJob.candidate);
        });
}
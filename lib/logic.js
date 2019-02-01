/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Transfer funds transaction
 * @param {demo.TransferFunds} transfer
 * @transaction
 */
function transfer (transfer) {
    //Checking if there are enough funds.
    //if(transfer.from.balance < transfer.amount) {
      //  throw new Error("No sufficient funds.");
    //}

    //Performing the transaction.
    transfer.from.balance -= transfer.amount;
    transfer.to.balance += transfer.amount;

    //Updating on the blockchain
    return getAssetRegistry('demo.Account').then (function (assetRegistry) {
        return assetRegistry.update(transfer.from);
    }).then (function () {
        return getAssetRegistry('demo.Account');
    }).then (function (assetRegistry) {
        return assetRegistry.update(transfer.to);
    });

}

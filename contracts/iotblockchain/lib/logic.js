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

'use strict';
/**
 * Write your transction processor functions here
 */

 
/**
 * An Acceleration reading has been received for a shipment
 * @param {org.example.iotblockchain.GpsReading} GPSReading - the GPSReading transaction
 * @transaction
 */
function LocationReading(GPSReading) {
    var product = GPSReading.product;
    var NS = 'org.example.iotblockchain';
    var factory = getFactory();

    if (product.gpsReadings) {
        product.gpsReadings.push(GPSReading);
    } else {
        product.gpsReadings = [GPSReading];
    }

    return getAssetRegistry(NS + '.Product')
        .then(function (productRegistry) {
            // add the temp reading to the shipment
            return productRegistry.update(product);
        });
}

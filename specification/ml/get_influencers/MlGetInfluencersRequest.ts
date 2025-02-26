/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Page } from '@ml/_types/Page'
import { RequestBase } from '@_types/Base'
import { Field, Id } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { DateString } from '@_types/Time'

/**
 * @rest_spec_name ml.get_influencers
 * @since 5.4.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /** Identifier for the anomaly detection job. */
    job_id: Id
  }
  query_parameters: {
    /**
     * If true, the results are sorted in descending order.
     * @server_default false
     */
    desc?: boolean
    /** Returns influencers with timestamps earlier than this time. */
    end?: DateString
    /** If true, the output excludes interim results. By default, interim results are included. */
    exclude_interim?: boolean
    /** Returns influencers with anomaly scores greater than or equal to this value. */
    influencer_score?: double
    /** Skips the specified number of influencers. */
    from?: integer
    /** Specifies the maximum number of influencers to obtain. */
    size?: integer
    /** Specifies the sort field for the requested influencers. By default, the influencers are sorted by the influencer_score value. */
    sort?: Field
    /** Returns influencers with timestamps after this time. */
    start?: DateString
  }
  body: {
    page?: Page
  }
}

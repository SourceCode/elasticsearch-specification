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

import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * @rest_spec_name ml.update_data_frame_analytics
 * @since 7.3.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /** Identifier for the data frame analytics job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. */
    id: Id
  }
  body: {
    /** A description of the job. */
    description?: string
    /**
     * The approximate maximum amount of memory resources that are permitted for analytical processing. The default value for data frame analytics jobs is 1gb. If your elasticsearch.yml file contains an xpack.ml.max_model_memory_limit setting, an error occurs when you try to create data frame analytics jobs that have model_memory_limit values greater than that setting.
     * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/ml-settings.html
     */
    model_memory_limit?: string
    /** The maximum number of threads to be used by the analysis. The default value is 1. Using more threads may decrease the time necessary to complete the analysis at the cost of using more CPU. Note that the process may use additional threads for operational functionality other than the analysis itself. */
    max_num_threads?: integer
    /**
     * Specifies whether this job can start when there is insufficient machine learning node capacity for it to be immediately assigned to a node.
     * @server_default false
     * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/ml-settings.html#advanced-ml-settings
     */
    allow_lazy_start?: boolean
  }
}

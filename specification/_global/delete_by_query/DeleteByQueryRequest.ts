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
import {
  Conflicts,
  DefaultOperator,
  ExpandWildcards,
  Fields,
  Indices,
  Routing,
  SearchType,
  WaitForActiveShards
} from '@_types/common'
import { long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { SlicedScroll } from '@_types/SlicedScroll'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name delete_by_query
 * @since 5.0.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    index: Indices
  }
  query_parameters: {
    allow_no_indices?: boolean
    analyzer?: string
    analyze_wildcard?: boolean
    conflicts?: Conflicts
    default_operator?: DefaultOperator
    df?: string
    expand_wildcards?: ExpandWildcards
    from?: long
    ignore_unavailable?: boolean
    lenient?: boolean
    max_docs?: long
    preference?: string
    refresh?: boolean
    request_cache?: boolean
    requests_per_second?: long
    routing?: Routing
    q?: string
    scroll?: Time
    scroll_size?: long
    search_timeout?: Time
    search_type?: SearchType
    size?: long
    slices?: long
    sort?: string[]
    _source?: boolean | Fields
    _source_excludes?: Fields
    _source_includes?: Fields
    stats?: string[]
    terminate_after?: long
    timeout?: Time
    version?: boolean
    wait_for_active_shards?: WaitForActiveShards
    wait_for_completion?: boolean
  }
  body: {
    max_docs?: long
    query?: QueryContainer
    slice?: SlicedScroll
  }
}

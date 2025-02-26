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
import { ExpandWildcards, Indices, SearchType } from '@_types/common'
import { long } from '@_types/Numeric'
import { Body, Header } from './types'

/**
 * @rest_spec_name msearch
 * @since 1.3.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and index aliases to search.
     */
    index?: Indices
  }
  query_parameters: {
    /**
     * If false, the request returns an error if any wildcard expression, index alias, or _all value targets only missing or closed indices. This behavior applies even if the request targets other open indices. For example, a request targeting foo*,bar* returns an error if an index starts with foo but no index starts with bar.
     */
    allow_no_indices?: boolean
    /**
     * If true, network roundtrips between the coordinating node and remote clusters are minimized for cross-cluster search requests.
     * @server_default true
     * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-cross-cluster-search.html#ccs-network-delays
     */
    ccs_minimize_roundtrips?: boolean
    /**
     * Type of index that wildcard expressions can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If true, concrete, expanded or aliased indices are ignored when frozen.
     * @server_default false
     */
    ignore_throttled?: boolean
    /**
     * If true, missing or closed indices are not included in the response.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Maximum number of concurrent searches the multi search API can execute.
     */
    max_concurrent_searches?: long
    /**
     * Maximum number of concurrent shard requests that each sub-search request executes per node.
     * @server_default 5
     */
    max_concurrent_shard_requests?: long
    /**
     * Defines a threshold that enforces a pre-filter roundtrip to prefilter search shards based on query rewriting if the number of shards the search request expands to exceeds the threshold. This filter roundtrip can limit the number of shards significantly if for instance a shard can not match any documents based on its rewrite method i.e., if date filters are mandatory to match but the shard bounds and the query are disjoint.
     */
    pre_filter_shard_size?: long
    /**
     * Indicates whether global term and document frequencies should be used when scoring returned documents.
     */
    search_type?: SearchType
    /**
     * If true, hits.total are returned as an integer in the response. Defaults to false, which returns an object.
     * @server_default false
     */
    rest_total_hits_as_int?: boolean
    /**
     * Specifies whether aggregation and suggester names should be prefixed by their respective types in the response.
     */
    typed_keys?: boolean
  }
  /** @identifier searches */
  body?: Array<Header | Body>
}

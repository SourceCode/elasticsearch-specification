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

import {
  ByteSize,
  Id,
  IndexName,
  Name,
  Type,
  Uuid,
  VersionString
} from '@_types/common'
import { Host, TransportAddress, Ip } from '@_types/Networking'
import { long, Percentage } from '@_types/Numeric'
import { Time, EpochMillis, DateString } from '@_types/Time'

export class RecoveryBytes {
  percent: Percentage
  recovered?: ByteSize
  recovered_in_bytes: ByteSize
  recovered_from_snapshot?: ByteSize
  recovered_from_snapshot_in_bytes?: ByteSize
  reused?: ByteSize
  reused_in_bytes: ByteSize
  total?: ByteSize
  total_in_bytes: ByteSize
}

export class FileDetails {
  length: long
  name: string
  recovered: long
}

export class RecoveryFiles {
  details?: FileDetails[]
  percent: Percentage
  recovered: long
  reused: long
  total: long
}

export class RecoveryIndexStatus {
  bytes?: RecoveryBytes
  files: RecoveryFiles
  size: RecoveryBytes
  source_throttle_time?: Time
  source_throttle_time_in_millis: EpochMillis
  target_throttle_time?: Time
  target_throttle_time_in_millis: EpochMillis
  total_time_in_millis: EpochMillis
  total_time?: Time
}

export class RecoveryOrigin {
  hostname?: string
  host?: Host
  transport_address?: TransportAddress
  id?: Id
  ip?: Ip
  name?: Name
  bootstrap_new_history_uuid?: boolean
  repository?: Name
  snapshot?: Name
  version?: VersionString
  restoreUUID?: Uuid
  index?: IndexName
}

export class RecoveryStartStatus {
  check_index_time: long
  total_time_in_millis: string
}

export class RecoveryStatus {
  shards: ShardRecovery[]
}

export class TranslogStatus {
  percent: Percentage
  recovered: long
  total: long
  total_on_start: long
  total_time?: string
  total_time_in_millis: EpochMillis
}

export class VerifyIndex {
  check_index_time?: Time
  check_index_time_in_millis: EpochMillis
  total_time?: Time
  total_time_in_millis: EpochMillis
}

export class ShardRecovery {
  id: long
  index: RecoveryIndexStatus
  primary: boolean
  source: RecoveryOrigin
  stage: string
  start?: RecoveryStartStatus
  start_time?: DateString
  start_time_in_millis: EpochMillis
  stop_time?: DateString
  stop_time_in_millis: EpochMillis
  target: RecoveryOrigin
  total_time?: DateString
  total_time_in_millis: EpochMillis
  translog: TranslogStatus
  type: Type
  verify_index: VerifyIndex
}

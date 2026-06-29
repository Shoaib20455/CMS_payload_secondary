import * as migration_20260629_113758_performance_media_indexes from './20260629_113758_performance_media_indexes';

export const migrations = [
  {
    up: migration_20260629_113758_performance_media_indexes.up,
    down: migration_20260629_113758_performance_media_indexes.down,
    name: '20260629_113758_performance_media_indexes'
  },
];

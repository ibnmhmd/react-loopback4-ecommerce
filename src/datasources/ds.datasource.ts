import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver,
  ValueOrPromise,
} from '@loopback/core';
import {juggler, AnyObject} from '@loopback/repository';
import config from './ds.datasource.config.json';
require('dotenv').config();
const { MONGODB_HOST,MONGODB_PASSWORD,MONGODB_USER,MONGODB_DB , MONGODB_FLAT_NODES } = process.env;

@lifeCycleObserver('datasource')
export class DsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'ds';
  constructor(
    @inject('datasources.config.ds', {optional: true , useUnifiedTopology : true})
    dsConfig: AnyObject = config,
  ) {
    const MONGO_SRV_URL = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DB}?retryWrites=true&w=majority`;
    const MONGO_NONE_SRV_URL = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_FLAT_NODES}/${MONGODB_DB}?ssl=true&replicaSet=iShopCluster-shard-0&authSource=admin&retryWrites=true`;
    dsConfig.url = MONGO_NONE_SRV_URL;
    dsConfig.host = MONGODB_HOST;
    dsConfig.password = MONGODB_PASSWORD;
    dsConfig.user = MONGODB_USER;
    dsConfig.database = MONGODB_DB;
    super(dsConfig);
  }

  /**
   * Start the datasource when application is started
   */
  start(): ValueOrPromise<void> {
    // Add your logic here to be invoked when the application is started
  }

  /**
   * Disconnect the datasource when application is stopped. This allows the
   * application to be shut down gracefully.
   */
  stop(): ValueOrPromise<void> {
    return super.disconnect();
  }
}

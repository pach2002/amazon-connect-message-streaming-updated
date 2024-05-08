#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AmazonConnectMessageStreamingUpdatedStack } from '../lib/amazon-connect-message-streaming-updated-stack';

const app = new cdk.App();
new AmazonConnectMessageStreamingUpdatedStack(app, 'AmazonConnectMessageStreamingUpdatedStack');

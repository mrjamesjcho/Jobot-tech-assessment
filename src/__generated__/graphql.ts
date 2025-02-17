/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createPing: Ping;
};

export type Ping = {
  __typename?: 'Ping';
  timestamp: Scalars['Date']['output'];
};

export type Query = {
  __typename?: 'Query';
  latestPing?: Maybe<Ping>;
};

export type Subscription = {
  __typename?: 'Subscription';
  latestPing: Ping;
};

export type GetLatestPingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLatestPingQuery = { __typename?: 'Query', latestPing?: { __typename?: 'Ping', timestamp: any } | null };

export type CreatePingMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePingMutation = { __typename?: 'Mutation', createPing: { __typename?: 'Ping', timestamp: any } };

export type LatestPingSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type LatestPingSubscriptionSubscription = { __typename?: 'Subscription', latestPing: { __typename?: 'Ping', timestamp: any } };


export const GetLatestPingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLatestPing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latestPing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<GetLatestPingQuery, GetLatestPingQueryVariables>;
export const CreatePingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<CreatePingMutation, CreatePingMutationVariables>;
export const LatestPingSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"LatestPingSubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latestPing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<LatestPingSubscriptionSubscription, LatestPingSubscriptionSubscriptionVariables>;
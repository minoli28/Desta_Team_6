import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusinessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly chosen_industries?: string;
  readonly name?: string;
  readonly email?: string;
  readonly telephone?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Business {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly industry?: string;
  readonly location?: string;
  readonly telephone?: string;
  readonly website?: string;
  readonly insta_handle?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Business, BusinessMetaData>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business, BusinessMetaData>) => MutableModel<Business, BusinessMetaData> | void): Business;
}
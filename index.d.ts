// This type definition adheres to Mason v2
import { HTTPMethods, HTTPStatusCodes } from 'http-typing'

export type MIME = string

export interface MasonFile {
  name: string,
  title?: string,
  description?: string,
  accept?: Array<MIME>
}

export interface MasonControl {
  href: string,
  isHrefTemplate?: boolean,
  title?: string,
  description?: string,
  method?: HTTPMethods,
  encoding?: 'none' | 'json' | 'json+files' | 'raw',
  alt?: Array<MasonControl>,
  schemaUrl?: string,
  accept?: Array<MIME>,
  output?: Array<MIME>,
  files?: Array<MasonFile>
}

export interface MasonControls {
  [key: string]: MasonControl
}

export interface MasonMeta {
  '@title'?: string,
  '@description'?: string,
  '@controls'?: MasonControls
}

export interface MasonNamespace {
  name: string
}

export interface MasonNamespaces {
  [key: string]: MasonNamespace
}

export interface MasonError {
  '@message': string,
  '@id'?: string,
  '@code'?: string,
  '@messages'?: Array<string>,
  '@details'?: string,
  '@HTTPStatusCodes'?: HTTPStatusCodes,
  '@controls'?: MasonControls,
  '@time'?: string
}

export default interface Mason {
  '@controls': MasonControls
}

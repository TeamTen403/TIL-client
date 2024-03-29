export type TagType = {
  value: TagValue
  name: string
  selected?: boolean
}

export type TagValue =
  | 'COMMUNICATION'
  | 'BUSINESS'
  | 'EXPERIMENTAL_VERIFICATION'
  | 'LEADERSHIP_MANAGEMENT'
  | 'MARKETING'
  | 'RESEARCH'
  | 'CS_CX'
  | 'UX_UI'
  | 'DATA_ANALYTICS_VISUALIZATION'
  | 'FE'
  | 'BE'
  | 'ANDROID'
  | 'IOS'
  | 'DBA'
  | 'DEVOPS'
  | 'INFRA'
  | 'QA'
  | 'DISTRIBUTION_SERVICE_TERMINATION'
  | 'OTHER_DEVELOPMENT'
  | 'OTHERS'

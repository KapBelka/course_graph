export default interface Task {
  id: number
  name: string
  duration: number
  resources: Resource[]
  needTasksIds: number[]
}

export interface Resource {
  resourceKindId: number | null
  count: number
}

export interface CalculatedTask {
  id: number
  name: string
  duration: number
  power: number
  resources: Resource[]
  needTasksIds: number[]
  isCritical: boolean | null
  earlyStart: number | null
  earlyEnd: number | null
  lateStart: number | null
  lateEnd: number | null
  fullReserv: number | null
  reserv: number | null
}
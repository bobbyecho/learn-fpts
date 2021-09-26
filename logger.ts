type LogOption = {
  title: string;
  value: unknown
}

export const logger = (options: LogOption) => console.log(`[${options.title}]: ${options.value}`)

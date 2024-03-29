import {
  LogItemExtraInput,
  LogItemMessage,
} from "@aws-lambda-powertools/logger/types";

/**
 * Stub for Powertools Logger
 */
export class Logger {
  constructor() {
    // Leave it empty for now.
  }

  injectLambdaContext(input: any) {
    // Do nothing.
  }

  info(input: LogItemMessage, ...extraInput: LogItemExtraInput): void {
    // Just log to console.
    console.log(input);
  }

  warn(input: LogItemMessage, ...extraInput: LogItemExtraInput): void {
    // Just log to console.
    console.log(input);
  }

  error(input: LogItemMessage, ...extraInput: LogItemExtraInput): void {
    // Just log to console.
    console.log(input);
  }
}

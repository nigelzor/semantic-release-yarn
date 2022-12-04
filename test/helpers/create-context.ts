import { spy } from "sinon";
import { WritableStreamBuffer } from "stream-buffers";
import { directory } from "tempy";
import type { BranchSpec } from "../../src/definitions/context.js";

export function createContext() {
  return {
    cwd: directory(),
    logger: { log: spy(), error: spy(), success: spy() },
    stdout: new WritableStreamBuffer(),
    stderr: new WritableStreamBuffer(),
    env: {},
    envCi: {
      isCi: false,
    } as any,
    options: {},
    branches: [],
    branch: {
      name: "main",
    } as BranchSpec,
  };
}
